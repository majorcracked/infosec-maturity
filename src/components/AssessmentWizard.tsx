"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  FileText,
  RefreshCw,
  TrendingUp,
  Award,
  Lock,
  Layers,
  Activity,
  ClipboardList,
  Send,
  Printer,
  Server,
  Database,
  Users,
  Calendar as CalendarIcon,
  Globe,
  CheckSquare as TaskCheckIcon,
  Sparkles,
  Play,
  HelpCircle,
  Plus,
  MessageSquare,
  Clock,
} from "lucide-react";

interface Mapping {
  framework: string;
  clause: string;
  description: string;
}

interface Task {
  id: string;
  assignedTo: string | null;
  dueDate: string | null;
  status: string;
  priority: string;
}

interface Question {
  id: string;
  domain: string;
  text: string;
  requiresDoc: boolean;
  mappings: Mapping[];
  task: Task | null;
}

interface Answer {
  id?: string;
  questionId: string;
  response: string;
  evidenceUrl: string | null;
  evidenceText?: string | null;
  aiVerified: boolean | null;
  aiReasoning: string | null;
  verifiedAt?: string | null;
}

interface Policy {
  id: string;
  title: string;
  content: string;
}

interface Risk {
  id: string;
  title: string;
  threat: string;
  likelihood: number;
  impact: number;
  mitigation: string;
  status: string;
}

interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  source: string;
  severity: string;
  status: string;
  createdAt: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface OrganizationDto {
  id: string;
  name: string;
}

interface CommentDto {
  id: string;
  questionId: string;
  author: string;
  text: string;
  createdAt: string;
}

interface VendorDto {
  id: string;
  name: string;
  securityTier: string;
  complianceStatus: string;
  contactEmail: string;
  score: number;
}

interface AttestationDto {
  id: string;
  employeeName: string;
  employeeEmail: string;
  policyTitle: string;
  status: string;
  signedAt: string | null;
  createdAt: string;
}

interface ScanLogDto {
  id: string;
  connectorType: string;
  status: string;
  details: string;
  createdAt: string;
}

interface AssessmentWizardProps {
  questions: Question[];
  assessmentId: string;
  initialAnswers: Answer[];
  initialPolicies: Policy[];
  initialAlerts: SecurityAlert[];
  initialRisks: Risk[];
  organizations: OrganizationDto[];
  activeOrgId: string;
  initialComments: CommentDto[];
  initialVendors: VendorDto[];
  initialAttestations: AttestationDto[];
  initialScanLogs: ScanLogDto[];
}

export default function AssessmentWizard({
  questions,
  assessmentId,
  initialAnswers,
  initialPolicies,
  initialAlerts,
  initialRisks,
  organizations,
  activeOrgId,
  initialComments,
  initialVendors,
  initialAttestations,
  initialScanLogs,
}: AssessmentWizardProps) {
  // Tabs: "wizard" | "remediation" | "policy" | "risks" | "alerts" | "auditor" | "deck" | "attestations" | "vendors" | "library" | "report"
  const [activeTab, setActiveTab] = useState<
    "wizard" | "remediation" | "policy" | "risks" | "alerts" | "auditor" | "deck" | "attestations" | "vendors" | "library" | "report"
  >("wizard");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "";
    if (!mounted) return "";
    return new Date(dateStr).toLocaleDateString();
  };

  const formatDateTime = (dateStr: string | null | undefined) => {
    if (!dateStr) return "";
    if (!mounted) return "";
    return new Date(dateStr).toLocaleString();
  };
  
  // Convert initial answers to a map
  const initialAnswersMap = initialAnswers.reduce((acc, ans) => {
    acc[ans.questionId] = ans;
    return acc;
  }, {} as Record<string, Answer>);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>(initialAnswersMap);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // AI Control Chat States
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({});
  const [chatInput, setChatInput] = useState<string>("");
  const [sendingChat, setSendingChat] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Global Evidence RAG Chat States
  const [isRagOpen, setIsRagOpen] = useState<boolean>(false);
  const [ragMessages, setRagMessages] = useState<ChatMessage[]>([]);
  const [ragInput, setRagInput] = useState<string>("");
  const [sendingRag, setSendingRag] = useState<boolean>(false);
  const ragMessagesEndRef = useRef<HTMLDivElement | null>(null);

  // Policy Builder States
  const [policies, setPolicies] = useState<Policy[]>(initialPolicies);
  const [selectedPolicyTitle, setSelectedPolicyTitle] = useState<string>("Access Control Policy");
  const [policyEditorContent, setPolicyEditorContent] = useState<string>("");
  const [generatingPolicy, setGeneratingPolicy] = useState<boolean>(false);
  const [savingPolicy, setSavingPolicy] = useState<boolean>(false);

  // Threat Modeler & Risk States
  const [risks, setRisks] = useState<Risk[]>(initialRisks);
  const [techStackInput, setTechStackInput] = useState<string>("Next.js, PostgreSQL, AWS RDS, Okta IdP");
  const [runningModeler, setRunningModeler] = useState<boolean>(false);

  // Vulnerability Alerts States
  const [alerts, setAlerts] = useState<SecurityAlert[]>(initialAlerts);
  const [processingAlertId, setProcessingAlertId] = useState<string | null>(null);

  // Remediation Assignment States
  const [tasks, setTasks] = useState<Record<string, Task>>(
    questions.reduce((acc, q) => {
      if (q.task) acc[q.id] = q.task;
      return acc;
    }, {} as Record<string, Task>)
  );
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [assigneeInput, setAssigneeInput] = useState<string>("");
  const [dueDateInput, setDueDateInput] = useState<string>("");
  const [priorityInput, setPriorityInput] = useState<string>("MEDIUM");
  const [statusInput, setStatusInput] = useState<string>("OPEN");

  // Executive Report States
  const [reportMarkdown, setReportMarkdown] = useState<string>("");
  const [generatingReport, setGeneratingReport] = useState<boolean>(false);

  // Inline remediation file uploading states
  const [remediatingQuestionId, setRemediatingQuestionId] = useState<string | null>(null);

  // Connector scanning states
  const [scanningConnectorId, setScanningConnectorId] = useState<string | null>(null);

  // GRC Expanded States (Comments, Vendors, Attestations, ScanLogs)
  const [comments, setComments] = useState<CommentDto[]>(initialComments);
  const [commentInput, setCommentInput] = useState<string>("");
  const [submittingComment, setSubmittingComment] = useState<boolean>(false);
  const [activeCommentControlId, setActiveCommentControlId] = useState<string | null>(null);

  const [vendors, setVendors] = useState<VendorDto[]>(initialVendors);
  const [newVendorName, setNewVendorName] = useState<string>("");
  const [newVendorEmail, setNewVendorEmail] = useState<string>("");
  const [newVendorTier, setNewVendorTier] = useState<string>("HIGH");
  const [creatingVendor, setCreatingVendor] = useState<boolean>(false);
  const [testingVendorId, setTestingVendorId] = useState<string | null>(null);

  const [attestations, setAttestations] = useState<AttestationDto[]>(initialAttestations);
  const [newAttestName, setNewAttestName] = useState<string>("");
  const [newAttestEmail, setNewAttestEmail] = useState<string>("");
  const [newAttestPolicy, setNewAttestPolicy] = useState<string>("Access Control Policy");
  const [creatingAttest, setCreatingAttest] = useState<boolean>(false);
  const [signingAttestId, setSigningAttestId] = useState<string | null>(null);

  const [scanLogs, setScanLogs] = useState<ScanLogDto[]>(initialScanLogs);
  const [awsInterval, setAwsInterval] = useState<string>("weekly");
  const [oktaInterval, setOktaInterval] = useState<string>("daily");
  const [schedulingConnector, setSchedulingConnector] = useState<string | null>(null);

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion?.id] || {
    questionId: currentQuestion?.id,
    response: "NO",
    evidenceUrl: null,
    aiVerified: null,
    aiReasoning: null,
  };

  // Scroll to bottom of chat/RAG logs
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen]);

  useEffect(() => {
    if (ragMessagesEndRef.current) {
      ragMessagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ragMessages, isRagOpen]);

  // Load policy contents on tab changes
  useEffect(() => {
    const existing = policies.find((p) => p.title === selectedPolicyTitle);
    setPolicyEditorContent(existing ? existing.content : "");
  }, [selectedPolicyTitle, policies]);

  // Dynamic framework audit readiness calculation
  const getFrameworkReadiness = (frameworkName: string) => {
    const mappedQuestions = questions.filter((q) =>
      q.mappings.some((m) => m.framework === frameworkName)
    );
    if (mappedQuestions.length === 0) return 0;
    
    const verifiedQuestions = mappedQuestions.filter((q) => {
      const ans = answers[q.id];
      return ans?.response === "YES" && ans?.aiVerified === true;
    });
    return Math.round((verifiedQuestions.length / mappedQuestions.length) * 100);
  };

  const soc2Readiness = getFrameworkReadiness("SOC 2");
  const isoReadiness = getFrameworkReadiness("ISO 27001");
  const hipaaReadiness = getFrameworkReadiness("HIPAA");
  const fdaReadiness = getFrameworkReadiness("FDA 21 CFR Part 11");
  const gxpReadiness = getFrameworkReadiness("GxP Data Integrity");
  const dpdpReadiness = getFrameworkReadiness("DPDP Act (India)");

  // Recalculate domain maturity levels dynamically
  const getDomainMaturity = (domain: string) => {
    const domainQuestions = questions.filter((q) => q.domain === domain);
    const yesAnswers = domainQuestions.filter(
      (q) => answers[q.id]?.response === "YES"
    );
    const total = domainQuestions.length;

    if (total === 0) return { score: 0, level: "N/A", color: "text-slate-400" };

    const score = yesAnswers.length === 0
      ? 1.0
      : 1.0 + (yesAnswers.length / total) * 4.0;

    let level = "Level 1: Initial";
    let color = "text-red-400 border-red-500/20 bg-red-500/10";
    let desc = "Security controls are ad-hoc, undocumented, and highly reactive.";

    if (score > 1 && score <= 2) {
      level = "Level 2: Repeatable";
      color = "text-orange-400 border-orange-500/20 bg-orange-500/10";
      desc = "Basic security practices are established but lack formal standardization.";
    } else if (score > 2 && score <= 3) {
      level = "Level 3: Defined";
      color = "text-yellow-400 border-yellow-500/20 bg-yellow-500/10";
      desc = "Standard controls are documented, approved, and integrated.";
    } else if (score > 3 && score <= 4) {
      level = "Level 4: Managed";
      color = "text-indigo-400 border-indigo-500/20 bg-indigo-500/10";
      desc = "Controls are monitored, measured, and reviewed periodically.";
    } else if (score > 4) {
      level = "Level 5: Optimizing";
      color = "text-emerald-400 border-emerald-500/20 bg-emerald-500/10";
      desc = "Continuous improvement and automated orchestrations are active.";
    }

    return { score, level, color, desc };
  };

  const accessControlMat = getDomainMaturity("Access Control");
  const dataSecurityMat = getDomainMaturity("Data Security");
  const incidentResponseMat = getDomainMaturity("Incident Response");

  // Calculate Overall Assessment Maturity Score
  const yesAnswersCount = Object.values(answers).filter(
    (a) => a.response === "YES"
  ).length;
  const overallMaturityScore = questions.length > 0
    ? 1.0 + (yesAnswersCount / questions.length) * 4.0
    : 1.0;

  // Handle simple response updates
  const handleResponseChange = async (questionId: string, responseVal: string) => {
    setUploading(true);
    setErrorMsg(null);
    try {
      const formData = new FormData();
      formData.append("assessmentId", assessmentId);
      formData.append("questionId", questionId);
      formData.append("response", responseVal);

      const res = await fetch("/api/upload-evidence", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to save answer.");
      }

      const data = await res.json();
      setAnswers((prev) => ({
        ...prev,
        [questionId]: data.answer,
      }));
      setSelectedFile(null);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  // Upload compliance evidence PDF
  const handleUploadEvidence = async (questionId: string, customFile?: File) => {
    const fileToUpload = customFile || selectedFile;
    if (!fileToUpload) {
      setErrorMsg("Please select a PDF document to upload.");
      return;
    }

    setUploading(true);
    setErrorMsg(null);

    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      formData.append("assessmentId", assessmentId);
      formData.append("questionId", questionId);
      formData.append("response", "YES");

      const res = await fetch("/api/upload-evidence", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to process evidence.");
      }

      const data = await res.json();
      setAnswers((prev) => ({
        ...prev,
        [questionId]: data.answer,
      }));
      
      setSelectedFile(null);
      setRemediatingQuestionId(null);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred during verification.");
    } finally {
      setUploading(false);
    }
  };

  // Trigger continuous compliance connectors (simulated AWS, Github, Okta scans)
  const handleTriggerConnector = async (questionId: string, connectorType: string) => {
    setScanningConnectorId(questionId);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/connector-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          connectorType,
          assessmentId,
          questionId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Automated scan failed to resolve control.");
      }

      const data = await res.json();
      setAnswers((prev) => ({
        ...prev,
        [questionId]: data.answer,
      }));

      // Update local task state to completed
      if (tasks[questionId]) {
        setTasks((prev) => ({
          ...prev,
          [questionId]: {
            ...prev[questionId],
            status: "COMPLETED",
          },
        }));
      }

      setRemediatingQuestionId(null);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred during continuous verification.");
    } finally {
      setScanningConnectorId(null);
    }
  };

  // Chat Q&A with AI Copilot
  const sendChatMessage = async (presetMessage?: string) => {
    const textToSend = presetMessage || chatInput;
    if (!textToSend.trim()) return;

    const currentQId = currentQuestion.id;
    const history = chatMessages[currentQId] || [];
    
    const userMsg: ChatMessage = { role: "user", content: textToSend };
    setChatMessages((prev) => ({
      ...prev,
      [currentQId]: [...(prev[currentQId] || []), userMsg],
    }));
    
    if (!presetMessage) setChatInput("");
    setSendingChat(true);

    try {
      const res = await fetch("/api/chat-control", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionText: currentQuestion.text,
          documentText: currentAnswer.aiReasoning ? `Previous analysis: ${currentAnswer.aiReasoning}` : "",
          messages: history,
          userMessage: textToSend,
        }),
      });

      if (!res.ok) throw new Error("Failed to reach Copilot.");

      const data = await res.json();
      const assistantMsg: ChatMessage = { role: "assistant", content: data.content };
      
      setChatMessages((prev) => ({
        ...prev,
        [currentQId]: [...(prev[currentQId] || []), assistantMsg],
      }));
    } catch (err) {
      setChatMessages((prev) => ({
        ...prev,
        [currentQId]: [
          ...(prev[currentQId] || []),
          { role: "assistant", content: "Sorry, I am having trouble connecting to the local AI engine. Please verify that Ollama is running locally." },
        ],
      }));
    } finally {
      setSendingChat(false);
    }
  };

  // Global Evidence RAG Chat message sender
  const sendRagMessage = async () => {
    if (!ragInput.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: ragInput };
    setRagMessages((prev) => [...prev, userMsg]);
    setRagInput("");
    setSendingRag(true);

    try {
      const res = await fetch("/api/evidence-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ queryMessage: userMsg.content }),
      });

      if (!res.ok) throw new Error("RAG Query Failed");

      const data = await res.json();
      const assistantMsg: ChatMessage = { role: "assistant", content: data.response };
      setRagMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setRagMessages((prev) => [
        ...prev,
        { role: "assistant", content: "RAG engine query failed. Ensure Ollama is running locally." },
      ]);
    } finally {
      setSendingRag(false);
    }
  };

  // Run AI Threat Modeler
  const triggerRunModeler = async () => {
    setRunningModeler(true);
    try {
      const res = await fetch("/api/threat-modeler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ techStackDescription: techStackInput }),
      });

      if (!res.ok) throw new Error("Threat Modeler failed.");

      const data = await res.json();
      setRisks(data.risks);
    } catch (err) {
      console.error(err);
    } finally {
      setRunningModeler(false);
    }
  };

  // Convert simulated security alert into an active task
  const triggerConvertAlert = async (alertId: string) => {
    setProcessingAlertId(alertId);
    try {
      const res = await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ alertId, action: "CONVERT" }),
      });

      if (res.ok) {
        const data = await res.json();
        // Update local alert status
        setAlerts((prev) =>
          prev.map((a) => (a.id === alertId ? { ...a, status: "CONVERTED" } : a))
        );
        // Refresh page mappings or tasks
        const updatedTask = data.task;
        if (updatedTask) {
          setTasks((prev) => ({
            ...prev,
            [updatedTask.questionId]: {
              id: updatedTask.id,
              assignedTo: updatedTask.assignedTo,
              dueDate: updatedTask.dueDate,
              status: updatedTask.status,
              priority: updatedTask.priority,
            },
          }));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProcessingAlertId(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setErrorMsg(null);
    }
  };

  // Draft a policy using Ollama
  const triggerGeneratePolicy = async () => {
    setGeneratingPolicy(true);
    try {
      const res = await fetch("/api/policy-builder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ policyTitle: selectedPolicyTitle }),
      });

      if (!res.ok) throw new Error("Policy drafting failed.");

      const data = await res.json();
      setPolicyEditorContent(data.content);
      
      setPolicies((prev) => {
        const idx = prev.findIndex((p) => p.title === selectedPolicyTitle);
        if (idx !== -1) {
          const updated = [...prev];
          updated[idx] = { ...updated[idx], content: data.content };
          return updated;
        }
        return [...prev, { id: Math.random().toString(), title: selectedPolicyTitle, content: data.content }];
      });
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingPolicy(false);
    }
  };

  // Save changes to drafted policies
  const triggerSavePolicy = async () => {
    setSavingPolicy(true);
    try {
      await fetch("/api/policy-builder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ policyTitle: selectedPolicyTitle }),
      });
      setPolicies((prev) =>
        prev.map((p) =>
          p.title === selectedPolicyTitle ? { ...p, content: policyEditorContent } : p
        )
      );
    } catch (err) {
      console.error(err);
    } finally {
      setSavingPolicy(false);
    }
  };

  // Generate compliance report
  const triggerGenerateReport = async () => {
    setGeneratingReport(true);
    try {
      const res = await fetch("/api/generate-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assessmentId }),
      });
      if (!res.ok) throw new Error("Report generation failed.");
      const data = await res.json();
      setReportMarkdown(data.report);
    } catch (err) {
      console.error(err);
    } finally {
      setGeneratingReport(false);
    }
  };

  // Update remediation task assignments
  const handleSaveRemediationTask = async (questionId: string) => {
    try {
      const res = await fetch("/api/remediation-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId,
          assignedTo: assigneeInput,
          dueDate: dueDateInput,
          status: statusInput,
          priority: priorityInput,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setTasks((prev) => ({
          ...prev,
          [questionId]: {
            id: data.task.id,
            assignedTo: data.task.assignedTo,
            dueDate: data.task.dueDate,
            status: data.task.status,
            priority: data.task.priority,
          },
        }));
        setEditingTaskId(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const startEditingTask = (questionId: string, task: Task | null) => {
    setEditingTaskId(questionId);
    setAssigneeInput(task?.assignedTo || "");
    setDueDateInput(task?.dueDate ? new Date(task.dueDate).toISOString().split("T")[0] : "");
    setPriorityInput(task?.priority || "MEDIUM");
    setStatusInput(task?.status || "OPEN");
  };

  // Calculate open / total remediation tickets
  const getRemediationTickets = () => {
    return questions.map((q) => {
      const ans = answers[q.id];
      const status = ans ? ans.response : "NO";
      const aiVerified = ans ? ans.aiVerified : null;
      const t = tasks[q.id] || null;

      if (status !== "YES" || aiVerified === false) {
        let action = "";
        let exposure = "";
        let connector = "AWS";

        if (q.domain === "Access Control") {
          action = q.text.includes("MFA")
            ? "Enforce MFA globally at the identity provider (Okta/IAM). Limit SMS and allow hardware key/TOTP devices only."
            : "Review user directory lists quarterly, revoke stale admin/developer rights, and sign off the audit checklist.";
          exposure = "Logical breach risk, unauthorized admin consoles access.";
          connector = q.text.includes("MFA") ? "AWS" : "OKTA";
        } else if (q.domain === "Data Security") {
          action = q.text.includes("encryption")
            ? "Configure AES-256 database storage encryption using KMS keys. Verify backup encryption states."
            : "Direct access query events to a centralized logs telemetry analyzer. Flag anomalous query extractions.";
          exposure = "Plaintext exposure of production databases, silent database crawling.";
          connector = q.text.includes("encryption") ? "AWS" : "GITHUB";
        } else {
          action = "Draft a formal incident response escalation flowchart and test playbook containment routines via tabletop drills.";
          exposure = "Undetected network breaches, regulatory reporting delays.";
          connector = "GITHUB";
        }

        const priority = q.domain === "Access Control" || q.domain === "Data Security" ? "HIGH" : "MEDIUM";

        return {
          questionId: q.id,
          domain: q.domain,
          text: q.text,
          status,
          aiVerified,
          aiReasoning: ans?.aiReasoning,
          evidenceUrl: ans?.evidenceUrl,
          task: t,
          priority,
          action,
          exposure,
          connector,
        };
      }
      return null;
    }).filter((t): t is NonNullable<typeof t> => t !== null);
  };

  const remediationTickets = getRemediationTickets();

  // Document Inventory List (For Library & Auditor Tab)
  const getDocumentInventory = () => {
    return Object.entries(answers)
      .filter(([_, ans]) => ans.response === "YES" && ans.evidenceUrl)
      .map(([qId, ans]) => {
        const q = questions.find((q) => q.id === qId);
        return {
          questionId: qId,
          domain: q?.domain || "General",
          controlText: q?.text || "Unknown Control",
          filename: ans.evidenceUrl,
          verified: ans.aiVerified,
          reasoning: ans.aiReasoning,
          date: ans.verifiedAt ? formatDate(ans.verifiedAt) : "Pending",
        };
      });
  };

  const documentInventory = getDocumentInventory();

  // Check if specific risks are mitigated (i.e. corresponding control is YES and Verified)
  const getRiskMitigatedStatus = (mitigationDesc: string) => {
    const matchingQ = questions.find(
      (q) =>
        q.text.toLowerCase().includes("mfa") && mitigationDesc.toLowerCase().includes("mfa") ||
        q.text.toLowerCase().includes("encrypt") && mitigationDesc.toLowerCase().includes("encrypt") ||
        q.text.toLowerCase().includes("incident") && mitigationDesc.toLowerCase().includes("incident")
    );
    if (!matchingQ) return false;
    const ans = answers[matchingQ.id];
    return ans?.response === "YES" && ans?.aiVerified === true;
  };

  // GRC Expansion Handlers

  // workspace creations
  const handleCreateWorkspace = async (name: string) => {
    try {
      const res = await fetch("/api/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationName: name }),
      });
      if (res.ok) {
        const data = await res.json();
        window.location.href = `/?orgId=${data.organization.id}`;
      }
    } catch (err) {
      console.error(err);
    }
  };

  // comment post handlers
  const handlePostComment = async (questionId: string) => {
    if (!commentInput.trim()) return;
    setSubmittingComment(true);
    try {
      const res = await fetch("/api/audit-comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId,
          author: "CISO compliance Lead",
          text: commentInput,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setComments((prev) => [...prev, data.comment]);
        setCommentInput("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmittingComment(false);
    }
  };

  // vendor assessment creation
  const handleCreateVendor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVendorName || !newVendorEmail) return;
    setCreatingVendor(true);
    try {
      const res = await fetch("/api/vendors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newVendorName,
          securityTier: newVendorTier,
          contactEmail: newVendorEmail,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setVendors((prev) => [...prev, data.vendor]);
        setNewVendorName("");
        setNewVendorEmail("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreatingVendor(false);
    }
  };

  // vendor scoring simulation
  const handleSimulateVendorAssessment = async (vendorId: string) => {
    const rawScore = prompt("Enter simulated vendor assessment audit score (0-100):", "85");
    if (rawScore === null) return;
    const scoreVal = Number(rawScore);
    if (isNaN(scoreVal) || scoreVal < 0 || scoreVal > 100) return;

    setTestingVendorId(vendorId);
    try {
      const res = await fetch("/api/vendors", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vendorId, score: scoreVal }),
      });

      if (res.ok) {
        const data = await res.json();
        setVendors((prev) =>
          prev.map((v) => (v.id === vendorId ? data.vendor : v))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTestingVendorId(null);
    }
  };

  // attestation requests
  const handleRequestAttestation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAttestName || !newAttestEmail) return;
    setCreatingAttest(true);
    try {
      const res = await fetch("/api/attest", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeName: newAttestName,
          employeeEmail: newAttestEmail,
          policyTitle: newAttestPolicy,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAttestations((prev) => [data.attestation, ...prev]);
        setNewAttestName("");
        setNewAttestEmail("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreatingAttest(false);
    }
  };

  // employee signing simulator
  const handleSignAttestation = async (attestationId: string) => {
    const name = prompt("Type your full name to sign this security policy attestation:", "Jane CISO");
    if (!name) return;

    setSigningAttestId(attestationId);
    try {
      const res = await fetch("/api/attest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attestationId, employeeName: name }),
      });

      if (res.ok) {
        const data = await res.json();
        setAttestations((prev) =>
          prev.map((a) => (a.id === attestationId ? data.attestation : a))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSigningAttestId(null);
    }
  };

  // scheduler setup simulator
  const handleSaveScanSchedule = async (connectorType: string, interval: string) => {
    setSchedulingConnector(connectorType);
    try {
      const res = await fetch("/api/connector-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectorType, interval }),
      });

      if (res.ok) {
        const data = await res.json();
        setScanLogs((prev) => [data.log, ...prev]);
        alert(`Successfully scheduled automated ${connectorType} scans on a ${interval} basis!`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSchedulingConnector(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-8 w-full">
      
      {/* View Navigation Tabs */}
      <div className="flex border-b border-white/5 pb-0.5 gap-2 sm:gap-4 overflow-x-auto print:hidden">
        
        {/* Workspace Switcher dropdown (NEW) */}
        <div className="flex items-center gap-2 border-r border-white/5 pr-4 mr-2 shrink-0">
          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide">Workspace:</span>
          <select
            value={activeOrgId}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "ADD_NEW") {
                const name = prompt("Enter new corporate workspace name:");
                if (name) handleCreateWorkspace(name);
              } else {
                window.location.href = `/?orgId=${val}`;
              }
            }}
            className="bg-white/5 border border-white/5 text-slate-200 text-xs rounded-xl p-2 focus:outline-none focus:border-indigo-500/30 font-bold cursor-pointer"
          >
            {organizations.map((org) => (
              <option key={org.id} value={org.id}>{org.name}</option>
            ))}
            <option value="ADD_NEW">+ Create Organization</option>
          </select>
        </div>

        <button
          onClick={() => setActiveTab("wizard")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "wizard" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Award className="w-4 h-4" />
          Maturity Wizard
        </button>
        <button
          onClick={() => setActiveTab("remediation")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 relative ${
            activeTab === "remediation" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <ClipboardList className="w-4 h-4" />
          Remediation Planner
          {remedyCountBadge(remediationTickets.length)}
        </button>
        <button
          onClick={() => setActiveTab("policy")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "policy" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <FileText className="w-4 h-4" />
          AI Policy Builder
        </button>
        <button
          onClick={() => setActiveTab("attestations")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "attestations" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Users className="w-4 h-4 text-emerald-400" />
          Employee Attestations
        </button>
        <button
          onClick={() => setActiveTab("vendors")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "vendors" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Globe className="w-4 h-4 text-indigo-400" />
          Vendor Risks
        </button>
        <button
          onClick={() => setActiveTab("risks")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "risks" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Threat Modeler & Risks
        </button>
        <button
          onClick={() => setActiveTab("alerts")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 relative ${
            activeTab === "alerts" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          Vulnerability Alerts
          {remedyCountBadge(alerts.filter((a) => a.status === "OPEN").length)}
        </button>
        <button
          onClick={() => setActiveTab("auditor")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "auditor" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Users className="w-4 h-4" />
          Auditor Vault
        </button>
        <button
          onClick={() => setActiveTab("deck")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "deck" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Award className="w-4 h-4 text-purple-400" />
          CISO Board Deck
        </button>
        <button
          onClick={() => setActiveTab("library")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "library" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Server className="w-4 h-4" />
          Document Library
        </button>
        <button
          onClick={() => setActiveTab("report")}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition cursor-pointer shrink-0 ${
            activeTab === "report" ? "border-indigo-500 text-indigo-300" : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <FileText className="w-4 h-4" />
          Executive Report
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
        
        {/* LEFT COMPONENT: Dashboard (Always Visible) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-24 print:hidden">
          
          {/* Overall Maturity Card */}
          <div className="glass-panel rounded-3xl p-6 relative overflow-hidden border-indigo-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Award className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Overall Maturity</h2>
                <p className="text-xs text-slate-500">Live baseline calculations</p>
              </div>
            </div>
            
            <div className="flex items-baseline gap-4 mt-6">
              <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400">
                {overallMaturityScore.toFixed(1)}
              </span>
              <span className="text-slate-400 text-sm font-medium">/ 5.0</span>
            </div>

            <div className="mt-4">
              <div className="w-full bg-white/5 rounded-full h-2 border border-white/5">
                <div
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(overallMaturityScore / 5.0) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Framework Readiness Gauges */}
            <div className="mt-6 border-t border-white/5 pt-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Compliance Readiness</span>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">SOC 2 Type II</span>
                <span className="font-semibold text-teal-400">{soc2Readiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${soc2Readiness}%` }} />
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-slate-300">ISO 27001</span>
                <span className="font-semibold text-teal-400">{isoReadiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${isoReadiness}%` }} />
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-slate-300">HIPAA Security Rule</span>
                <span className="font-semibold text-teal-400">{hipaaReadiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${hipaaReadiness}%` }} />
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-slate-300">FDA 21 CFR Part 11</span>
                <span className="font-semibold text-teal-400">{fdaReadiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${fdaReadiness}%` }} />
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-slate-300">GxP Data Integrity</span>
                <span className="font-semibold text-teal-400">{gxpReadiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${gxpReadiness}%` }} />
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <span className="text-slate-300">DPDP Act (India)</span>
                <span className="font-semibold text-teal-400">{dpdpReadiness}%</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${dpdpReadiness}%` }} />
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 leading-normal">
              Framework readiness calculates automatically based on the mappings of YES answered controls verified by the AI.
            </p>
          </div>

          {/* Structural Domains Maturity */}
          <div className="glass-panel rounded-3xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                Structural Domains
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                Live Rating
              </span>
            </div>

            {/* Domain 1: Access Control */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-indigo-400" />
                  Access Control
                </span>
                <span className="font-semibold text-indigo-400">{accessControlMat.score.toFixed(1)} / 5.0</span>
              </div>
              <div className="border border-white/5 rounded-xl p-3 bg-white/[0.02]">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border inline-block mb-1.5 ${accessControlMat.color}`}>
                  {accessControlMat.level}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight">{accessControlMat.desc}</p>
              </div>
            </div>

            {/* Domain 2: Data Security */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  Data Security
                </span>
                <span className="font-semibold text-indigo-400">{dataSecurityMat.score.toFixed(1)} / 5.0</span>
              </div>
              <div className="border border-white/5 rounded-xl p-3 bg-white/[0.02]">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border inline-block mb-1.5 ${dataSecurityMat.color}`}>
                  {dataSecurityMat.level}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight">{dataSecurityMat.desc}</p>
              </div>
            </div>

            {/* Domain 3: Incident Response */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" />
                  Incident Response
                </span>
                <span className="font-semibold text-indigo-400">{incidentResponseMat.score.toFixed(1)} / 5.0</span>
              </div>
              <div className="border border-white/5 rounded-xl p-3 bg-white/[0.02]">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border inline-block mb-1.5 ${incidentResponseMat.color}`}>
                  {incidentResponseMat.level}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight">{incidentResponseMat.desc}</p>
              </div>
            </div>

          </div>

          {/* Evidence RAG Chat Button */}
          <button
            onClick={() => setIsRagOpen(!isRagOpen)}
            className="w-full bg-gradient-to-r from-indigo-500/10 to-purple-600/10 hover:from-indigo-500/20 hover:to-purple-600/20 border border-indigo-500/25 text-indigo-300 rounded-2xl py-3 px-4 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            Chat with Uploaded Policies (RAG)
          </button>

        </div>

        {/* RIGHT COMPONENT: Dynamic View Content */}
        <div className="w-full lg:w-2/3">
          
          {/* TAB 1: Maturity Wizard */}
          {activeTab === "wizard" && (
            <div className="flex gap-4 items-start w-full relative">
              <div className={`w-full transition-all duration-300 ${isChatOpen ? "xl:w-[55%]" : "w-full"}`}>
                <div className="glass-panel rounded-3xl overflow-hidden relative">
                  
                  {/* Step Progress Bar */}
                  <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <div>
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20 uppercase tracking-wider">
                        {currentQuestion.domain}
                      </span>
                      <h2 className="text-xs font-medium text-slate-400 mt-2">
                        Question {currentStep + 1} of {questions.length}
                      </h2>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="text-xs font-bold text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-pulse" />
                        AI Copilot Chat
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-1 bg-white/5">
                    <div
                      className="bg-indigo-500 h-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  {/* Main Stepper Card Area */}
                  <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col gap-6"
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                          {currentQuestion.text}
                        </h3>

                        {/* Regulatory Framework Mappings Display */}
                        {currentQuestion.mappings?.length > 0 && (
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Maps to:</span>
                            {currentQuestion.mappings.map((m, mIdx) => (
                              <div
                                key={mIdx}
                                title={m.description}
                                className="group relative text-[10px] font-bold bg-white/5 border border-white/10 hover:border-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded transition cursor-help"
                              >
                                {m.framework}: {m.clause}
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 hidden group-hover:block w-48 bg-slate-950 text-slate-300 text-[9px] font-medium p-2 rounded border border-white/10 shadow-xl leading-normal z-50">
                                  {m.description}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Responses Stepper Options */}
                        <div className="grid grid-cols-3 gap-3 mt-2">
                          {["YES", "NO", "NA"].map((val) => {
                            const isSelected = currentAnswer.response === val;
                            return (
                              <button
                                key={val}
                                onClick={() => handleResponseChange(currentQuestion.id, val)}
                                disabled={uploading}
                                className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? "bg-indigo-500/20 border-indigo-500 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                                    : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05]"
                                } disabled:opacity-50`}
                              >
                                {val === "YES" && "Yes, Implemented"}
                                {val === "NO" && "No, Lacking"}
                                {val === "NA" && "Not Applicable"}
                              </button>
                            );
                          })}
                        </div>

                        {/* Evidence Upload Portal */}
                        <AnimatePresence>
                          {currentAnswer.response === "YES" && currentQuestion.requiresDoc && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="border border-white/5 bg-slate-950/40 rounded-2xl p-4 sm:p-5 mt-2 flex flex-col gap-4"
                            >
                              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-indigo-400" />
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                    Evidence-Based Verification Required
                                  </h4>
                                </div>
                              </div>

                              {/* Automated Connectors Section */}
                              {currentQuestion.domain === "Access Control" && (
                                <div className="bg-indigo-950/15 border border-indigo-950/30 rounded-xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                  <div>
                                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wide flex items-center gap-1.5">
                                      <Server className="w-3.5 h-3.5" /> Okta / AWS IAM Connector
                                    </span>
                                    <p className="text-[10px] text-slate-400 mt-0.5">Automate check via identity directories</p>
                                  </div>
                                  <button
                                    onClick={() => handleTriggerConnector(currentQuestion.id, "OKTA")}
                                    disabled={scanningConnectorId !== null}
                                    className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 hover:border-indigo-500/40 text-indigo-300 text-[10px] font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer shrink-0 disabled:opacity-50"
                                  >
                                    {scanningConnectorId === currentQuestion.id ? (
                                      <RefreshCw className="w-3 h-3 animate-spin" />
                                    ) : (
                                      <Globe className="w-3 h-3 text-indigo-400" />
                                    )}
                                    Run Automated Directory Check
                                  </button>
                                </div>
                              )}

                              {currentQuestion.domain === "Data Security" && (
                                <div className="bg-indigo-950/15 border border-indigo-950/30 rounded-xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                  <div>
                                    <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wide flex items-center gap-1.5">
                                      <Database className="w-3.5 h-3.5" /> AWS KMS & Database Connector
                                    </span>
                                    <p className="text-[10px] text-slate-400 mt-0.5">Automate check via cloud volume encryption telemetry</p>
                                  </div>
                                  <button
                                    onClick={() => handleTriggerConnector(currentQuestion.id, "AWS")}
                                    disabled={scanningConnectorId !== null}
                                    className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 hover:border-indigo-500/40 text-indigo-300 text-[10px] font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer shrink-0 disabled:opacity-50"
                                  >
                                    {scanningConnectorId === currentQuestion.id ? (
                                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                      <Server className="w-3.5 h-3.5 text-indigo-400" />
                                    )}
                                    Run Cloud Storage Scan
                                  </button>
                                </div>
                              )}

                              {/* Manual file uploader */}
                              {!currentAnswer.evidenceUrl && !uploading && (
                                <div className="border border-dashed border-white/10 hover:border-indigo-500/40 bg-white/[0.01] hover:bg-indigo-500/[0.01] rounded-xl p-6 transition relative flex flex-col items-center justify-center gap-2 text-center group">
                                  <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                  />
                                  <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition" />
                                  <span className="text-xs font-medium text-slate-300">
                                    {selectedFile ? selectedFile.name : "Or drag policy document PDF to upload manually"}
                                  </span>
                                  {selectedFile && (
                                    <span className="text-[10px] text-slate-400">
                                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                  )}
                                </div>
                              )}

                              {selectedFile && !uploading && !currentAnswer.evidenceUrl && (
                                <button
                                  onClick={() => handleUploadEvidence(currentQuestion.id)}
                                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2 px-4 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10"
                                >
                                  Verify Document with Local AI
                                </button>
                              )}

                              {uploading && (
                                <div className="p-6 flex flex-col items-center justify-center gap-3">
                                  <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
                                  <span className="text-xs text-slate-300 animate-pulse">Running AI Vector Search audit...</span>
                                </div>
                              )}

                              {currentAnswer.evidenceUrl && !uploading && (
                                <div className="flex flex-col gap-3">
                                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-slate-300">
                                    <span className="truncate">{currentAnswer.evidenceUrl}</span>
                                    <button
                                      onClick={() => handleResponseChange(currentQuestion.id, "YES")}
                                      className="text-indigo-400 hover:text-indigo-300 font-bold cursor-pointer"
                                    >
                                      Replace
                                    </button>
                                  </div>

                                  {currentAnswer.aiVerified !== null && (
                                    <div className={`p-4 rounded-xl border flex gap-3 text-xs ${
                                      currentAnswer.aiVerified
                                        ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-100"
                                        : "bg-red-500/10 border-red-500/25 text-red-100"
                                    }`}>
                                      {currentAnswer.aiVerified ? (
                                        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                      ) : (
                                        <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                      )}
                                      <div className="flex flex-col gap-1">
                                        <span className="font-bold tracking-wide uppercase flex items-center gap-1.5">
                                          {currentAnswer.aiVerified ? "Evidence Approved" : "Audit Rejected"}
                                        </span>
                                        <p className="opacity-95 leading-relaxed">{currentAnswer.aiReasoning}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Control-Specific Auditor Annotations Feed (NEW) */}
                        <div className="border border-white/5 rounded-2xl p-4 bg-white/[0.01] mt-4">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                            Auditor Review Comments & Notes
                          </span>

                          <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto mb-3">
                            {comments.filter((c) => c.questionId === currentQuestion.id).length ? (
                              comments
                                .filter((c) => c.questionId === currentQuestion.id)
                                .map((c) => (
                                  <div key={c.id} className="text-[11px] bg-white/[0.01] border border-white/5 rounded-lg p-2.5">
                                    <div className="flex justify-between items-center mb-1 text-slate-500">
                                      <span className="font-bold text-slate-300">{c.author}</span>
                                      <span>{formatDate(c.createdAt)}</span>
                                    </div>
                                    <p className="text-slate-400 leading-normal">{c.text}</p>
                                  </div>
                                ))
                            ) : (
                              <p className="text-[10px] text-slate-500 italic py-2">No auditor notes recorded for this control.</p>
                            )}
                          </div>

                          <div className="flex gap-2 items-center">
                            <input
                              type="text"
                              placeholder="Write a comment or query response..."
                              value={commentInput}
                              onChange={(e) => setCommentInput(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handlePostComment(currentQuestion.id)}
                              disabled={submittingComment}
                              className="flex-1 bg-white/5 border border-white/5 text-slate-100 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-indigo-500/30"
                            />
                            <button
                              onClick={() => handlePostComment(currentQuestion.id)}
                              disabled={submittingComment || !commentInput.trim()}
                              className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 text-indigo-300 text-xs px-3 py-1.5 rounded-lg transition font-bold"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>

                      </motion.div>
                    </AnimatePresence>

                    {/* Step Navigation Controls */}
                    <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-8">
                      <button
                        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                        disabled={currentStep === 0}
                        className="flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-400 hover:text-slate-200 transition disabled:opacity-30 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </button>

                      {currentStep < questions.length - 1 ? (
                        <button
                          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, questions.length - 1))}
                          className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1 transition cursor-pointer"
                        >
                          Next
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="text-xs sm:text-sm font-bold text-indigo-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4.5 h-4.5" /> Assessment Checked
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              </div>

              {/* Chat Copilot Drawer Pane */}
              <AnimatePresence>
                {isChatOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 50, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: "42%" }}
                    exit={{ opacity: 0, x: 50, width: 0 }}
                    className="hidden xl:flex flex-col h-[525px] glass-panel rounded-3xl overflow-hidden relative border-indigo-500/20"
                  >
                    <div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        AI Audit Copilot
                      </h4>
                      <button
                        onClick={() => setIsChatOpen(false)}
                        className="text-xs text-slate-500 hover:text-slate-300 font-bold cursor-pointer"
                      >
                        Close
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 max-h-[380px]">
                      {chatMessages[currentQuestion.id]?.length ? (
                        chatMessages[currentQuestion.id].map((msg, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                              msg.role === "user"
                                ? "bg-indigo-600/20 text-slate-200 self-end rounded-tr-none border border-indigo-500/10"
                                : "bg-white/5 text-slate-300 self-start rounded-tl-none border border-white/5"
                            }`}
                          >
                            {msg.content}
                          </div>
                        ))
                      ) : (
                        <div className="text-center my-auto flex flex-col items-center justify-center gap-2 text-slate-500 px-4">
                          <HelpCircle className="w-8 h-8 text-slate-600" />
                          <p className="text-[11px] leading-relaxed">
                            Ask me to draft a policy template, explain failure criteria, or write instructions for security compliance configurations.
                          </p>
                          <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                            <button
                              onClick={() => sendChatMessage("Write a policy template clause for this.")}
                              className="text-[10px] bg-white/5 hover:bg-white/10 text-slate-400 py-1.5 px-2 rounded-lg border border-white/5 transition cursor-pointer"
                            >
                              ✍️ Get Policy Clause
                            </button>
                            <button
                              onClick={() => sendChatMessage("How do I implement this constraint technically?")}
                              className="text-[10px] bg-white/5 hover:bg-white/10 text-slate-400 py-1.5 px-2 rounded-lg border border-white/5 transition cursor-pointer"
                            >
                              ⚙️ Technical How-To
                            </button>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-white/5 bg-slate-950/20 flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Ask policy assistant..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
                        disabled={sendingChat}
                        className="flex-1 bg-white/5 border border-white/5 text-slate-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500/40 disabled:opacity-50"
                      />
                      <button
                        onClick={() => sendChatMessage()}
                        disabled={sendingChat || !chatInput.trim()}
                        className="w-8 h-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-white/5 disabled:text-slate-500 flex items-center justify-center text-white transition cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* TAB 2: Remediation Planner */}
          {activeTab === "remediation" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-extrabold text-lg text-slate-200">Remediation Planner</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Assign owners, set due dates, and monitor compliance remediation tasks. Configure continuous scheduled scanners to trace configuration drifts.
                </p>
              </div>

              {/* Continuous Scanner Scheduler Interface (NEW) */}
              <div className="glass-panel rounded-3xl p-6 flex flex-col gap-5 border border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Continuous Scanner Cron Scheduler & Logs
                </span>

                <div className="grid grid-cols-2 gap-6 text-xs text-slate-300">
                  <div className="border border-white/5 rounded-2xl p-4 bg-white/[0.01] flex justify-between items-center">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-indigo-400" /> AWS KMS & RDS Scanner
                      </span>
                      <p className="text-[10px] text-slate-500">Scan encrypted DB volumes</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <select
                        value={awsInterval}
                        onChange={(e) => setAwsInterval(e.target.value)}
                        className="bg-white/5 border border-white/5 rounded-lg p-1 text-[11px] focus:outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                      <button
                        onClick={() => handleSaveScanSchedule("AWS", awsInterval)}
                        disabled={schedulingConnector !== null}
                        className="bg-indigo-600/10 border border-indigo-600/20 text-indigo-300 px-3 py-1.5 rounded-lg font-semibold hover:bg-indigo-600/20 transition cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="border border-white/5 rounded-2xl p-4 bg-white/[0.01] flex justify-between items-center">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-indigo-400" /> Okta Directories Sync
                      </span>
                      <p className="text-[10px] text-slate-500">Sync users & MFA status</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <select
                        value={oktaInterval}
                        onChange={(e) => setOktaInterval(e.target.value)}
                        className="bg-white/5 border border-white/5 rounded-lg p-1 text-[11px] focus:outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                      <button
                        onClick={() => handleSaveScanSchedule("OKTA", oktaInterval)}
                        disabled={schedulingConnector !== null}
                        className="bg-indigo-600/10 border border-indigo-600/20 text-indigo-300 px-3 py-1.5 rounded-lg font-semibold hover:bg-indigo-600/20 transition cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                {/* Scan logs feed */}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scanner Execution Logs History</span>
                  <div className="flex flex-col gap-2 max-h-[150px] overflow-y-auto">
                    {scanLogs.map((log) => (
                      <div key={log.id} className="bg-white/[0.01] border border-white/5 rounded-xl p-3 text-[11px] flex flex-col gap-1">
                        <div className="flex justify-between items-center font-bold text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Server className="w-3.5 h-3.5 text-indigo-400" />
                            {log.connectorType} Scan Run
                          </span>
                          <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/15 text-[9px]">
                            {log.status}
                          </span>
                        </div>
                        <p className="text-slate-400 leading-normal">{log.details}</p>
                        <span className="text-[9px] text-slate-500 font-mono mt-1">Ran: {formatDateTime(log.createdAt)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tickets directory list */}
              <div className="flex flex-col gap-4 mt-2">
                {remediationTickets.length ? (
                  remediationTickets.map((t, idx) => {
                    const isEditing = editingTaskId === t.questionId;
                    return (
                      <motion.div
                        key={t.questionId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border-l-4 border-l-red-500"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase">
                                {t.domain}
                              </span>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                                t.task?.priority === "HIGH" ? "text-red-400 bg-red-500/10 border border-red-500/20" : "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20"
                              }`}>
                                {t.task?.priority || t.priority} PRIORITY
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-200 mt-1">{t.text}</h4>
                          </div>
                        </div>

                        {/* Task Information & Collaborative Fields */}
                        <div className="border border-white/5 rounded-2xl p-4 bg-white/[0.01] flex flex-col gap-3">
                          {isEditing ? (
                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Assignee</label>
                                <input
                                  type="text"
                                  value={assigneeInput}
                                  onChange={(e) => setAssigneeInput(e.target.value)}
                                  placeholder="E.g., CISO, DB Engineer"
                                  className="bg-white/5 border border-white/5 text-slate-100 rounded-lg p-2 focus:outline-none focus:border-indigo-500/30"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Due Date</label>
                                <input
                                  type="date"
                                  value={dueDateInput}
                                  onChange={(e) => setDueDateInput(e.target.value)}
                                  className="bg-white/5 border border-white/5 text-slate-100 rounded-lg p-2 focus:outline-none focus:border-indigo-500/30"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Priority</label>
                                <select
                                  value={priorityInput}
                                  onChange={(e) => setPriorityInput(e.target.value)}
                                  className="bg-white/5 border border-white/5 text-slate-100 rounded-lg p-2 focus:outline-none focus:border-indigo-500/30"
                                >
                                  <option value="HIGH">HIGH</option>
                                  <option value="MEDIUM">MEDIUM</option>
                                  <option value="LOW">LOW</option>
                                </select>
                              </div>
                              <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Status</label>
                                <select
                                  value={statusInput}
                                  onChange={(e) => setStatusInput(e.target.value)}
                                  className="bg-white/5 border border-white/5 text-slate-100 rounded-lg p-2 focus:outline-none focus:border-indigo-500/30"
                                >
                                  <option value="OPEN">OPEN</option>
                                  <option value="IN_PROGRESS">IN PROGRESS</option>
                                  <option value="IN_REVIEW">IN REVIEW</option>
                                </select>
                              </div>
                              <div className="col-span-2 flex justify-end gap-2 mt-2">
                                <button
                                  onClick={() => handleSaveRemediationTask(t.questionId)}
                                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-3 py-1.5 font-bold transition cursor-pointer"
                                >
                                  Save Task
                                </button>
                                <button
                                  onClick={() => setEditingTaskId(null)}
                                  className="text-slate-400 hover:text-slate-300 px-2 py-1.5 font-semibold cursor-pointer"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-between items-center border-b border-white/5 pb-2 text-xs flex-wrap gap-2">
                              <div className="flex items-center gap-1.5 text-slate-400">
                                <Users className="w-3.5 h-3.5 text-slate-500" />
                                Owner: <span className="text-slate-200 font-semibold">{t.task?.assignedTo || "Unassigned"}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-slate-400">
                                <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
                                Due: <span className="text-slate-200 font-semibold">
                                  {t.task?.dueDate ? new Date(t.task.dueDate).toLocaleDateString() : "No Date Set"}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-slate-400">
                                <TaskCheckIcon className="w-3.5 h-3.5 text-slate-500" />
                                Status: <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">{t.task?.status || "OPEN"}</span>
                              </div>
                              <button
                                onClick={() => startEditingTask(t.questionId, t.task)}
                                className="text-xs text-indigo-400 hover:text-indigo-300 font-bold ml-auto cursor-pointer"
                              >
                                Edit Delegation
                              </button>
                            </div>
                          )}

                          <div className="flex flex-col gap-1 mt-1 text-xs">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Threat Exposure</span>
                            <p className="text-slate-400 leading-normal">{t.exposure}</p>
                          </div>
                          <div className="flex flex-col gap-1 mt-1 text-xs">
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wide flex items-center gap-1">
                              <TaskCheckIcon className="w-3.5 h-3.5" /> Action Steps
                            </span>
                            <p className="text-slate-300 leading-relaxed font-medium">{t.action}</p>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          
                          {/* Automated Cloud Scan Button */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleTriggerConnector(t.questionId, t.connector)}
                              disabled={scanningConnectorId !== null}
                              className="text-xs bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 text-indigo-300 rounded-xl px-4 py-2 font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                            >
                              {scanningConnectorId === t.questionId ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Server className="w-3.5 h-3.5 text-indigo-400" />
                              )}
                              Auto Scan with {t.connector}
                            </button>
                          </div>

                          {/* Manual upload fix */}
                          {remediatingQuestionId === t.questionId ? (
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="text-xs bg-white/5 text-slate-400 p-1.5 rounded border border-white/5 w-full sm:w-48"
                              />
                              <button
                                onClick={() => handleUploadEvidence(t.questionId)}
                                disabled={uploading}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-3 py-1.5 text-xs font-bold transition shrink-0 cursor-pointer"
                              >
                                Upload
                              </button>
                              <button
                                onClick={() => {
                                  setRemediatingQuestionId(null);
                                  setSelectedFile(null);
                                }}
                                className="text-slate-500 hover:text-slate-300 text-xs font-semibold cursor-pointer"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setRemediatingQuestionId(t.questionId)}
                              className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl px-4 py-2 font-bold transition cursor-pointer"
                            >
                              Upload Manual PDF
                            </button>
                          )}
                        </div>

                      </motion.div>
                    );
                  })
                ) : (
                  <div className="glass-panel rounded-3xl p-12 text-center flex flex-col items-center gap-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-extrabold text-slate-200 text-base">Perfect Score Reached</h4>
                      <p className="text-xs text-slate-500 leading-normal max-w-sm">
                        All compliance controls are fully implemented and verified by the AI. No remediation tasks pending.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: AI Policy Builder */}
          {activeTab === "policy" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-extrabold text-lg text-slate-200">AI Policy Builder</h3>
                  <p className="text-xs text-slate-400">Select, draft, and modify compliance policy documentation using AI templates.</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <select
                    value={selectedPolicyTitle}
                    onChange={(e) => setSelectedPolicyTitle(e.target.value)}
                    className="bg-white/5 border border-white/5 text-slate-200 text-xs rounded-xl p-2.5 focus:outline-none focus:border-indigo-500/30"
                  >
                    <option value="Access Control Policy">Access Control Policy</option>
                    <option value="Data Cryptography & Security Standard">Data Cryptography Standard</option>
                    <option value="Incident Response & Tabletop Plan">Incident Response Plan</option>
                  </select>
                  <button
                    onClick={triggerGeneratePolicy}
                    disabled={generatingPolicy}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 px-4 text-xs font-bold transition flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-indigo-500/10"
                  >
                    {generatingPolicy ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-white" />
                    )}
                    {policyEditorContent ? "Re-Draft with AI" : "Draft with AI"}
                  </button>
                </div>
              </div>

              {policyEditorContent ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full items-stretch">
                  
                  {/* Markdown Editor Workspace */}
                  <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Markdown Editor Workspace</span>
                      <button
                        onClick={triggerSavePolicy}
                        disabled={savingPolicy}
                        className="text-xs bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 px-3.5 py-1.5 rounded-lg border border-indigo-500/20 font-bold transition cursor-pointer"
                      >
                        {savingPolicy ? "Saving..." : "Save Draft"}
                      </button>
                    </div>
                    <textarea
                      value={policyEditorContent}
                      onChange={(e) => setPolicyEditorContent(e.target.value)}
                      className="w-full min-h-[420px] bg-slate-950/20 border border-white/5 rounded-2xl p-4 text-xs font-mono text-slate-300 leading-relaxed focus:outline-none focus:border-indigo-500/30"
                    />
                  </div>

                  {/* Render Preview Workspace */}
                  <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 bg-slate-900/10 max-h-[500px] overflow-y-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/5 pb-2.5">
                      Live Render Preview
                    </span>
                    <article className="prose prose-invert max-w-none text-xs leading-relaxed text-slate-300 flex flex-col gap-4">
                      {formatMarkdown(policyEditorContent)}
                    </article>
                  </div>

                </div>
              ) : (
                <div className="glass-panel rounded-3xl p-16 text-center flex flex-col items-center gap-4">
                  {generatingPolicy ? (
                    <>
                      <RefreshCw className="w-10 h-10 text-indigo-400 animate-spin" />
                      <span className="text-xs font-bold text-slate-200 animate-pulse">Drafting corporate security framework with AI...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-12 h-12 text-slate-600" />
                      <div className="flex flex-col gap-1">
                        <h4 className="font-extrabold text-slate-200 text-base">Policy Workspace Empty</h4>
                        <p className="text-xs text-slate-500 leading-normal max-w-sm">
                          Select a documentation template and click "Draft with AI" to generate structured corporate security policies.
                        </p>
                      </div>
                      <button
                        onClick={triggerGeneratePolicy}
                        className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 text-indigo-300 rounded-xl px-5 py-2.5 text-xs font-bold transition cursor-pointer mt-2"
                      >
                        Initiate AI Drafting
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3.5: Employee Attestations (NEW) */}
          {activeTab === "attestations" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-extrabold text-lg text-slate-200">Employee Policy Attestation Portal</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Track employee policy review statistics for compliance requirements (SOC 2). Administrators can dispatch signature requests and simulate sign-offs.
                </p>
              </div>

              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel rounded-2xl p-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold">Total Requests</span>
                  <span className="font-bold text-slate-200 text-lg">{attestations.length}</span>
                </div>
                <div className="glass-panel rounded-2xl p-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold">Attestation Completion %</span>
                  <span className="font-bold text-emerald-400 text-lg">
                    {attestations.length
                      ? Math.round((attestations.filter((a) => a.status === "SIGNED").length / attestations.length) * 100)
                      : 0}
                    %
                  </span>
                </div>
              </div>

              {/* Simulate Request Form */}
              <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Dispatch Attestation Sign Request</span>
                <form onSubmit={handleRequestAttestation} className="grid grid-cols-3 gap-4 text-xs items-end">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Employee Name</label>
                    <input
                      type="text"
                      value={newAttestName}
                      onChange={(e) => setNewAttestName(e.target.value)}
                      placeholder="E.g., Jane Doe"
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Employee Email</label>
                    <input
                      type="email"
                      value={newAttestEmail}
                      onChange={(e) => setNewAttestEmail(e.target.value)}
                      placeholder="E.g., employee@company.com"
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Select Policy</label>
                    <select
                      value={newAttestPolicy}
                      onChange={(e) => setNewAttestPolicy(e.target.value)}
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none cursor-pointer"
                    >
                      <option value="Access Control Policy">Access Control Policy</option>
                      <option value="Data Cryptography & Security Standard">Data Cryptography Standard</option>
                      <option value="Incident Response & Tabletop Plan">Incident Response Plan</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={creatingAttest}
                    className="col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-lg"
                  >
                    <Plus className="w-4 h-4" /> Dispatch Request
                  </button>
                </form>
              </div>

              {/* Attestation Grid */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-slate-300">
                    <thead className="bg-white/[0.02] border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-left">
                      <tr>
                        <th className="p-4">Employee</th>
                        <th className="p-4">Requested Policy</th>
                        <th className="p-4 text-center">Status</th>
                        <th className="p-4">Signed Date</th>
                        <th className="p-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {attestations.map((a) => (
                        <tr key={a.id} className="hover:bg-white/[0.01]">
                          <td className="p-4">
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-200">{a.employeeName}</span>
                              <span className="text-[10px] text-slate-500 font-mono mt-0.5">{a.employeeEmail}</span>
                            </div>
                          </td>
                          <td className="p-4 font-semibold text-slate-300">{a.policyTitle}</td>
                          <td className="p-4 text-center">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                              a.status === "SIGNED" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/15" : "text-yellow-400 bg-yellow-500/10 border-yellow-500/15"
                            }`}>
                              {a.status}
                            </span>
                          </td>
                          <td className="p-4 font-medium text-slate-400">
                            {a.signedAt ? formatDateTime(a.signedAt) : "Pending Sign-off"}
                          </td>
                          <td className="p-4 text-center">
                            {a.status === "PENDING" && (
                              <button
                                onClick={() => handleSignAttestation(a.id)}
                                disabled={signingAttestId === a.id}
                                className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/25 text-indigo-300 text-[10px] px-2.5 py-1.5 rounded font-bold cursor-pointer transition"
                              >
                                Sign Policy as Employee
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3.7: Vendor Risk Directory (NEW) */}
          {activeTab === "vendors" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-extrabold text-lg text-slate-200">Third-Party Vendor Risk Matrix</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluate security postures of external software vendors. Send questionnaires, simulate audits, and log compliance ratings.
                </p>
              </div>

              {/* Add Vendor Form */}
              <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Add New Partner Vendor Registry</span>
                <form onSubmit={handleCreateVendor} className="grid grid-cols-3 gap-4 text-xs items-end">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Vendor Name</label>
                    <input
                      type="text"
                      value={newVendorName}
                      onChange={(e) => setNewVendorName(e.target.value)}
                      placeholder="E.g., Stripe, Salesforce"
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Security Contact Email</label>
                    <input
                      type="email"
                      value={newVendorEmail}
                      onChange={(e) => setNewVendorEmail(e.target.value)}
                      placeholder="E.g., trust@stripe.com"
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Risk Tier Priority</label>
                    <select
                      value={newVendorTier}
                      onChange={(e) => setNewVendorTier(e.target.value)}
                      className="bg-white/5 border border-white/5 rounded-lg p-2 focus:outline-none cursor-pointer"
                    >
                      <option value="CRITICAL">CRITICAL</option>
                      <option value="HIGH">HIGH</option>
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="LOW">LOW</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={creatingVendor}
                    className="col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-lg"
                  >
                    <Plus className="w-4 h-4" /> Add Vendor to Directory
                  </button>
                </form>
              </div>

              {/* Vendors List Table */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-slate-300">
                    <thead className="bg-white/[0.02] border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-left">
                      <tr>
                        <th className="p-4">Vendor Partner</th>
                        <th className="p-4 text-center">Risk Tier</th>
                        <th className="p-4 text-center">Score</th>
                        <th className="p-4 text-center">Status</th>
                        <th className="p-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {vendors.map((v) => (
                        <tr key={v.id} className="hover:bg-white/[0.01]">
                          <td className="p-4">
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-200">{v.name}</span>
                              <span className="text-[10px] text-slate-500 font-mono mt-0.5">{v.contactEmail}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                              v.securityTier === "CRITICAL" ? "text-red-400 bg-red-500/10 border-red-500/15" : v.securityTier === "HIGH" ? "text-orange-400 bg-orange-500/10 border-orange-500/15" : "text-slate-400 bg-white/5 border-white/10"
                            }`}>
                              {v.securityTier}
                            </span>
                          </td>
                          <td className="p-4 text-center font-mono font-bold text-slate-200">
                            {v.score ? `${v.score} / 100` : "Not Scored"}
                          </td>
                          <td className="p-4 text-center">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                              v.complianceStatus === "VERIFIED" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/15" : v.complianceStatus === "FAILED" ? "text-red-400 bg-red-500/10 border-red-500/15" : "text-yellow-400 bg-yellow-500/10 border-yellow-500/15"
                            }`}>
                              {v.complianceStatus}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <button
                              onClick={() => handleSimulateVendorAssessment(v.id)}
                              disabled={testingVendorId === v.id}
                              className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/25 text-indigo-300 text-[10px] px-2.5 py-1.5 rounded font-bold cursor-pointer transition"
                            >
                              Simulate Security Audit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: Threat Modeler & Risk Registry */}
          {activeTab === "risks" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-extrabold text-lg text-slate-200 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-400" /> AI Threat Modeler & Risks
                  </h3>
                  <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                    Analyze infrastructure structures, estimate vulnerability likelihoods, and map mitigations directly to compliance controls.
                  </p>
                </div>
              </div>

              {/* Stack Input Modeler Tool */}
              <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Analyze Infrastructure Tech Stack</span>
                <div className="flex gap-4 items-center">
                  <input
                    type="text"
                    value={techStackInput}
                    onChange={(e) => setTechStackInput(e.target.value)}
                    placeholder="E.g., AWS EC2, PostgreSQL DB, Next.js, Node.js"
                    className="flex-1 bg-white/5 border border-white/5 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500/30"
                  />
                  <button
                    onClick={triggerRunModeler}
                    disabled={runningModeler}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-5 text-xs font-bold transition flex items-center gap-2 cursor-pointer disabled:opacity-50 shrink-0 shadow-lg shadow-indigo-500/10"
                  >
                    {runningModeler ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                    Generate Threat Model
                  </button>
                </div>
              </div>

              {/* Risk Registry Table */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-slate-300">
                    <thead className="bg-white/[0.02] border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-left">
                      <tr>
                        <th className="p-4">Identified Threat</th>
                        <th className="p-4 text-center">Likelihood</th>
                        <th className="p-4 text-center">Impact</th>
                        <th className="p-4 text-center">Risk Score</th>
                        <th className="p-4">Mapped Mitigation</th>
                        <th className="p-4 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {risks.map((r, idx) => {
                        const score = r.likelihood * r.impact;
                        const isMitigated = getRiskMitigatedStatus(r.mitigation);
                        return (
                          <tr key={idx} className="hover:bg-white/[0.01]">
                            <td className="p-4 max-w-xs">
                              <div className="flex flex-col gap-1">
                                <span className="font-bold text-slate-200">{r.title}</span>
                                <p className="text-[11px] text-slate-400 leading-normal">{r.threat}</p>
                              </div>
                            </td>
                            <td className="p-4 text-center font-mono font-bold text-slate-400">{r.likelihood}</td>
                            <td className="p-4 text-center font-mono font-bold text-slate-400">{r.impact}</td>
                            <td className="p-4 text-center">
                              <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded ${
                                score >= 12 ? "text-red-400 bg-red-500/10 border border-red-500/15" : score >= 6 ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/15" : "text-slate-400 bg-white/5 border border-white/5"
                              }`}>
                                {score}
                              </span>
                            </td>
                            <td className="p-4 text-slate-400 leading-normal max-w-xs">{r.mitigation}</td>
                            <td className="p-4 text-center">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                isMitigated
                                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                                  : "text-red-400 bg-red-500/10 border-red-500/20"
                              }`}>
                                {isMitigated ? "Mitigated" : "Unmitigated"}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: Vulnerability Alerts Simulation */}
          {activeTab === "alerts" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-extrabold text-lg text-slate-200">Vulnerability & Alert Feed</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time security telemetry detected in active environments. Alerts can be converted into Remediation Planner tasks instantly.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {alerts.length ? (
                  alerts.map((a, idx) => (
                    <motion.div
                      key={a.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`glass-panel rounded-3xl p-6 flex flex-col gap-4 border-l-4 ${
                        a.status === "OPEN" ? "border-l-red-500" : "border-l-slate-600 opacity-60"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase">
                              {a.source}
                            </span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                              a.severity === "HIGH" ? "text-red-400 bg-red-500/10 border border-red-500/20" : "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20"
                            }`}>
                              {a.severity} Severity
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-200 mt-1">{a.title}</h4>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          a.status === "OPEN" ? "text-red-400 bg-red-500/10 border-red-500/15" : "text-slate-400 bg-white/5 border-white/5"
                        }`}>
                          {a.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed border border-white/5 rounded-2xl p-4 bg-white/[0.01]">
                        {a.description}
                      </p>

                      <div className="flex justify-end gap-2 items-center">
                        <span className="text-[10px] text-slate-500 font-mono mr-auto">
                          Detected: {formatDate(a.createdAt)}
                        </span>
                        {a.status === "OPEN" && (
                          <button
                            onClick={() => triggerConvertAlert(a.id)}
                            disabled={processingAlertId !== null}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl px-4 py-2 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                          >
                            {processingAlertId === a.id ? (
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Sparkles className="w-3.5 h-3.5" />
                            )}
                            Convert to Remediation Ticket
                          </button>
                        )}
                      </div>

                    </motion.div>
                  ))
                ) : (
                  <div className="glass-panel rounded-3xl p-12 text-center text-slate-500">
                    No active vulnerability log alerts detected.
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 6: Auditor Vault */}
          {activeTab === "auditor" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-extrabold text-lg text-slate-200">Auditor Compliance Vault</h3>
                  <p className="text-xs text-slate-400">External Auditor Read-Only workspace detailing compliance check registries.</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 px-4 text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10"
                >
                  <Printer className="w-4 h-4" /> Export Auditor Log
                </button>
              </div>

              {/* Auditor Grid */}
              <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-slate-300">
                    <thead className="bg-white/[0.02] border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-left">
                      <tr>
                        <th className="p-4">Control & Domain</th>
                        <th className="p-4 text-center">Status</th>
                        <th className="p-4 text-center">AI Verified</th>
                        <th className="p-4">Uploaded File</th>
                        <th className="p-4">Auditor Reviews / Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {questions.map((q, idx) => {
                        const ans = answers[q.id];
                        const showComments = activeCommentControlId === q.id;
                        return (
                          <React.Fragment key={idx}>
                            <tr className="hover:bg-white/[0.01]">
                              <td className="p-4 max-w-xs">
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[9px] font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 uppercase w-max">
                                    {q.domain}
                                  </span>
                                  <span className="font-semibold text-slate-200 leading-normal">{q.text}</span>
                                </div>
                              </td>
                              <td className="p-4 text-center">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                  ans?.response === "YES" ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" : "text-slate-400 bg-white/5 border-white/10"
                                }`}>
                                  {ans?.response || "NO"}
                                </span>
                              </td>
                              <td className="p-4 text-center">
                                {ans?.aiVerified !== undefined && ans.aiVerified !== null ? (
                                  <span className={`font-bold flex items-center justify-center gap-1 ${
                                    ans.aiVerified ? "text-emerald-400" : "text-red-400"
                                  }`}>
                                    {ans.aiVerified ? (
                                      <>
                                        <ShieldCheck className="w-3.5 h-3.5" /> Approved
                                      </>
                                    ) : (
                                      <>
                                        <ShieldAlert className="w-3.5 h-3.5" /> Rejected
                                      </>
                                    )}
                                  </span>
                                ) : (
                                  <span className="text-slate-500 font-bold">Unchecked</span>
                                )}
                              </td>
                              <td className="p-4 font-mono text-[11px] text-slate-400 max-w-xs truncate">
                                {ans?.evidenceUrl || "None"}
                              </td>
                              <td className="p-4 text-center">
                                <button
                                  onClick={() => setActiveCommentControlId(showComments ? null : q.id)}
                                  className="bg-white/5 border border-white/5 text-slate-300 text-[10px] px-2 py-1.5 rounded font-bold cursor-pointer hover:bg-white/10 transition inline-flex items-center gap-1"
                                >
                                  <MessageSquare className="w-3 h-3 text-indigo-400" />
                                  Notes ({comments.filter((c) => c.questionId === q.id).length})
                                </button>
                              </td>
                            </tr>
                            {showComments && (
                              <tr>
                                <td colSpan={5} className="p-4 bg-slate-950/40 border-b border-white/5">
                                  <div className="flex flex-col gap-3 max-w-2xl mx-auto">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Collaborative Audit Discussion</span>
                                    
                                    <div className="flex flex-col gap-2">
                                      {comments.filter((c) => c.questionId === q.id).map((c) => (
                                        <div key={c.id} className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-[11px] leading-relaxed">
                                          <div className="flex justify-between items-center text-slate-400 font-bold mb-1">
                                            <span>{c.author}</span>
                                            <span>{formatDate(c.createdAt)}</span>
                                          </div>
                                          <p className="text-slate-300">{c.text}</p>
                                        </div>
                                      ))}
                                    </div>

                                    <div className="flex gap-2 items-center mt-1">
                                      <input
                                        type="text"
                                        placeholder="Add comment response..."
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handlePostComment(q.id)}
                                        className="flex-1 bg-white/5 border border-white/5 text-slate-100 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
                                      />
                                      <button
                                        onClick={() => handlePostComment(q.id)}
                                        disabled={!commentInput.trim()}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer"
                                      >
                                        Post Note
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 6.5: CISO Board Deck */}
          {activeTab === "deck" && (
            <BoardPresentationDeck
              overallMaturityScore={overallMaturityScore}
              soc2Readiness={soc2Readiness}
              isoReadiness={isoReadiness}
              hipaaReadiness={hipaaReadiness}
              domainData={{
                accessControl: accessControlMat,
                dataSecurity: dataSecurityMat,
                incidentResponse: incidentResponseMat,
              }}
              risks={risks}
              mitigatedRisksCount={risks.filter((r) => getRiskMitigatedStatus(r.mitigation)).length}
              unmitigatedRisksCount={risks.filter((r) => !getRiskMitigatedStatus(r.mitigation)).length}
              organizationName={organizations.find((o) => o.id === activeOrgId)?.name || "Mankind Pharma Corporate"}
            />
          )}

          {/* TAB 7: Document Library */}
          {activeTab === "library" && (
            <div className="flex flex-col gap-6 w-full animate-fade-in">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border-indigo-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-extrabold text-lg text-slate-200">Global Document Library</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A centralized inventory of all verified compliance evidence files. This records document verification paths, timestamps, and active connector states.
                </p>
              </div>

              <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-slate-300">
                    <thead className="bg-white/[0.02] border-b border-white/5 text-slate-400 font-bold uppercase tracking-wider text-left">
                      <tr>
                        <th className="p-4">Evidence Reference</th>
                        <th className="p-4">Domain Control</th>
                        <th className="p-4">Upload Method</th>
                        <th className="p-4">AI Verification Status</th>
                        <th className="p-4">Check Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {documentInventory.length ? (
                        documentInventory.map((doc, idx) => {
                          const isConnector = doc.filename?.includes("://") || false;
                          return (
                            <tr key={idx} className="hover:bg-white/[0.01]">
                              <td className="p-4 font-mono text-[11px] text-slate-200 font-semibold max-w-xs truncate">
                                {doc.filename}
                              </td>
                              <td className="p-4">
                                <div className="flex flex-col gap-0.5">
                                  <span className="text-[9px] font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 uppercase w-max">
                                    {doc.domain}
                                  </span>
                                  <span className="text-[11px] text-slate-400 font-medium line-clamp-1">
                                    {doc.controlText}
                                  </span>
                                </div>
                              </td>
                              <td className="p-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                  isConnector
                                    ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
                                    : "text-slate-400 bg-white/5 border-white/10"
                                }`}>
                                  {isConnector ? "Continuous Sync" : "Manual PDF"}
                                </span>
                              </td>
                              <td className="p-4">
                                <span className="text-emerald-400 font-bold flex items-center gap-1">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AI Verified
                                </span>
                              </td>
                              <td className="p-4 text-slate-400 font-medium">{doc.date}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-500">
                            No evidence files uploaded or cloud connectors verified yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: Executive Compliance Report */}
          {activeTab === "report" && (
            <div className="flex flex-col gap-6 w-full print:p-0">
              
              {/* Toolbar */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden border-indigo-500/10 print:hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-extrabold text-lg text-slate-200">Compliance & Roadmap Report</h3>
                  <p className="text-xs text-slate-400">Generate, customize, and print structured report roadmap.</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={triggerGenerateReport}
                    disabled={generatingReport}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 px-4 text-xs font-bold transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {generatingReport ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    {reportMarkdown ? "Re-Generate Report" : "Generate Report with AI"}
                  </button>
                  {reportMarkdown && (
                    <button
                      onClick={() => window.print()}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl py-2.5 px-4 text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      Print / PDF
                    </button>
                  )}
                </div>
              </div>

              {/* Report Frame */}
              {reportMarkdown ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/5 bg-slate-900/10 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
                >
                  <article className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed font-sans gap-4 flex flex-col print:text-black print:leading-normal">
                    {formatMarkdown(reportMarkdown)}
                  </article>
                </motion.div>
              ) : (
                <div className="glass-panel rounded-3xl p-16 text-center flex flex-col items-center gap-4">
                  {generatingReport ? (
                    <>
                      <RefreshCw className="w-10 h-10 text-indigo-400 animate-spin" />
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-bold text-slate-200 animate-pulse">Consulting AI Audit Models...</span>
                        <p className="text-[10px] text-slate-500 max-w-xs">
                          Local LLM is scanning domains, compiling gaps, and drafting recommendations.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileText className="w-12 h-12 text-slate-600" />
                      <div className="flex flex-col gap-1">
                        <h4 className="font-extrabold text-slate-200 text-base">Executive Report Ready</h4>
                        <p className="text-xs text-slate-500 leading-normal max-w-sm">
                          Combine all compliance answers, verification gaps, and AI observations into a printable roadmap report.
                        </p>
                      </div>
                      <button
                        onClick={triggerGenerateReport}
                        className="bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-600/20 text-indigo-300 rounded-xl px-5 py-2.5 text-xs font-bold transition cursor-pointer mt-2"
                      >
                        Generate Compliance Report
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

      {/* Global RAG Search Policy Chat Side-Drawer Panel */}
      <AnimatePresence>
        {isRagOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end print:hidden">
            
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRagOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-md bg-[#090d16] border-l border-white/5 h-full flex flex-col shadow-2xl p-6"
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-indigo-400 animate-pulse" />
                  <h3 className="font-extrabold text-sm text-slate-100 tracking-tight">Evidence Policy Chat (RAG)</h3>
                </div>
                <button
                  onClick={() => setIsRagOpen(false)}
                  className="text-xs text-slate-500 hover:text-slate-300 font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Chat log */}
              <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-4 pb-4">
                {ragMessages.length ? (
                  ragMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                        msg.role === "user"
                          ? "bg-indigo-600/20 text-slate-200 self-end rounded-tr-none border border-indigo-500/10"
                          : "bg-white/5 text-slate-300 self-start rounded-tl-none border border-white/5"
                      }`}
                    >
                      {msg.role === "assistant" ? formatMarkdown(msg.content) : msg.content}
                    </div>
                  ))
                ) : (
                  <div className="text-center my-auto flex flex-col items-center justify-center gap-3 text-slate-500 px-4">
                    <FileText className="w-10 h-10 text-slate-600" />
                    <p className="text-[11px] leading-relaxed font-medium">
                      Ask me queries regarding your uploaded security policies (e.g. *"What is the database encryption standard?"* or *"Who performs access review audits?"*).
                    </p>
                  </div>
                )}
                <div ref={ragMessagesEndRef} />
              </div>

              {/* Input bar */}
              <div className="border-t border-white/5 pt-4 flex gap-2 items-center bg-[#090d16]">
                <input
                  type="text"
                  placeholder="Query compliance vault..."
                  value={ragInput}
                  onChange={(e) => setRagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendRagMessage()}
                  disabled={sendingRag}
                  className="flex-1 bg-white/5 border border-white/5 text-slate-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500/40 disabled:opacity-50"
                />
                <button
                  onClick={sendRagMessage}
                  disabled={sendingRag || !ragInput.trim()}
                  className="w-8 h-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-white/5 disabled:text-slate-500 flex items-center justify-center text-white transition cursor-pointer"
                >
                  {sendingRag ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Simple dynamic parser to display markdown nicely in the UI
function formatMarkdown(markdown: string) {
  return markdown.split("\n").map((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={idx} className="text-xl sm:text-2xl font-extrabold text-white border-b border-white/5 pb-2 mt-6 print:text-black font-sans">
          {trimmed.substring(2)}
        </h1>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="text-lg sm:text-xl font-bold text-indigo-300 mt-5 border-b border-white/5 pb-1 print:text-black font-sans">
          {trimmed.substring(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={idx} className="text-sm sm:text-base font-bold text-slate-200 mt-4 print:text-black font-sans">
          {trimmed.substring(4)}
        </h3>
      );
    }
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      return (
        <li key={idx} className="ml-4 list-disc text-slate-300 mt-1 print:text-black">
          {trimmed.substring(2)}
        </li>
      );
    }
    if (trimmed.startsWith("|")) {
      const cells = trimmed
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c !== "");
      if (trimmed.includes("---")) return null;
      return (
        <div key={idx} className="grid grid-cols-4 gap-2 border-b border-white/5 py-2 text-xs font-semibold text-slate-300 print:text-black font-mono">
          {cells.map((cell, cIdx) => (
            <span key={cIdx} className={cIdx === 0 ? "font-bold" : ""}>
              {cell}
            </span>
          ))}
        </div>
      );
    }
    if (trimmed === "") {
      return <div key={idx} className="h-2" />;
    }
    return (
      <p key={idx} className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
        {line}
      </p>
    );
  });
}

// Utility badge helper
function remedyCountBadge(count: number) {
  if (count === 0) return null;
  return (
    <span className="ml-1 text-[9px] font-extrabold bg-red-500/15 border border-red-500/25 text-red-400 px-1.5 py-0.5 rounded-full shrink-0">
      {count}
    </span>
  );
}

interface BoardPresentationDeckProps {
  overallMaturityScore: number;
  soc2Readiness: number;
  isoReadiness: number;
  hipaaReadiness: number;
  domainData: {
    accessControl: any;
    dataSecurity: any;
    incidentResponse: any;
  };
  risks: Risk[];
  mitigatedRisksCount: number;
  unmitigatedRisksCount: number;
  organizationName: string;
}

function BoardPresentationDeck({
  overallMaturityScore,
  soc2Readiness,
  isoReadiness,
  hipaaReadiness,
  domainData,
  risks,
  mitigatedRisksCount,
  unmitigatedRisksCount,
  organizationName,
}: BoardPresentationDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in print:p-0">
      
      {/* Slide Navigation Header */}
      <div className="glass-panel rounded-3xl p-6 flex justify-between items-center print:hidden border-indigo-500/10">
        <div>
          <h3 className="font-extrabold text-sm text-slate-200">CISO Board Presentation Deck</h3>
          <p className="text-[11px] text-slate-400 font-medium">Interactive landscape slides for executive reporting.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-xs bg-white/5 hover:bg-white/10 text-slate-300 font-bold px-3 py-1.5 rounded-lg border border-white/5 disabled:opacity-30 cursor-pointer"
          >
            Prev Slide
          </button>
          <span className="text-xs text-slate-400 font-semibold font-mono">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-1.5 rounded-lg transition disabled:opacity-30 cursor-pointer"
          >
            Next Slide
          </button>
          <button
            onClick={handlePrint}
            className="text-xs bg-white/5 hover:bg-white/10 text-slate-300 font-bold px-3 py-1.5 rounded-lg border border-white/5 transition cursor-pointer"
          >
            Print Deck
          </button>
        </div>
      </div>

      {/* Landscape Slide Container */}
      <div className="relative aspect-[16/9] w-full bg-[#050811] border border-white/5 rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col justify-between shadow-2xl print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none print:hidden"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none print:hidden"></div>

        {/* Slide Header */}
        <div className="flex justify-between items-center border-b border-white/5 pb-4 print:border-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest print:text-slate-600">
              AegisFlow Compliance Executive Report
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
            Slide {currentSlide + 1}
          </span>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 my-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col justify-center"
            >
              
              {/* Slide 0: Title & Executive Summary */}
              {currentSlide === 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 h-full">
                  <div className="flex flex-col gap-4 max-w-lg">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded w-max border border-indigo-500/15 print:text-indigo-600 font-sans">
                      Executive Overview
                    </span>
                    <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight print:text-black font-sans">
                      InfoSec Security Maturity & Audit Status
                    </h2>
                    <p className="text-xs text-slate-400 leading-relaxed print:text-slate-700">
                      An executive evaluation of {organizationName} compliance standards, mapping core administrative practices to SOC 2, ISO 27001, and HIPAA frameworks.
                    </p>
                    <ul className="text-xs text-slate-300 flex flex-col gap-2 mt-1 list-disc pl-4 print:text-slate-800">
                      <li>Security controls are verified in real time using automated cloud configurations.</li>
                      <li>Calculated maturity level establishes corporate data protection benchmarks.</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-32 h-32 rounded-full border-4 border-indigo-500/20 flex items-center justify-center relative bg-indigo-500/5 print:border-indigo-200">
                      <div className="text-center">
                        <span className="text-4xl font-extrabold text-white print:text-black font-sans">{overallMaturityScore.toFixed(1)}</span>
                        <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mt-0.5 font-sans">Rating</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 print:text-slate-600 font-sans">
                      Maturity Score
                    </span>
                  </div>
                </div>
              )}

              {/* Slide 1: Domain Ratings */}
              {currentSlide === 1 && (
                <div className="flex flex-col gap-6 h-full justify-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest print:text-indigo-600 font-sans">Metric Breakdown</span>
                    <h2 className="text-2xl font-extrabold text-white print:text-black font-sans">Structural Domain Maturities</h2>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    {/* AC */}
                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300 print:text-black">
                      <span className="text-xs font-bold text-slate-300 print:text-slate-800">Access Control</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-indigo-400 font-sans">{domainData.accessControl.score.toFixed(1)}</span>
                        <span className="text-xs text-slate-500">/ 5.0</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border w-max uppercase ${domainData.accessControl.color}`}>
                        {domainData.accessControl.level.split(":")[1].trim()}
                      </span>
                    </div>

                    {/* DS */}
                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300 print:text-black">
                      <span className="text-xs font-bold text-slate-300 print:text-slate-800">Data Security</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-indigo-400 font-sans">{domainData.dataSecurity.score.toFixed(1)}</span>
                        <span className="text-xs text-slate-500">/ 5.0</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border w-max uppercase ${domainData.dataSecurity.color}`}>
                        {domainData.dataSecurity.level.split(":")[1].trim()}
                      </span>
                    </div>

                    {/* IR */}
                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300 print:text-black">
                      <span className="text-xs font-bold text-slate-300 print:text-slate-800">Incident Response</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-indigo-400 font-sans">{domainData.incidentResponse.score.toFixed(1)}</span>
                        <span className="text-xs text-slate-500">/ 5.0</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border w-max uppercase ${domainData.incidentResponse.color}`}>
                        {domainData.incidentResponse.level.split(":")[1].trim()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 2: Risk Assessment Heatmap */}
              {currentSlide === 2 && (
                <div className="flex flex-col gap-6 h-full justify-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest print:text-indigo-600 font-sans">Risk Profile</span>
                    <h2 className="text-2xl font-extrabold text-white print:text-black font-sans">AI Threat Modeling & Risk Summary</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center border-b border-white/5 pb-2 print:border-slate-300">
                        <span className="text-xs text-slate-400 font-semibold print:text-slate-700">Total Risks</span>
                        <span className="text-sm font-bold text-slate-200 print:text-black">{risks.length}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2 print:border-slate-300">
                        <span className="text-xs text-slate-400 font-semibold print:text-slate-700">Mitigated Risks</span>
                        <span className="text-sm font-bold text-emerald-400">{mitigatedRisksCount}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-xs text-slate-400 font-semibold print:text-slate-700">Unmitigated Exposure</span>
                        <span className="text-sm font-bold text-red-400">{unmitigatedRisksCount}</span>
                      </div>
                    </div>

                    <div className="col-span-2 border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-2 max-h-[160px] overflow-y-auto print:border-slate-300 print:text-black">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Key Threats Evaluated</span>
                      {risks.slice(0, 3).map((r, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs gap-2 py-1 border-b border-white/5 last:border-none print:border-slate-300 font-sans">
                          <span className="text-slate-300 font-semibold truncate max-w-xs print:text-black">{r.title}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            r.likelihood * r.impact >= 12 ? "text-red-400 bg-red-500/10" : "text-yellow-400 bg-yellow-500/10"
                          }`}>
                            Score: {r.likelihood * r.impact}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 3: Compliance Framework Status */}
              {currentSlide === 3 && (
                <div className="flex flex-col gap-6 h-full justify-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest print:text-indigo-600 font-sans">Framework Status</span>
                    <h2 className="text-2xl font-extrabold text-white print:text-black font-sans">Regulatory Compliance Readiness</h2>
                  </div>

                  <div className="grid grid-cols-3 gap-6 text-xs text-slate-300 print:text-black">
                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300">
                      <span className="font-bold">SOC 2 Type II</span>
                      <div className="w-full bg-white/5 h-2 rounded-full mt-2 print:bg-slate-200 font-sans">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${soc2Readiness}%` }} />
                      </div>
                      <span className="font-semibold text-indigo-400 mt-1">{soc2Readiness}% Complete</span>
                    </div>

                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300">
                      <span className="font-bold">ISO 27001</span>
                      <div className="w-full bg-white/5 h-2 rounded-full mt-2 print:bg-slate-200 font-sans">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${isoReadiness}%` }} />
                      </div>
                      <span className="font-semibold text-indigo-400 mt-1">{isoReadiness}% Complete</span>
                    </div>

                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-3 print:border-slate-300">
                      <span className="font-bold">HIPAA Security</span>
                      <div className="w-full bg-white/5 h-2 rounded-full mt-2 print:bg-slate-200 font-sans">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${hipaaReadiness}%` }} />
                      </div>
                      <span className="font-semibold text-indigo-400 mt-1">{hipaaReadiness}% Complete</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Slide 4: Remediation Roadmap */}
              {currentSlide === 4 && (
                <div className="flex flex-col gap-6 h-full justify-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest print:text-indigo-600 font-sans">Roadmap</span>
                    <h2 className="text-2xl font-extrabold text-white print:text-black font-sans">Compliance Milestones & Timeline</h2>
                  </div>

                  <div className="grid grid-cols-3 gap-6 text-xs text-slate-300 print:text-black">
                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-2 print:border-slate-300">
                      <span className="font-bold text-red-400">🔴 Next 30 Days</span>
                      <p className="text-[11px] text-slate-400 leading-normal print:text-slate-800">
                        Address critical unmitigated risks: publish Access Control & Encryption Policies. Run AWS automated storage scans to verify keys.
                      </p>
                    </div>

                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-2 print:border-slate-300">
                      <span className="font-bold text-yellow-400">🟡 Next 60 Days</span>
                      <p className="text-[11px] text-slate-400 leading-normal print:text-slate-800">
                        Delegate remediation tasks for real-time monitoring controls. Implement database access log anomaly analyzer.
                      </p>
                    </div>

                    <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.01] flex flex-col gap-2 print:border-slate-300">
                      <span className="font-bold text-indigo-400">🟢 Next 90 Days</span>
                      <p className="text-[11px] text-slate-400 leading-normal print:text-slate-800">
                        Conduct the annual simulated cybersecurity tabletop breach drill. Invite external auditors to read the compliance vault.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Footer */}
        <div className="flex justify-between items-center border-t border-white/5 pt-4 print:border-slate-300">
          <span className="text-[9px] text-slate-500 font-mono">
            Prepared by CISO Security Officer
          </span>
          <span className="text-[9px] text-slate-500 font-mono">
            {organizationName} &copy; {new Date().getFullYear()}
          </span>
        </div>

      </div>

    </div>
  );
}
