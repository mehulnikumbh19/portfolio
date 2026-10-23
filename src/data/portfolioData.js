import {
  AlertTriangle,
  Award,
  BookOpen,
  ClipboardCheck,
  Cloud,
  FileCheck2,
  FileSpreadsheet,
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
  role: "IT Governance & GRC Analyst",
  heroHeadline:
    "ITGC control testing, third-party risk, and audit-ready evidence mapped to NIST, ISO 27001, and SOC 2.",
  summary:
    "1LOD GRC analyst across ITGC control testing, TPRM and vendor SOC 2 reviews, IAM controls, risk registers, and audit and regulatory evidence packages.",
  education:
    "M.S. Information Systems (Cybersecurity) @ California State University, Long Beach, May 2026",
  availability:
    "Open to IT Governance, GRC, IT Risk, and IT Audit opportunities.",
  email: "mnikumbh19@gmail.com",
  location: "Long Beach, CA",
  linkedin: "https://www.linkedin.com/in/mehulnikumbh/",
  github: "https://github.com/mehulnikumbh19",
  resume: `${import.meta.env.BASE_URL}Mehul_Nikumbh_Resume.pdf`
};

export const terminalLines = [
  "testing itgc controls :: iam / config / endpoint",
  "reviewing vendor soc 2 reports + cuecs",
  "mapping nist 800-53 + cis controls to evidence",
  "updating 1lod risk register :: owners / due dates",
  "status :: open to it governance & grc roles"
];

export const tickerItems = [
  "ITGC",
  "TPRM",
  "NIST CSF",
  "NIST SP 800-53",
  "NIST SP 800-30",
  "NIST RMF",
  "ISO 27001",
  "ISO 27005",
  "SOC 2",
  "CIS Controls",
  "PCI DSS",
  "GDPR",
  "HIPAA",
  "COBIT",
  "ServiceNow GRC",
  "AuditBoard",
  "MetricStream",
  "AWS",
  "Azure",
  "Wazuh SIEM",
  "AWS Cloud Practitioner",
  "Microsoft SC-900",
  "Microsoft AZ-900",
  "Google Cybersecurity"
];

export const heroSkills = [
  { label: "ITGC Control Testing", icon: ClipboardCheck },
  { label: "Third-Party Risk (TPRM)", icon: UsersRound },
  { label: "SOC 2 & CUEC Reviews", icon: FileCheck2 },
  { label: "IAM Controls", icon: KeyRound },
  { label: "Risk Registers & CAPs", icon: Gauge },
  { label: "NIST . ISO 27001 . CIS", icon: ShieldCheck }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

// Rendered neofetch-style in the About section: "key: value" lines.
export const aboutSpecs = [
  { key: "role:", value: "IT Governance & GRC Analyst" },
  { key: "last:", value: "GRC Intern @ The Cheesecake Factory" },
  { key: "focus:", value: "ITGC . TPRM . 1LOD Risk . IAM" },
  { key: "frameworks:", value: "NIST CSF/800-53 . ISO 27001 . SOC 2 . CIS" },
  { key: "tooling:", value: "ServiceNow GRC . AuditBoard . Wazuh" },
  { key: "cloud:", value: "AWS (CloudTrail, IAM) . Azure" },
  { key: "certs:", value: "AWS CCP . SC-900 . AZ-900 . Google Cyber" },
  { key: "degree:", value: "M.S. Info Systems (Cybersecurity), CSULB" },
  { key: "base:", value: "Long Beach, CA" }
];

export const problems = [
  {
    title: "ITGC & Control Evidence Gaps",
    icon: ClipboardCheck,
    description:
      "Firewall, SIEM, endpoint, and IAM controls tested; evidence validated and gaps rated, owned, and tracked."
  },
  {
    title: "Third-Party & Vendor Risk Blind Spots",
    icon: UsersRound,
    description:
      "Vendor SOC 2 and ISO 27001 reviews, CUEC mapping, OAuth/SSO/MFA checks, and annual renewal follow-up."
  },
  {
    title: "Access Control Failures",
    icon: KeyRound,
    description:
      "Privileged access, provisioning/de-provisioning, and terminated-user reviews tested as IAM ITGCs."
  },
  {
    title: "Audit & Regulatory Requests",
    icon: FileCheck2,
    description:
      "Evidence packages of config exports, access logs, test results, and closure docs ready for auditors."
  },
  {
    title: "Risk Register & Remediation Drift",
    icon: Gauge,
    description:
      "1LOD risk registers with likelihood/impact ratings, risk acceptance records, and trackers that close findings."
  },
  {
    title: "Configuration Baseline Deviations",
    icon: Layers3,
    description:
      "Systems benchmarked against CIS/NIST hardening baselines; deviations cataloged with owners and target dates."
  }
];

export const skillGroups = [
  {
    title: "GRC & Audit",
    icon: ShieldCheck,
    skills: [
      "IT Governance",
      "IT Policy Management",
      "ITGC",
      "1LOD Risk Management",
      "Control Testing",
      "Control Assessment",
      "Evidence Collection",
      "Gap Analysis",
      "Risk Registers",
      "Risk Acceptance Documentation",
      "IT Asset Management (ITAM)",
      "CMDB",
      "TPRM",
      "Vendor SOC Reviews",
      "CUEC",
      "IAM",
      "Audit & Regulatory Support",
      "Remediation Tracking",
      "Continuous Monitoring",
      "KRIs",
      "SoD",
      "CAPs"
    ]
  },
  {
    title: "Frameworks & Standards",
    icon: BookOpen,
    skills: [
      "NIST CSF",
      "NIST RMF (800-37)",
      "NIST SP 800-30",
      "NIST SP 800-53",
      "CIS Controls / Benchmarks",
      "ISO 27001 / 27002",
      "ISO 27005",
      "SOC 2 Type I / II",
      "Trust Services Criteria",
      "PCI DSS",
      "GDPR",
      "HIPAA",
      "COBIT",
      "CCM"
    ]
  },
  {
    title: "GRC Platforms & Office",
    icon: FileSpreadsheet,
    skills: [
      "ServiceNow GRC (IRM)",
      "AuditBoard",
      "MetricStream",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint"
    ]
  },
  {
    title: "Technical",
    icon: Cloud,
    skills: [
      "AWS CloudTrail",
      "AWS S3",
      "AWS IAM",
      "boto3",
      "Azure",
      "Python",
      "pandas",
      "SQL",
      "Wazuh SIEM",
      "OpenVAS",
      "Nmap",
      "CVSS"
    ]
  }
];

export const experience = [
  {
    title: "GRC / Cybersecurity Analyst Intern",
    company: "The Cheesecake Factory",
    type: "Internship",
    dates: "Jun 2025 - Aug 2025",
    location: "CA, USA",
    tags: ["TPRM", "SOC 2", "CUEC", "ITGC", "CIS Benchmarks", "IAM", "KRIs"],
    bullets: [
      "Executed 1LOD Third-Party Risk Management (TPRM) reviews on 6+ SaaS vendors, evaluating SOC 2 reports, OAuth scopes, SSO/MFA, and IAM against vendor risk criteria; documented CUECs, compensating controls, and evidence obligations for vendor owners.",
      "Performed 1LOD ITGC control testing on firewall, SIEM, and endpoint configurations against CIS Benchmarks and internal baselines; validated control evidence and cataloged 12 control gaps with severity ratings, owners, remediation timelines, and risk acceptance status.",
      "Coordinated IT security communications for stakeholders on control gaps, remediation status, and evolving risk trends; translated technical findings into audit and regulatory evidence packages for internal reviewers.",
      "Executed an end-to-end phishing simulation across departments and analyzed user-reported emails; generated KRIs from click-through trends, report rates, and response gaps."
    ]
  },
  {
    title: "Security Analyst",
    company: "VESIT (University of Mumbai)",
    dates: "May 2023 - Aug 2024",
    location: "Mumbai, India",
    tags: ["NIST CSF", "ISO 27001", "CIS Controls", "ITGC", "Wazuh SIEM", "OpenVAS", "SOC 2"],
    bullets: [
      "Performed security risk assessments and control gap reviews across applications, systems, and processes mapped to NIST CSF, ISO 27001, and CIS Controls; documented findings with risk ratings and owners.",
      "Maintained ITGC control-evidence completeness across a 200+ endpoint asset inventory using Wazuh SIEM and Windows Event Logs on a quarterly audit-readiness cycle.",
      "Evaluated vulnerability reports from OpenVAS and Nmap to support evidence collection and validated findings against CIS Benchmarks.",
      "Conducted vendor SOC 2 and ISO 27001 certification reviews, evaluating CUECs and vendor risk posture; managed annual renewal and follow-up with vendor owners.",
      "Tested IAM ITGC controls (privileged access, provisioning/de-provisioning, terminated-user review) and maintained the 1LOD risk register and risk acceptance documentation."
    ]
  },
  {
    title: "Security Operations Analyst",
    company: "Telenetworks Technologies",
    dates: "Dec 2022 - May 2023",
    location: "India",
    tags: ["ITGC", "CIS / NIST Hardening", "Log Review", "Remediation Tracking", "Audit Evidence"],
    bullets: [
      "Reviewed baseline configurations for 25+ systems against ITGC and CIS/NIST hardening standards; cataloged 8 deviations with risk impact, owners, and target remediation dates.",
      "Examined 200+ security event logs across endpoint and network to identify control deviations and evidence requiring follow-up.",
      "Maintained remediation trackers for configuration anomalies, open findings, and control gaps; reduced unresolved findings by 35%.",
      "Prepared audit and regulatory evidence packages for 4 compliance assessments supporting external auditor and regulator information requests."
    ]
  }
];

export const metrics = [
  { label: "SaaS Vendors Risk-Reviewed (TPRM)", value: 6, suffix: "+", icon: UsersRound },
  { label: "Endpoints in Audit-Ready Inventory", value: 200, suffix: "+", icon: ShieldCheck },
  { label: "NIST 800-53 & CIS Controls Mapped", value: 120, suffix: "+", icon: BookOpen },
  { label: "Fewer Unresolved Findings", value: 35, suffix: "%", icon: ClipboardCheck }
];

export const projects = [
  {
    name: "BASTION",
    tagline: "Control mapping & gap analysis workbook",
    icon: ShieldHalf,
    description:
      "Python/pandas workbook that maps NIST SP 800-53 and CIS Controls to policies, evidence sources, and control owners, then runs a NIST SP 800-30 gap analysis.",
    highlights: [
      "120+ NIST SP 800-53 and CIS Controls mapped to policies, evidence, and owners",
      "NIST SP 800-30 gap analysis across 5 ITGC control families",
      "28 evidence gaps converted into corrective action plans with closure tracking"
    ],
    tags: ["Python", "pandas", "NIST SP 800-53", "NIST SP 800-30", "CIS Controls"],
    links: [
      { label: "Live demo", href: "https://bastion-grc.vercel.app/" },
      { label: "GitHub", href: "https://github.com/mehulnikumbh19/bastion-grc" }
    ]
  },
  {
    name: "NIMBUS",
    tagline: "AWS identity governance monitor",
    icon: Cloud,
    description:
      "Python pipeline that parses AWS CloudTrail logs from S3 with boto3 to monitor identity governance controls and surface exceptions for analyst review.",
    highlights: [
      "Flags root usage, MFA-less logins, and IAM policy changes",
      "Findings mapped to the CIS AWS Foundations Benchmark",
      "scikit-learn Isolation Forest surfaces anomalous events for review"
    ],
    tags: ["Python", "boto3", "AWS CloudTrail", "S3", "IAM", "CIS AWS Benchmark", "scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/mehulnikumbh19/nimbus" }]
  }
];

export const frameworks = [
  {
    name: "NIST CSF",
    use: "Risk assessment structure",
    work: "Security risk assessments and control gap reviews across applications, systems, and processes."
  },
  {
    name: "NIST 800-53",
    use: "Control catalog",
    work: "120+ controls mapped to policies, evidence sources, and control owners in BASTION."
  },
  {
    name: "NIST 800-30",
    use: "Gap & risk analysis",
    work: "Gap analysis across 5 ITGC control families; 28 evidence gaps turned into CAPs."
  },
  {
    name: "ISO 27001",
    use: "ISMS controls",
    work: "Control gap reviews and vendor ISO 27001 certification reviews with renewal follow-up."
  },
  {
    name: "SOC 2",
    use: "Vendor assurance",
    work: "Vendor SOC 2 report reviews with CUECs, compensating controls, and evidence obligations."
  },
  {
    name: "CIS Controls",
    use: "Hardening baseline",
    work: "Firewall, SIEM, endpoint, and system configs tested; CIS AWS Benchmark mapping in NIMBUS."
  }
];

export const education = {
  icon: GraduationCap,
  entries: [
    {
      school: "California State University, Long Beach",
      dates: "Aug 2024 - May 2026",
      degree: "Master of Science, Information Systems (Cybersecurity)",
      gpa: "3.44",
      location: "Long Beach, CA"
    },
    {
      school: "University of Mumbai",
      dates: "Feb 2020 - May 2024",
      degree: "Bachelor of Engineering, Electronics (Honors: Cybersecurity)",
      gpa: "3.8",
      location: "Mumbai, India"
    }
  ]
};

export const certifications = {
  icon: Award,
  items: [
    "AWS Certified Cloud Practitioner",
    "Microsoft SC-900 (Security, Compliance, and Identity Fundamentals)",
    "Microsoft AZ-900 (Azure Fundamentals)",
    "Google Cybersecurity Professional"
  ]
};

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
