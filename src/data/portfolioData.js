import {
  AlertTriangle,
  Award,
  BarChart3,
  BookOpen,
  Bot,
  ClipboardCheck,
  Cloud,
  Database,
  FileCheck2,
  FileSpreadsheet,
  Fingerprint,
  Gauge,
  GraduationCap,
  KeyRound,
  Layers3,
  Radar,
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
    "GRC and Cloud Security Analyst with 3+ years of experience specializing in ITGC, control testing, cloud risk assessments, audit readiness, and security compliance across AWS, Azure, and GCP environments. Strong expertise in ISO 27001, NIST CSF, SOC 2, IAM, CSPM, ServiceNow IRM, SAP GRC, and cloud security governance, with hands-on experience in risk remediation, access reviews, and third-party risk.",
  education:
    "M.S. Information Systems (Cybersecurity) @ California State University, Long Beach, May 2026",
  availability:
    "Open to Cloud Security, GRC, IT Risk, and Security Compliance opportunities.",
  email: "mnikumbh19@gmail.com",
  location: "California, USA",
  linkedin: "https://www.linkedin.com/in/mehulnikumbh/",
  github: "https://github.com/mehulnikumbh19",
  resume: `${import.meta.env.BASE_URL}Mehul_Nikumbh_Resume.pdf`
};

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
  { label: "Focus Areas", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const aboutCards = [
  {
    title: "Cloud & Control Evidence",
    icon: Database,
    text: "CSPM findings, cloud configuration exports, IAM assignments, audit logs, and control documentation across AWS, Azure, and GCP"
  },
  {
    title: "Risk Translation",
    icon: BarChart3,
    text: "Likelihood, impact, residual risk, control gaps, and remediation ownership across cloud and ITGC controls"
  },
  {
    title: "Audit Readiness",
    icon: FileCheck2,
    text: "ISO 27001 SoA evidence, ServiceNow IRM tracking, control mapping, and stakeholder-ready reporting"
  },
  {
    title: "Certifications",
    icon: Award,
    text: "AWS Certified Cloud Practitioner, Microsoft SC-900, Google Cybersecurity Professional, Microsoft AZ-900"
  }
];

export const problems = [
  {
    title: "Cloud Misconfiguration & CSPM Gaps",
    icon: AlertTriangle,
    description:
      "Triaging CSPM findings across AWS, Azure, and GCP, validating affected configurations, and closing control gaps with clear evidence and ownership."
  },
  {
    title: "Cloud IAM & Access Governance",
    icon: KeyRound,
    description:
      "Reviewing AWS IAM and Microsoft Entra ID assignments, orphaned identities, and standing privileges to support periodic access certification."
  },
  {
    title: "Insecure IaC & Container Deployments",
    icon: Layers3,
    description:
      "Reviewing Terraform pull requests and Kubernetes configurations against guardrail policies like Azure Policy, AWS SCPs, and OPA Gatekeeper."
  },
  {
    title: "ITGC & Audit Evidence Gaps",
    icon: FileCheck2,
    description:
      "Maintaining ISO 27001 SoA evidence, executing ITGC control testing, and tracking remediation to closure with control owners."
  },
  {
    title: "Third-Party & Vendor Risk Blind Spots",
    icon: UsersRound,
    description:
      "Assessing SOC 2 Type II reports, ISO 27001 certifications, and client due-diligence questionnaires to support vendor security decisions."
  },
  {
    title: "Emerging AI/LLM Governance Gaps",
    icon: Bot,
    description:
      "Maintaining AI/LLM use-case inventories and running prompt-injection and guardrail testing mapped to NIST AI RMF, ISO 42001, and the EU AI Act."
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
      "Triage Cloud Security Posture Management (CSPM) findings across AWS, Azure, and GCP environments, validating affected configurations, documenting control gaps, and tracking remediation through closure in coordination with control owners.",
      "Review AWS Security Group and Azure Network Security Group (NSG) rule sets, cloud segmentation, and micro-segmentation configurations to identify control deviations and validate encryption controls, including AWS KMS, Azure Key Vault, key-rotation, TLS, and data-at-rest encryption for SOC 1, SOC 2, and regulatory evidence collection.",
      "Perform security reviews of Terraform pull requests, triage container and Kubernetes security findings (misconfigured pods, overly permissive RBAC, exposed dashboards), and assess guardrail configurations including Azure Policy, AWS SCPs, and OPA Gatekeeper policies.",
      "Review AWS IAM and Microsoft Entra ID access assignments, including service principals, service accounts, orphaned identities, and excessive/standing privileges, supporting periodic cloud access certification campaigns and access-review processes.",
      "Support Aladdin client security due-diligence questionnaires, map cloud configurations to applicable security controls, and assist in cloud audit log collection (AWS CloudTrail, Azure Monitor, GCP audit logs) for incident timeline reconstruction and regulatory control testing.",
      "Maintain AI/LLM use-case inventory, support AI risk-intake assessments, verify AI data-flow and data-minimization practices, execute prompt-injection and AI guardrail testing based on predefined test plans, and map controls against NIST AI RMF, ISO 42001, and EU AI Act requirements."
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
      "Maintained ISO 27001 security documentation and Statement of Applicability (SoA) evidence for cloud and security controls, supporting audit readiness and compliance reviews.",
      "Executed assigned cloud security and ITGC control testing by collecting evidence, reviewing configurations, documenting control observations, and tracking remediation activities with control owners.",
      "Administered ServiceNow IRM and CMDB activities involving cloud-related asset inventory, classification, control mapping, and security documentation while coordinating quarterly access recertification activities.",
      "Reviewed SAP GRC Access Control results, Microsoft Entra access, segregation-of-duties (SoD) conflicts, mitigating controls, and firefighter access as part of established identity and access governance processes.",
      "Managed cloud-security risk-register updates and assisted with system and project risk assessments, security exceptions, compensating controls, risk treatment, and remediation tracking.",
      "Assessed third-party and supplier security documentation, including SOC 2 Type II reports and ISO 27001 certifications, supporting cloud vendor security due diligence and compliance reviews.",
      "Coordinated GDPR, DPDP Act, and CERT-In compliance activities while preparing cloud-security KPI reporting through Power BI and Excel, and assisting with ISO 27001 internal and surveillance audit activities."
    ]
  }
];

export const metrics = [
  { label: "Years GRC & Cloud Security Experience", value: 3, suffix: "+", icon: ShieldCheck },
  { label: "Cloud Platforms (AWS / Azure / GCP)", value: 3, suffix: "", icon: Cloud },
  { label: "Compliance Frameworks & Standards", value: 8, suffix: "", icon: BookOpen },
  { label: "Industry Certifications", value: 4, suffix: "", icon: GraduationCap }
];

export const projects = [
  {
    name: "CSPM",
    icon: Radar,
    subtitle: "Multi-Cloud Posture & Control Gap Triage",
    description:
      "Continuous triage of Cloud Security Posture Management findings across AWS, Azure, and GCP, validating misconfigurations, documenting control gaps, and driving remediation through closure with control owners.",
    bullets: [
      "Triage CSPM findings across AWS, Azure, and GCP, validating affected configurations and documenting control gaps.",
      "Review AWS Security Groups, Azure NSG rule sets, and micro-segmentation configurations for control deviations.",
      "Validate encryption controls, including AWS KMS, Azure Key Vault, key rotation, TLS, and data-at-rest encryption, for SOC 1, SOC 2, and regulatory evidence."
    ],
    tags: ["CSPM", "AWS", "Azure", "GCP", "AWS KMS", "Azure Key Vault"],
    links: {}
  },
  {
    name: "IaC Guardrails",
    icon: Layers3,
    subtitle: "Terraform, Kubernetes & Policy Enforcement",
    description:
      "Security review of Terraform pull requests and Kubernetes workloads, assessing guardrail policy configurations that keep infrastructure-as-code changes within approved security baselines.",
    bullets: [
      "Perform security reviews of Terraform pull requests before infrastructure changes are promoted.",
      "Triage container and Kubernetes security findings, including misconfigured pods, overly permissive RBAC, and exposed dashboards.",
      "Assess guardrail configurations including Azure Policy, AWS SCPs, and OPA Gatekeeper policies."
    ],
    tags: ["Terraform", "Kubernetes", "Azure Policy", "AWS SCPs", "OPA Gatekeeper"],
    links: {}
  },
  {
    name: "Cloud IAM",
    icon: KeyRound,
    subtitle: "AWS IAM, Entra ID & SAP GRC Access Governance",
    description:
      "End-to-end identity governance spanning AWS IAM, Microsoft Entra ID, and SAP GRC Access Control, covering periodic access certification, segregation-of-duties review, and privileged access oversight.",
    bullets: [
      "Review AWS IAM and Microsoft Entra ID access assignments, including service principals, orphaned identities, and standing privileges.",
      "Review SAP GRC Access Control results, segregation-of-duties conflicts, mitigating controls, and firefighter access.",
      "Support periodic cloud access certification campaigns and quarterly access recertification activities."
    ],
    tags: ["AWS IAM", "Microsoft Entra ID", "SAP GRC", "SoD", "Access Certification"],
    links: {}
  },
  {
    name: "AI Governance",
    icon: Bot,
    subtitle: "AI/LLM Use-Case Inventory & Guardrail Testing",
    description:
      "Maintains the enterprise AI/LLM use-case inventory, executes AI risk-intake assessments, and runs prompt-injection and guardrail testing mapped to emerging AI governance frameworks.",
    bullets: [
      "Maintain AI/LLM use-case inventory and support AI risk-intake assessments.",
      "Verify AI data-flow and data-minimization practices, and execute prompt-injection and AI guardrail testing based on predefined test plans.",
      "Map controls against NIST AI RMF, ISO 42001, and EU AI Act requirements."
    ],
    tags: ["NIST AI RMF", "ISO 42001", "EU AI Act", "Prompt-Injection Testing", "AI Risk"],
    links: {}
  },
  {
    name: "Audit Readiness",
    icon: FileCheck2,
    subtitle: "ISO 27001, ITGC & Evidence Management",
    description:
      "Maintained ISO 27001 documentation and Statement of Applicability evidence while executing ITGC control testing, evidence collection, and remediation tracking with control owners.",
    bullets: [
      "Maintained ISO 27001 security documentation and SoA evidence for cloud and security controls, supporting audit readiness.",
      "Executed cloud security and ITGC control testing by collecting evidence, reviewing configurations, and documenting observations.",
      "Administered ServiceNow IRM and CMDB activities, including asset inventory, classification, and control mapping."
    ],
    tags: ["ISO 27001", "ITGC", "ServiceNow IRM", "ServiceNow CMDB", "Audit Readiness"],
    links: {}
  },
  {
    name: "Third-Party Risk",
    icon: UsersRound,
    subtitle: "Vendor Due Diligence & Regulatory Reporting",
    description:
      "Supported client and vendor security due-diligence reviews, cloud-security risk-register updates, and GDPR, DPDP Act, and CERT-In compliance reporting through Power BI and Excel.",
    bullets: [
      "Support client security due-diligence questionnaires and map cloud configurations to applicable security controls.",
      "Assessed third-party and supplier security documentation, including SOC 2 Type II reports and ISO 27001 certifications.",
      "Coordinated GDPR, DPDP Act, and CERT-In compliance activities while preparing cloud-security KPI reporting through Power BI and Excel."
    ],
    tags: ["Third-Party Risk", "GDPR", "DPDP Act", "CERT-In", "Power BI", "Risk Register"],
    links: {}
  }
];

export const frameworks = [
  {
    name: "ISO 27001",
    use: "Information security management system audit readiness",
    work: "Maintained security documentation and Statement of Applicability (SoA) evidence; supported internal and surveillance audits.",
    examples: "SoA evidence, Annex A controls, surveillance audits"
  },
  {
    name: "NIST CSF",
    use: "Cybersecurity governance and risk communication",
    work: "Applied Identify, Protect, Detect, Respond, and Recover functions to structure cloud and cybersecurity risk assessments.",
    examples: "Govern, Identify, Protect, Detect, Respond, Recover"
  },
  {
    name: "SOC 2",
    use: "Trust services evidence for cloud and vendor security",
    work: "Validated encryption, access, and monitoring controls for SOC 1 and SOC 2 evidence collection; reviewed vendor SOC 2 Type II reports.",
    examples: "Security, availability, confidentiality criteria"
  },
  {
    name: "CIS Controls",
    use: "Practical security hardening baseline",
    work: "Benchmarked cloud and system configurations against CIS Controls during control testing and evidence review.",
    examples: "Secure configuration, access control, logging"
  },
  {
    name: "GDPR",
    use: "EU data protection and privacy compliance",
    work: "Coordinated GDPR compliance activities alongside cloud security and data-handling reviews.",
    examples: "Data protection, cross-border transfer, privacy rights"
  },
  {
    name: "DPDP Act",
    use: "India Digital Personal Data Protection compliance",
    work: "Coordinated DPDP Act compliance activities as part of regional data-protection obligations.",
    examples: "Consent management, data fiduciary duties"
  },
  {
    name: "CERT-In",
    use: "Indian cybersecurity incident reporting mandate",
    work: "Supported CERT-In compliance activities and incident-reporting readiness.",
    examples: "Incident reporting, log retention"
  },
  {
    name: "IEC 62443",
    use: "Industrial and operational technology security",
    work: "Applied IEC 62443 security concepts as part of broader compliance framework coverage for operational technology environments.",
    examples: "Zones and conduits, OT security levels"
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
