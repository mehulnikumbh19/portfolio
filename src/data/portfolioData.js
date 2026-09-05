import {
  AlertTriangle,
  BookOpen,
  Bot,
  ClipboardCheck,
  Cloud,
  FileCheck2,
  FileSpreadsheet,
  Fingerprint,
  Gauge,
  GraduationCap,
  KeyRound,
  Layers3,
  ShieldCheck,
  ShieldHalf,
  Siren,
  UsersRound
} from "lucide-react";

// Icons are kept in the data layer so sections can stay data-driven.

export const profile = {
  name: "Mehul Nikumbh",
  role: "Cybersecurity GRC & Cloud Security Analyst",
  heroHeadline:
    "Cloud security evidence, control testing, and audit readiness across AWS, Azure, and GCP.",
  summary:
    "3+ years turning cloud security evidence into audit-ready risk decisions. ISO 27001, NIST CSF, SOC 2, CSPM, IAM, ServiceNow IRM, and SAP GRC across AWS, Azure, and GCP.",
  education:
    "M.S. Information Systems (Cybersecurity) @ California State University, Long Beach, May 2026",
  availability:
    "Open to Cloud Security, GRC, IT Risk, and Security Compliance opportunities.",
  email: "mehul.n@itjobinbox.com",
  location: "California, USA",
  linkedin: "https://www.linkedin.com/in/mehulnikumbh/",
  github: "https://github.com/mehulnikumbh19",
  resume: `${import.meta.env.BASE_URL}Mehul_Nikumbh_Resume.pdf`
};

export const terminalLines = [
  "triaging cspm findings :: aws / azure / gcp",
  "validating kms + key vault encryption evidence",
  "reviewing entra id + aws iam access certifications",
  "mapping ai/llm controls :: nist ai rmf / iso 42001",
  "status :: open to cloud security & grc roles"
];

export const tickerItems = [
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "CIS Controls",
  "AWS",
  "Azure",
  "GCP",
  "CSPM",
  "Entra ID",
  "SAP GRC",
  "ServiceNow IRM",
  "Terraform",
  "Kubernetes",
  "AWS Cloud Practitioner",
  "Microsoft SC-900",
  "Microsoft AZ-900",
  "Google Cybersecurity",
  "NIST AI RMF",
  "ISO 42001",
  "GDPR",
  "DPDP Act",
  "CERT-In",
  "IEC 62443"
];

export const heroSkills = [
  "CSPM & Cloud Security",
  "ISO 27001",
  "SOC 2",
  "Cloud IAM Governance",
  "ITGC Control Testing",
  "AI/LLM Risk Governance"
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

// Rendered neofetch-style in the About section: "key: value" lines.
export const aboutSpecs = [
  { key: "role:", value: "GRC Analyst @ BlackRock" },
  { key: "uptime:", value: "3+ yrs cloud security & GRC" },
  { key: "clouds:", value: "AWS . Azure . GCP" },
  { key: "frameworks:", value: "ISO 27001 . NIST CSF . SOC 2 . CIS" },
  { key: "identity:", value: "Entra ID . AWS IAM . SAP GRC" },
  { key: "tooling:", value: "ServiceNow IRM . Terraform . Power BI" },
  { key: "certs:", value: "AWS CCP . SC-900 . AZ-900 . Google Cyber" },
  { key: "degree:", value: "M.S. Info Systems (Cybersecurity), CSULB" },
  { key: "base:", value: "California, USA" }
];

export const problems = [
  {
    title: "Cloud Misconfiguration & CSPM Gaps",
    icon: AlertTriangle,
    description:
      "CSPM triage across AWS, Azure, and GCP with gaps documented, owned, and closed."
  },
  {
    title: "Cloud IAM & Access Governance",
    icon: KeyRound,
    description:
      "Entra ID and AWS IAM reviews: orphaned identities, standing privileges, access certification."
  },
  {
    title: "Insecure IaC & Container Deployments",
    icon: Layers3,
    description:
      "Terraform and Kubernetes review against Azure Policy, AWS SCP, and OPA Gatekeeper guardrails."
  },
  {
    title: "ITGC & Audit Evidence Gaps",
    icon: FileCheck2,
    description:
      "ISO 27001 SoA evidence, ITGC control testing, and remediation tracked to closure."
  },
  {
    title: "Third-Party & Vendor Risk Blind Spots",
    icon: UsersRound,
    description:
      "SOC 2 Type II, ISO 27001 certificate, and due-diligence questionnaire reviews."
  },
  {
    title: "Emerging AI/LLM Governance Gaps",
    icon: Bot,
    description:
      "AI use-case inventory plus prompt-injection and guardrail tests mapped to NIST AI RMF and ISO 42001."
  }
];

export const skillGroups = [
  {
    title: "GRC, Risk & Audit",
    icon: ShieldCheck,
    skills: [
      "ITGC",
      "Control Testing",
      "Audit Evidence",
      "Audit Readiness",
      "Risk Assessments",
      "Risk Register",
      "Risk Treatment",
      "Remediation Tracking",
      "Third-Party Risk",
      "Security Exceptions"
    ]
  },
  {
    title: "Compliance & Frameworks",
    icon: BookOpen,
    skills: [
      "ISO 27001",
      "NIST CSF",
      "SOC 2",
      "CIS Controls",
      "GDPR",
      "DPDP Act",
      "CERT-In",
      "IEC 62443"
    ]
  },
  {
    title: "Identity & Cloud Security",
    icon: Fingerprint,
    skills: [
      "IAM",
      "Microsoft Entra ID",
      "AWS IAM",
      "Access Reviews",
      "SAP GRC",
      "SoD",
      "CSPM",
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Cloud Configuration Reviews",
      "AWS KMS",
      "Azure Key Vault"
    ]
  },
  {
    title: "Tools & Reporting",
    icon: FileSpreadsheet,
    skills: [
      "ServiceNow IRM",
      "ServiceNow CMDB",
      "Power BI",
      "Excel",
      "SharePoint",
      "Azure DevOps",
      "Terraform",
      "AWS CloudTrail",
      "Snowflake",
      "Databricks"
    ]
  }
];

export const experience = [
  {
    title: "GRC Analyst",
    company: "BlackRock",
    type: "Full-time",
    dates: "Mar 2026 - Present",
    location: "CA",
    tags: ["CSPM", "AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Microsoft Entra ID", "AI/LLM Governance"],
    bullets: [
      "Triage CSPM findings across AWS, Azure, and GCP; validate configurations, document control gaps, and track remediation to closure.",
      "Review AWS Security Group and Azure NSG rule sets, segmentation, and encryption controls (KMS, Key Vault, TLS, key rotation) for SOC 1 / SOC 2 evidence.",
      "Security-review Terraform pull requests and Kubernetes findings (pod misconfigs, permissive RBAC); assess Azure Policy, AWS SCP, and OPA Gatekeeper guardrails.",
      "Review AWS IAM and Entra ID assignments, service principals, orphaned identities, and standing privileges for access certification campaigns.",
      "Support Aladdin client due-diligence questionnaires and collect CloudTrail, Azure Monitor, and GCP audit logs for incident timelines and control testing.",
      "Maintain the AI/LLM use-case inventory, run prompt-injection and guardrail tests, and map controls to NIST AI RMF, ISO 42001, and the EU AI Act."
    ]
  },
  {
    title: "Cloud Security Analyst",
    company: "Siemens",
    type: "Full-time",
    dates: "Jan 2022 - Jul 2024",
    location: "India",
    tags: ["ISO 27001", "ITGC", "ServiceNow IRM", "SAP GRC", "SoD", "GDPR", "DPDP Act", "CERT-In"],
    bullets: [
      "Maintained ISO 27001 documentation and Statement of Applicability evidence; supported internal and surveillance audits.",
      "Executed cloud security and ITGC control testing: evidence collection, configuration review, observations, and remediation tracking.",
      "Administered ServiceNow IRM and CMDB asset inventory, classification, and control mapping; coordinated quarterly access recertification.",
      "Reviewed SAP GRC Access Control results, Entra access, SoD conflicts, mitigating controls, and firefighter access.",
      "Managed the cloud-security risk register, security exceptions, compensating controls, and third-party SOC 2 Type II / ISO 27001 reviews.",
      "Coordinated GDPR, DPDP Act, and CERT-In compliance and built cloud-security KPI reporting in Power BI and Excel."
    ]
  }
];

export const metrics = [
  { label: "Years GRC & Cloud Security Experience", value: 3, suffix: "+", icon: ShieldCheck },
  { label: "Cloud Platforms (AWS / Azure / GCP)", value: 3, suffix: "", icon: Cloud },
  { label: "Compliance Frameworks & Standards", value: 8, suffix: "", icon: BookOpen },
  { label: "Industry Certifications", value: 4, suffix: "", icon: GraduationCap }
];

export const frameworks = [
  {
    name: "ISO 27001",
    use: "ISMS audit readiness",
    work: "SoA evidence, security documentation, internal and surveillance audits."
  },
  {
    name: "NIST CSF",
    use: "Governance and risk communication",
    work: "Identify, Protect, Detect, Respond, Recover structure for cloud risk assessments."
  },
  {
    name: "SOC 2",
    use: "Trust services evidence",
    work: "Encryption, access, and monitoring evidence; vendor SOC 2 Type II reviews."
  },
  {
    name: "CIS Controls",
    use: "Hardening baseline",
    work: "Cloud and system configurations benchmarked during control testing."
  },
  {
    name: "GDPR",
    use: "EU data protection",
    work: "Compliance coordination alongside cloud data-handling reviews."
  },
  {
    name: "DPDP Act",
    use: "India data protection",
    work: "Regional data-protection compliance coordination."
  },
  {
    name: "CERT-In",
    use: "Incident reporting mandate",
    work: "Compliance activities and incident-reporting readiness."
  },
  {
    name: "IEC 62443",
    use: "OT and industrial security",
    work: "Security concepts applied to operational technology coverage."
  }
];

export const education = {
  icon: GraduationCap,
  entries: [
    {
      school: "California State University, Long Beach",
      dates: "Aug 2024 - May 2026",
      degree: "Master of Science, Information Systems (Cybersecurity)",
      location: "Long Beach, CA"
    },
    {
      school: "University of Mumbai",
      dates: "2020 - May 2024",
      degree: "Bachelor of Engineering, Electronics (Honors: Cybersecurity)",
      location: "Mumbai, India"
    }
  ],
  school: "California State University, Long Beach",
  degree: "Master of Science, Information Systems (Cybersecurity)",
  dates: "Aug 2024 - May 2026",
  location: "Long Beach, CA",
  focusAreas: [
    "Cloud security governance",
    "IT risk and control assessment",
    "Security compliance and audit readiness",
    "Identity and access management",
    "Cybersecurity analytics"
  ]
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Microsoft SC-900 (Security, Compliance, and Identity Fundamentals)",
  "Google Cybersecurity Professional",
  "Microsoft AZ-900 (Azure Fundamentals)"
];

/* -------------------------------------------------------------------------
 * The exports below back components that are not currently wired into
 * App.jsx (CaseStudies, GRCLab, Artifacts). They document simulated,
 * non-resume practice projects and are left unchanged; they are not part
 * of the live site and are out of scope for the resume-driven content pass.
 * ---------------------------------------------------------------------- */

export const caseStudies = [
  {
    name: "AccessGuard",
    icon: KeyRound,
    showSimulatedDisclaimer: true,
    sections: [
      {
        title: "Problem",
        items: [
          "Companies need to validate whether access rules are being followed across HR systems, Active Directory, privileged accounts, tickets, and permission groups."
        ]
      },
      {
        title: "Approach",
        items: [
          "AccessGuard simulates a company access review process. Fake employee, account, permission, privileged access, ticket, and SoD data is generated, then Python tests identify access exceptions and produce Excel-ready audit outputs."
        ]
      },
      {
        title: "Data Sources",
        items: [
          "HR master data",
          "Active Directory users",
          "AD group membership",
          "Privileged account records",
          "Access request tickets",
          "SoD rules",
          "Control matrix",
          "Seeded test scenarios"
        ]
      },
      {
        title: "Audit Tests",
        items: [
          "Population completeness",
          "Terminated-user access",
          "Joiner provisioning evidence",
          "Mover access cleanup",
          "Privileged access MFA and justification",
          "Segregation of duties conflicts",
          "Ticket approval timing"
        ]
      },
      {
        title: "Key Findings",
        items: [
          "Terminated users with active accounts require immediate remediation ownership",
          "Privileged access needs stronger justification and MFA evidence",
          "Ticket approval timing gaps create weak audit traceability",
          "SoD conflicts need exception review and business approval"
        ]
      },
      {
        title: "Outputs",
        items: [
          "Exceptions CSV",
          "Excel workbook with 13 tabs",
          "Risk matrix",
          "Remediation tracker",
          "Owner status dashboard",
          "Power BI-ready data files"
        ]
      },
      {
        title: "Risk/Compliance Value",
        items: [
          "Surfaces terminated-user access and orphaned accounts before audit findings escalate",
          "Links access exceptions to control owners and remediation timelines for SOX and ISO evidence",
          "Demonstrates repeatable access review testing that scales across user populations"
        ]
      },
      {
        title: "Interview Talking Points",
        items: [
          "How user access reviews support SOX ITGC and ISO 27001 objectives",
          "Why terminated-user access is high risk",
          "How SoD conflicts can create fraud risk",
          "Why audit evidence must be complete, traceable, and owner-assigned",
          "How remediation should be tracked through closure evidence"
        ]
      }
    ]
  },
  {
    name: "Bastion",
    icon: ShieldHalf,
    sections: [
      {
        title: "Problem",
        items: [
          "Framework requirements are often disconnected from actual technical evidence, leaving audit teams with incomplete control narratives and unclear remediation ownership."
        ]
      },
      {
        title: "Approach",
        items: [
          "Bastion maps control requirements to evidence artifacts, control owners, residual risk ratings, and remediation status using a structured Excel and Python workflow."
        ]
      },
      {
        title: "Data Used",
        items: [
          "NIST 800-53 control catalog excerpts",
          "CIS Controls v8 mappings",
          "Policy and procedure documents",
          "Configuration screenshots and system exports",
          "Ticket and change records",
          "Control owner assignments"
        ]
      },
      {
        title: "Controls/Frameworks Mapped",
        items: [
          "NIST 800-53 access control, audit, and configuration families",
          "CIS Controls for asset inventory, secure configuration, and logging",
          "ISO 27001 Annex A control objectives",
          "SOC 2 common criteria for security monitoring"
        ]
      },
      {
        title: "Outputs Created",
        items: [
          "Control mapping table",
          "Evidence gap tracker",
          "Control owner tracker",
          "Risk prioritization dashboard",
          "Audit readiness summary"
        ]
      },
      {
        title: "Risk/Compliance Value",
        items: [
          "Identifies 28 evidence gaps across 5 control families before external audit cycles",
          "Prioritizes remediation by control criticality and likelihood of audit deficiency",
          "Gives leadership a single view of control effectiveness and open compliance risk"
        ]
      },
      {
        title: "Interview Talking Points",
        items: [
          "How control mapping connects framework language to operational evidence",
          "Why evidence quality matters as much as control design",
          "How to prioritize remediation when multiple control families have gaps",
          "What auditors look for in a control owner tracker"
        ]
      }
    ]
  },
  {
    name: "Patchwork",
    icon: AlertTriangle,
    sections: [
      {
        title: "Problem",
        items: [
          "Security teams often have too many vulnerabilities and not enough context for prioritization, leading to SLA misses and audit findings on overdue remediation."
        ]
      },
      {
        title: "Approach",
        items: [
          "Patchwork combines CVSS, exploit availability, asset criticality, business impact, and ownership to create a risk-ranked vulnerability register with leadership dashboards."
        ]
      },
      {
        title: "Data Used",
        items: [
          "Vulnerability scan exports with 2,000+ CVE records",
          "150-asset inventory with business criticality ratings",
          "Exploit availability and threat intelligence feeds",
          "Remediation SLA targets and exception approvals",
          "Asset owner and application team assignments"
        ]
      },
      {
        title: "Controls/Frameworks Mapped",
        items: [
          "NIST CSF Identify and Protect functions for vulnerability management",
          "CIS Control 7: Continuous Vulnerability Management",
          "PCI DSS requirement 6 for secure systems and applications",
          "ISO 27001 A.8 technical vulnerability management"
        ]
      },
      {
        title: "Outputs Created",
        items: [
          "Vulnerability risk register",
          "Remediation queues ranked by residual risk",
          "SLA tracker with overdue flags",
          "Exception tracker with compensating controls",
          "Leadership dashboard for open high-risk items"
        ]
      },
      {
        title: "Risk/Compliance Value",
        items: [
          "Shifts remediation from CVSS-only sorting to business-context prioritization",
          "Surfaces overdue patches on critical assets before they become audit deficiencies",
          "Provides auditable exception documentation with owner accountability"
        ]
      },
      {
        title: "Interview Talking Points",
        items: [
          "Why CVSS alone is insufficient for enterprise prioritization",
          "How asset criticality changes remediation sequencing",
          "What leadership needs in a vulnerability dashboard versus a scanner export",
          "How to document exceptions without hiding residual risk"
        ]
      }
    ]
  },
  {
    name: "Watchtower",
    icon: Siren,
    showSimulatedDisclaimer: true,
    sections: [
      {
        title: "Problem",
        items: [
          "High-volume SIEM alert queues make it difficult to triage events by business impact, leaving critical assets under-reviewed and incident evidence poorly documented."
        ]
      },
      {
        title: "Approach",
        items: [
          "Watchtower processes simulated SIEM alerts through a risk-based triage workflow that enriches IOCs, maps techniques to MITRE ATT&CK, and produces incident-ready documentation."
        ]
      },
      {
        title: "Data Used",
        items: [
          "500+ simulated SIEM alert records",
          "Asset inventory with criticality tiers",
          "External threat intelligence for IOC enrichment",
          "MITRE ATT&CK technique mappings",
          "Escalation and remediation ticket templates"
        ]
      },
      {
        title: "Controls/Frameworks Mapped",
        items: [
          "NIST CSF Detect and Respond functions",
          "NIST 800-53 AU and IR control families",
          "SOC 2 monitoring and incident response criteria",
          "CIS Control 8: Audit Log Management"
        ]
      },
      {
        title: "Outputs Created",
        items: [
          "Risk-prioritized alert queue",
          "IOC enrichment summaries",
          "MITRE ATT&CK technique mapping sheet",
          "Incident evidence documentation templates",
          "Escalation status tracker"
        ]
      },
      {
        title: "Risk/Compliance Value",
        items: [
          "Ensures high-criticality assets receive first review during alert surges",
          "Creates traceable incident evidence that supports audit and post-incident review",
          "Connects detection activity to governance reporting on monitoring effectiveness"
        ]
      },
      {
        title: "Interview Talking Points",
        items: [
          "How to triage alerts when volume exceeds analyst capacity",
          "Why asset context changes escalation decisions",
          "How MITRE mapping improves stakeholder communication",
          "What makes incident documentation audit-ready versus operational notes"
        ]
      }
    ]
  }
];

export const evidenceChecklist = [
  "Screenshot evidence",
  "Ticket ID",
  "Control owner",
  "Date collected",
  "System export",
  "Reviewer notes",
  "Exception status",
  "Closure evidence"
];

export const accessReviewTests = [
  "Population validation",
  "Privileged access review",
  "Terminated-user access",
  "Provisioning evidence",
  "De-provisioning evidence",
  "Segregation of duties"
];

export const remediationColumns = [
  "Finding",
  "Risk rating",
  "Owner",
  "Due date",
  "Status",
  "Compensating control",
  "Closure evidence"
];

export const riskMatrix = [
  ["medium", "high", "high", "critical", "critical"],
  ["low", "medium", "high", "high", "critical"],
  ["low", "low", "medium", "high", "high"],
  ["low", "low", "low", "medium", "high"],
  ["low", "low", "low", "low", "medium"]
];

export const artifacts = [
  {
    title: "Resume",
    href: "/Mehul_Nikumbh_Resume.pdf",
    icon: FileCheck2,
    description: "One-page summary of GRC and cloud security experience, certifications, and target roles.",
    fileType: "PDF",
    isPlaceholder: false
  },
  {
    title: "AccessGuard Project Guide",
    href: "/AccessGuard_Project_Guide.pdf",
    icon: KeyRound,
    description: "Walkthrough of the simulated access review workflow, test cases, and workbook structure.",
    fileType: "PDF",
    isPlaceholder: true
  },
  {
    title: "Audit Evidence Tracker Sample",
    href: "/Audit_Evidence_Tracker_Sample.xlsx",
    icon: FileSpreadsheet,
    description: "Excel template for control evidence collection, owner assignment, and gap tracking.",
    fileType: "XLSX",
    isPlaceholder: true
  },
  {
    title: "Risk Register Sample",
    href: "/Risk_Register_Sample.xlsx",
    icon: Gauge,
    description: "Sample risk register with likelihood, impact, residual risk, and remediation fields.",
    fileType: "XLSX",
    isPlaceholder: true
  },
  {
    title: "Access Review Workbook Sample",
    href: "/Access_Review_Workbook_Sample.xlsx",
    icon: ClipboardCheck,
    description: "Multi-tab workbook for population testing, exceptions, and remediation tracking.",
    fileType: "XLSX",
    isPlaceholder: true
  }
];
