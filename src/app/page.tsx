import { prisma } from "@/lib/prisma";
import AssessmentWizard from "@/components/AssessmentWizard";
import { Shield, Building, Clock, Calendar } from "lucide-react";

interface PageProps {
  searchParams: Promise<{ orgId?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const orgId = params.orgId || null;

  // Fetch all organizations for the workspace switcher dropdown
  const organizations = await prisma.organization.findMany({
    orderBy: { name: "asc" },
  });

  // Determine active organization
  let activeOrg = organizations.find((o) => o.name === "Mankind Pharma Corporate") || organizations[0];
  if (orgId) {
    const matched = organizations.find((o) => o.id === orgId);
    if (matched) activeOrg = matched;
  }

  // If no organizations exist at all (fallback protection)
  if (!activeOrg) {
    activeOrg = await prisma.organization.create({
      data: { name: "Mankind Pharma Corporate", id: "mankind-corporate-uuid-0000-0000" },
    });
  }

  // Fetch or create the active assessment for this organization
  let assessment = await prisma.assessment.findFirst({
    where: { organizationId: activeOrg.id },
    include: {
      organization: true,
      answers: true,
    },
  });

  if (!assessment) {
    assessment = await prisma.assessment.create({
      data: {
        organizationId: activeOrg.id,
        score: 0.0,
        status: "IN_PROGRESS",
      },
      include: {
        organization: true,
        answers: true,
      },
    });
  }

  // Fetch baseline questions, framework mappings, and tasks
  const questions = await prisma.question.findMany({
    orderBy: { domain: "asc" },
    include: {
      mappings: {
        include: {
          framework: true,
        },
      },
      remediationTask: true,
    },
  });

  // Fetch drafted policies
  const initialPolicies = await prisma.policyDocument.findMany();

  // Fetch GRC components (alerts and risk registry entries)
  const initialAlerts = await prisma.securityAlert.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formattedAlerts = initialAlerts.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    source: a.source,
    severity: a.severity,
    status: a.status,
    createdAt: a.createdAt.toISOString(),
  }));
  
  const initialRisks = await prisma.riskRegister.findMany({
    orderBy: { likelihood: "desc" },
  });

  // Fetch GRC expanded features
  const initialVendors = await prisma.vendor.findMany({
    orderBy: { score: "desc" },
  });

  const initialAttestations = await prisma.employeeAttestation.findMany({
    orderBy: { createdAt: "desc" },
  });

  const initialScanLogs = await prisma.connectorScanLog.findMany({
    orderBy: { createdAt: "desc" },
  });

  const initialComments = await prisma.auditComment.findMany({
    orderBy: { createdAt: "asc" },
  });

  // Map Answers from schema database type to matching Wizard Answer type
  const formattedAnswers = assessment.answers.map((ans) => ({
    id: ans.id,
    questionId: ans.questionId,
    response: ans.response,
    evidenceUrl: ans.evidenceUrl,
    aiVerified: ans.aiVerified,
    aiReasoning: ans.aiReasoning,
    verifiedAt: ans.verifiedAt ? ans.verifiedAt.toISOString() : null,
  }));

  // Format questions to include mappings and tasks safely
  const formattedQuestions = questions.map((q) => ({
    id: q.id,
    domain: q.domain,
    text: q.text,
    requiresDoc: q.requiresDoc,
    mappings: q.mappings.map((m) => ({
      framework: m.framework.name,
      clause: m.clause,
      description: m.description,
    })),
    task: q.remediationTask
      ? {
          id: q.remediationTask.id,
          assignedTo: q.remediationTask.assignedTo,
          dueDate: q.remediationTask.dueDate?.toISOString() || null,
          status: q.remediationTask.status,
          priority: q.remediationTask.priority,
        }
      : null,
  }));

  // Map organizations as serializable objects
  const serializableOrgs = organizations.map((o) => ({
    id: o.id,
    name: o.name,
  }));

  // Map comments as serializable objects
  const formattedComments = initialComments.map((c) => ({
    id: c.id,
    questionId: c.questionId,
    author: c.author,
    text: c.text,
    createdAt: c.createdAt.toISOString(),
  }));

  // Map vendors as serializable objects
  const formattedVendors = initialVendors.map((v) => ({
    id: v.id,
    name: v.name,
    securityTier: v.securityTier,
    complianceStatus: v.complianceStatus,
    contactEmail: v.contactEmail,
    score: v.score,
  }));

  // Map attestations
  const formattedAttestations = initialAttestations.map((a) => ({
    id: a.id,
    employeeName: a.employeeName,
    employeeEmail: a.employeeEmail,
    policyTitle: a.policyTitle,
    status: a.status,
    signedAt: a.signedAt?.toISOString() || null,
    createdAt: a.createdAt.toISOString(),
  }));

  // Map scan logs
  const formattedScanLogs = initialScanLogs.map((l) => ({
    id: l.id,
    connectorType: l.connectorType,
    status: l.status,
    details: l.details,
    createdAt: l.createdAt.toISOString(),
  }));

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col gap-8">
      {/* Dashboard Top Banner */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden border-indigo-500/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="flex items-center gap-4.5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-white/10 shrink-0">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Security Compliance & Maturity Audit
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium flex flex-wrap items-center gap-y-1 gap-x-4 mt-1.5">
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-indigo-400" />
                {assessment.organization.name}
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-indigo-400" />
                Status: <span className="text-indigo-300 font-bold">{assessment.status}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Last Updated
          </span>
          <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-400" />
            {new Date(assessment.updatedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Main Stepper Wizard & Live Maturity Metrics */}
      <AssessmentWizard
        questions={formattedQuestions}
        assessmentId={assessment.id}
        initialAnswers={formattedAnswers}
        initialPolicies={initialPolicies}
        initialAlerts={formattedAlerts}
        initialRisks={initialRisks}
        organizations={serializableOrgs}
        activeOrgId={activeOrg.id}
        initialComments={formattedComments}
        initialVendors={formattedVendors}
        initialAttestations={formattedAttestations}
        initialScanLogs={formattedScanLogs}
      />
    </div>
  );
}
