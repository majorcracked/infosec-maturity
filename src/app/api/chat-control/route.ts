import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { questionText, documentText, messages, userMessage } = await req.json();

    if (!questionText || !userMessage) {
      return NextResponse.json(
        { error: "Missing questionText or userMessage in request body" },
        { status: 400 }
      );
    }

    const systemPrompt = `You are AegisFlow's AI Security Compliance Copilot, an expert InfoSec auditor and security architect.
The user is auditing compliance for the following security control:
Control Question: "${questionText}"

An uploaded evidence document was provided:
"""
${documentText || "No evidence document uploaded yet."}
"""

Your goal is to assist the user in understanding, implementing, and documenting compliance for this control.
1. If they ask for policy templates or clauses, write high-quality, professional Markdown policy snippets they can drop into their documentation.
2. If they ask why their evidence document failed verification, analyze the document text above and highlight the exact gaps.
3. If they ask technical implementation questions (e.g. AWS, GCP, Azure, Kubernetes configurations), provide concrete, step-by-step instructions.
Keep your responses professional, direct, and formatted in Markdown. Do not repeat the system prompt.`;

    // Map conversation history
    const formattedMessages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
    ];

    if (Array.isArray(messages)) {
      messages.forEach((msg: any) => {
        if (msg.role === "user" || msg.role === "assistant") {
          formattedMessages.push({
            role: msg.role,
            content: msg.content,
          });
        }
      });
    }

    // Add latest user message
    formattedMessages.push({
      role: "user",
      content: userMessage,
    });

    try {
      const ollamaHost = (process.env.OLLAMA_HOST || "http://127.0.0.1:11434").replace(/\/$/, "");
      const ollamaResponse = await fetch(`${ollamaHost}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          model: process.env.OLLAMA_MODEL || "qwen2.5:7b",
          messages: formattedMessages,
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error(`Ollama server returned status ${ollamaResponse.status}`);
      }

      const rawResult = await ollamaResponse.json();
      const assistantResponse = rawResult.message?.content || "";

      return NextResponse.json({
        content: assistantResponse,
        source: "ollama",
      });
    } catch (ollamaError: any) {
      console.warn("Ollama connection failed in chat-control, using fallback response:", ollamaError.message);
      
      // Fallback response engine for local Q&A when Ollama is offline
      const msgLower = userMessage.toLowerCase();
      let responseContent = "";

      if (msgLower.includes("template") || msgLower.includes("policy") || msgLower.includes("write")) {
        if (questionText.toLowerCase().includes("mfa")) {
          responseContent = `### Multi-Factor Authentication (MFA) Policy Clause (Template)

**1. Purpose**
This clause establishes requirements for enforcing multi-factor authentication (MFA) to safeguard access to all organizational systems, applications, and networks.

**2. Scope**
This policy applies to all employees, contractors, third-party vendors, and stakeholders accessing company resources.

**3. Policy Statements**
- **MFA Requirement**: Multi-Factor Authentication (MFA) is strictly required for all external connections to organizational networks, including VPNs, SaaS applications, and cloud consoles.
- **Approved MFA Methods**: Approved authentication factors include hardware security keys (e.g., YubiKeys) and mobile authenticator applications (e.g., Google Authenticator, Duo). SMS-based OTP is deprecated and restricted.
- **Enforcement**: MFA must be enforced at the identity provider (IdP) level. Temporary exceptions must be formally requested and approved by the CISO.
`;
        } else if (questionText.toLowerCase().includes("encrypt")) {
          responseContent = `### Cryptographic Protection & Data at Rest Encryption Policy Clause (Template)

**1. Policy Overview**
All production databases, backup volumes, cloud buckets, and storage repositories housing confidential or customer data must employ cryptographic protection at rest.

**2. Policy Statements**
- **Encryption Algorithm**: Data at rest must be encrypted using AES-256 or an equivalent industry-approved cryptographic algorithm.
- **Key Management**: Encryption keys must be managed through an automated key management service (e.g., AWS KMS) with monthly rotation cycles.
- **Access Restrictions**: Direct access to encryption/decryption keys must be restricted to authorized server accounts using least privilege rules.
`;
        } else {
          responseContent = `### Information Security Control Policy Clause (Template)

**1. Policy Statement**
The organization shall establish, maintain, and enforce documented procedures to support: **${questionText}**.

**2. Controls & Reviews**
- Documented guidelines must be reviewed and approved by management annually.
- Compliance logs must be captured and retained for a minimum of one (1) year.
- Any deviations must go through a risk acceptance process.
`;
        }
      } else if (msgLower.includes("why") || msgLower.includes("fail") || msgLower.includes("reason")) {
        responseContent = `### AI Audit Evidence Assessment (Offline Mode)

I have evaluated your query against the active control question: *"${questionText}"*.

Since the local Ollama instance (\`gemma4:e2b\`) is currently unreachable, I am evaluating the document parameters:
- **Evidence Status**: ${documentText ? "Document text is uploaded and available." : "No evidence document has been uploaded yet."}
- **Assessment**: If your document was rejected, it is typically because it lacks **explicit operational mandates**. Simply declaring "We support security best practices" is insufficient. The document must define:
  1. **Enforcement scopes** (who is affected).
  2. **Mandatory technologies** (e.g., Authenticator apps, AES-256 keys).
  3. **Verification frequency** (e.g., quarterly reviews).

*Tip: Upload a policy document containing these key operational details, then trigger verification again.*`;
      } else {
        responseContent = `### AI Audit Assistant Guidance (Offline Mode)

Thank you for your question regarding: *"${questionText}"*.

**Remediation & Compliance Guidance:**
1. **Document Control**: Create a clear policy outlining rules, scopes, and tools.
2. **Technical Enforcement**: Enforce these constraints programmatically (e.g., IAM groups, DB settings).
3. **Continuous Auditing**: Retain audit trails and review them periodically to ensure compliance.

*(Note: The local Ollama server running \`gemma4:e2b\` is currently offline. This response is powered by the local compliance knowledge base fallback.)*`;
      }

      return NextResponse.json({
        content: responseContent,
        source: "fallback",
      });
    }
  } catch (error: any) {
    console.error("API error in chat-control:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
