import { PrismaClient } from "./generated-client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const questions = [
  // Core InfoSec Baseline
  {
    domain: "Access Control",
    text: "Is multi-factor authentication (MFA) enforced for all external access to organizational systems?",
    requiresDoc: true,
  },
  {
    domain: "Access Control",
    text: "Are user access privileges reviewed quarterly to ensure alignment with least privilege principles?",
    requiresDoc: true,
  },
  {
    domain: "Data Security",
    text: "Is data at rest encrypted across all production databases and storage systems?",
    requiresDoc: true,
  },
  {
    domain: "Data Security",
    text: "Are database access logs monitored in real-time for anomalous data extraction queries?",
    requiresDoc: false,
  },
  {
    domain: "Incident Response",
    text: "Is there a documented incident response plan that is tested at least annually through tabletop exercises?",
    requiresDoc: true,
  },
  // GxP & Pharmaceutical Compliance Controls
  {
    domain: "Access Control",
    text: "Do systems generating electronic batch records enforce secure, read-only digital signatures and audit trails compliant with FDA 21 CFR Part 11?",
    requiresDoc: true,
  },
  {
    domain: "Data Security",
    text: "Are computerized systems in clinical research and R&D labs validated (CSV) to guarantee experimental data integrity?",
    requiresDoc: true,
  },
  {
    domain: "Incident Response",
    text: "Is there a localized data storage policy ensuring patient health information and clinical trial logs are hosted inside Indian borders in compliance with the DPDP Act of 2023?",
    requiresDoc: true,
  },
];

const mockAlerts = [
  {
    title: "S3 Bucket Public Read Access Found",
    description: "A public-read ACL was detected on production storage bucket 'mankind-compliance-evidence-vault' allowing unauthenticated document downloads.",
    source: "AWS",
    severity: "HIGH",
    status: "OPEN",
  },
  {
    title: "Unvalidated Lab System Syncing Raw Logs",
    description: "R&D Lab Computer System 'HPLC-Liquid-Chromatography-04' is sync-feeding raw testing results without active electronic audit trail checksums.",
    source: "AWS",
    severity: "HIGH",
    status: "OPEN",
  },
  {
    title: "Plaintext DB Credentials Exposed in Repo",
    description: "A hardcoded Postgres connection string (with passwords) was committed to the main branch of 'infosec-maturity' in file 'src/lib/prisma.ts'.",
    source: "GITHUB",
    severity: "HIGH",
    status: "OPEN",
  },
  {
    title: "Stale Admin Account Active in Directory",
    description: "Okta user 'ex-employee@mankindpharma.com' remains active 14 days after their offboarding ticket was closed.",
    source: "OKTA",
    severity: "MEDIUM",
    status: "OPEN",
  },
];

const mockRisks = [
  {
    title: "Phishing Attack Bypasses Console Controls",
    threat: "Attackers phish administrative credentials, compromising the clinical trials database platform due to single-factor authentication schemes.",
    likelihood: 3,
    impact: 5,
    mitigation: "Enforce Multi-Factor Authentication (MFA) globally at the identity provider level.",
    status: "UNMITIGATED",
  },
  {
    title: "Unencrypted Database Backups Exposure",
    threat: "Postgres database backups are stolen from cloud volumes, leading to plaintext exposure of customer compliance documents.",
    likelihood: 2,
    impact: 4,
    mitigation: "Ensure AES-256 encryption is enabled on all databases, cloud backup pools, and storage keys.",
    status: "UNMITIGATED",
  },
  {
    title: "Electronic Batch Record Audit Trail Corruption",
    threat: "Unauthorized deletion of batch logs by plant operators to hide production anomalies due to inactive CFR Part 11 audit trails.",
    likelihood: 2,
    impact: 5,
    mitigation: "Enforce secure digital signatures and read-only audit trails compliant with FDA 21 CFR Part 11.",
    status: "UNMITIGATED",
  },
  {
    title: "Inability to Contain Network Intrusion",
    threat: "System breach goes undetected or uncontained for weeks due to missing incident containment playbook rules and staff testing.",
    likelihood: 3,
    impact: 4,
    mitigation: "Establish a documented Incident Response plan tested annually via tabletop exercises.",
    status: "UNMITIGATED",
  },
];

const mockVendors = [
  {
    name: "Aurobindo Active Ingredients",
    securityTier: "CRITICAL",
    complianceStatus: "VERIFIED",
    contactEmail: "security@aurobindo.com",
    score: 94,
  },
  {
    name: "Thermo Fisher Scientific Lab Software",
    securityTier: "HIGH",
    complianceStatus: "PENDING",
    contactEmail: "compliance@thermofisher.com",
    score: 76,
  },
  {
    name: "Mankind Packaging Solutions Ltd",
    securityTier: "MEDIUM",
    complianceStatus: "VERIFIED",
    contactEmail: "trust@mankindpackaging.com",
    score: 85,
  },
];

const mockAttestations = [
  {
    employeeName: "Dr. Ramesh Sharma",
    employeeEmail: "ramesh.sharma@mankindpharma.com",
    policyTitle: "Access Control Policy",
    status: "SIGNED",
    signedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    employeeName: "Sunita Roy",
    employeeEmail: "sunita.roy@mankindpharma.com",
    policyTitle: "Access Control Policy",
    status: "PENDING",
  },
  {
    employeeName: "Alice Developer",
    employeeEmail: "alice@mankindpharma.com",
    policyTitle: "Data Cryptography & Security Standard",
    status: "SIGNED",
    signedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

const mockScanLogs = [
  {
    connectorType: "AWS",
    status: "SUCCESS",
    details: "Scheduled cloud scanning executed. Checked KMS encryption pools for clinical R&D storage systems. Confirmed compliance with GxP validations.",
  },
  {
    connectorType: "OKTA",
    status: "SUCCESS",
    details: "Scheduled directory sync executed. Inspected 250 administrative user accounts. Confirmed MFA is enforced on batch-record management consoles.",
  },
];

async function main() {
  console.log("Seeding Mankind Pharma data...");

  // Seed Org 1: Mankind Corporate
  const org1 = await prisma.organization.upsert({
    where: { name: "Mankind Pharma Corporate" },
    update: {},
    create: {
      id: "mankind-corporate-uuid-0000-0000",
      name: "Mankind Pharma Corporate",
    },
  });

  // Seed Org 2: R&D Labs
  const org2 = await prisma.organization.upsert({
    where: { name: "Mankind Research Laboratories (R&D)" },
    update: {},
    create: {
      id: "mankind-labs-uuid-9999-9999",
      name: "Mankind Research Laboratories (R&D)",
    },
  });

  // Seed Org 3: API Plants
  const org3 = await prisma.organization.upsert({
    where: { name: "Mankind API Manufacturing Plant" },
    update: {},
    create: {
      id: "mankind-api-uuid-8888-8888",
      name: "Mankind API Manufacturing Plant",
    },
  });

  console.log("Upserted Organizations: Mankind Corporate, Mankind R&D, Mankind API Plant");

  // Seed assessments
  const assessments = [
    { id: "mankind-corp-assessment-uuid", orgId: org1.id },
    { id: "mankind-rd-assessment-uuid", orgId: org2.id },
    { id: "mankind-api-assessment-uuid", orgId: org3.id },
  ];

  for (const ass of assessments) {
    await prisma.assessment.upsert({
      where: { id: ass.id },
      update: {},
      create: {
        id: ass.id,
        organizationId: ass.orgId,
        score: 0.0,
        status: "IN_PROGRESS",
      },
    });
  }
  console.log("Upserted Assessments for Mankind workspaces.");

  // Seed questions
  for (const q of questions) {
    const existing = await prisma.question.findFirst({
      where: { text: q.text },
    });
    if (!existing) {
      await prisma.question.create({
        data: q,
      });
      console.log(`Created question: [${q.domain}] ${q.text}`);
    }
  }

  // Seed frameworks
  const frameworks = [
    { name: "SOC 2", desc: "System and Organization Controls standards." },
    { name: "ISO 27001", desc: "ISMS security policies standards." },
    { name: "HIPAA", desc: "ePHI compliance security safeguards." },
    { name: "FDA 21 CFR Part 11", desc: "FDA electronic records and signatures validation guidelines." },
    { name: "GxP Data Integrity", desc: "Good Practice Manufacturing and Lab audit principles." },
    { name: "DPDP Act (India)", desc: "Indian digital personal data privacy act." },
  ];

  const dbFrameworks: Record<string, any> = {};

  for (const fw of frameworks) {
    const res = await prisma.framework.upsert({
      where: { name: fw.name },
      update: { description: fw.desc },
      create: {
        name: fw.name,
        description: fw.desc,
      },
    });
    dbFrameworks[fw.name] = res;
  }
  console.log("Upserted compliance frameworks.");

  const dbQuestions = await prisma.question.findMany();

  // Clear mappings
  await prisma.mapping.deleteMany();

  for (const q of dbQuestions) {
    // Seed framework mappings
    if (q.text.includes("multi-factor")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["SOC 2"].id, clause: "CC6.1", description: "Restricts logical access to authorized users." },
          { questionId: q.id, frameworkId: dbFrameworks["ISO 27001"].id, clause: "A.9.4.2", description: "Secure log-on procedures." },
          { questionId: q.id, frameworkId: dbFrameworks["HIPAA"].id, clause: "164.312(a)(2)(iv)", description: "Multi-factor authentication rules." },
        ],
      });
    } else if (q.text.includes("privilege")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["SOC 2"].id, clause: "CC6.2", description: "Authorizes and reviews logical access rights." },
          { questionId: q.id, frameworkId: dbFrameworks["ISO 27001"].id, clause: "A.9.2.5", description: "Review of user access rights." },
          { questionId: q.id, frameworkId: dbFrameworks["FDA 21 CFR Part 11"].id, clause: "Sec. 11.10(d)", description: "Limiting system access to authorized individuals." },
        ],
      });
    } else if (q.text.includes("encryption")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["SOC 2"].id, clause: "CC6.7", description: "Protects data transmission and storage." },
          { questionId: q.id, frameworkId: dbFrameworks["ISO 27001"].id, clause: "A.8.3.1", description: "Management of media." },
          { questionId: q.id, frameworkId: dbFrameworks["HIPAA"].id, clause: "164.312(e)(2)(ii)", description: "Encrypt and decrypt ePHI." },
        ],
      });
    } else if (q.text.includes("access logs")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["SOC 2"].id, clause: "CC6.8", description: "Detects logical vulnerability changes." },
          { questionId: q.id, frameworkId: dbFrameworks["ISO 27001"].id, clause: "A.12.4.1", description: "Event logging and monitoring." },
          { questionId: q.id, frameworkId: dbFrameworks["FDA 21 CFR Part 11"].id, clause: "Sec. 11.10(e)", description: "Use of secure, computer-generated audit trails." },
        ],
      });
    } else if (q.text.includes("incident response")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["SOC 2"].id, clause: "CC7.3", description: "Detects and acts upon security incidents." },
          { questionId: q.id, frameworkId: dbFrameworks["ISO 27001"].id, clause: "A.16.1.1", description: "Security incident management." },
        ],
      });
    } else if (q.text.includes("electronic batch records")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["FDA 21 CFR Part 11"].id, clause: "Sec. 11.50", description: "Electronic signatures requirements." },
          { questionId: q.id, frameworkId: dbFrameworks["GxP Data Integrity"].id, clause: "GMP-A5", description: "Securing production logs and batch certifications." },
        ],
      });
    } else if (q.text.includes("validation (CSV)")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["GxP Data Integrity"].id, clause: "CSV-Validation", description: "Computerized system validation for GxP laboratories." },
          { questionId: q.id, frameworkId: dbFrameworks["FDA 21 CFR Part 11"].id, clause: "Sec. 11.10(a)", description: "Validation of systems to ensure accuracy and reliability." },
        ],
      });
    } else if (q.text.includes("borders")) {
      await prisma.mapping.createMany({
        data: [
          { questionId: q.id, frameworkId: dbFrameworks["DPDP Act (India)"].id, clause: "Section 6", description: "Localization, consent and security safeguards of digital personal data." },
          { questionId: q.id, frameworkId: dbFrameworks["HIPAA"].id, clause: "164.308(a)(1)", description: "Security management process safeguards." },
        ],
      });
    }

    // Seed default Remediation Task
    const priority = q.domain === "Access Control" || q.domain === "Data Security" ? "HIGH" : "MEDIUM";
    const assignedTo = q.domain === "Access Control" ? "IT Administrator" : q.domain === "Data Security" ? "Lead DB Engineer" : "CISO";

    await prisma.remediationTask.upsert({
      where: { questionId: q.id },
      update: {},
      create: {
        questionId: q.id,
        status: "OPEN",
        priority,
        assignedTo,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    // Seed initial Auditor Comments
    const mfaQ = q.text.includes("multi-factor");
    if (mfaQ) {
      await prisma.auditComment.createMany({
        data: [
          {
            questionId: q.id,
            author: "FDA Inspector (FDA)",
            text: "Verify that user logs in batch plants enforce multi-factor logins. Please attach active directory policies.",
          },
          {
            questionId: q.id,
            author: "Internal GxP Auditor",
            text: "Okta integration covers 100% of corporate consoles. Secondary testing tools are scheduled for sync next week.",
          },
        ],
      });
    }
  }

  // Seed Security Alerts
  for (const a of mockAlerts) {
    await prisma.securityAlert.upsert({
      where: { title: a.title },
      update: {},
      create: a,
    });
  }

  // Seed Risk Register Entries
  for (const r of mockRisks) {
    await prisma.riskRegister.upsert({
      where: { title: r.title },
      update: {},
      create: r,
    });
  }

  // Seed GRC Vendors
  for (const v of mockVendors) {
    await prisma.vendor.upsert({
      where: { name: v.name },
      update: {},
      create: v,
    });
  }

  // Seed Employee Attestations
  await prisma.employeeAttestation.deleteMany();
  for (const att of mockAttestations) {
    await prisma.employeeAttestation.create({
      data: att,
    });
  }

  // Seed Connector Scan Logs
  await prisma.connectorScanLog.deleteMany();
  for (const log of mockScanLogs) {
    await prisma.connectorScanLog.create({
      data: log,
    });
  }

  console.log("Mankind Pharma Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
