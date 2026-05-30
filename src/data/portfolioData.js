import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Database,
  FileCheck2,
  FileSpreadsheet,
  Fingerprint,
  Gauge,
  GitBranch,
  GraduationCap,
  KeyRound,
  Layers3,
  Mail,
  Radar,
  ShieldCheck,
  ShieldHalf,
  Siren,
  Target,
  TimerReset,
  UsersRound
} from "lucide-react";

// Icons are kept in the data layer so sections can stay data-driven.

export const profile = {
  name: "Mehul Nikumbh",
  role: "Cybersecurity GRC â€¢ IT Risk â€¢ Security Compliance",
  heroHeadline: "Cybersecurity evidence turned into audit-ready risk decisions.",
  summary:
    "I build practical cybersecurity and GRC workflows that turn technical security evidence into risk-based decisions. My work focuses on control assessments, audit evidence tracking, vulnerability risk prioritization, IAM governance, remediation reporting, and security compliance documentation.",
  education:
    "M.S. Information Systems, Cybersecurity Concentration @ California State University, Long Beach",
  availability:
    "Available for GRC, IT Risk, Security Compliance, IT Audit, and Information Security roles.",
  email: "mnikumbh19@gmail.com",
  location: "United States",
  linkedin: "https://www.linkedin.com/in/mehulnikumbh/",
  github: "https://github.com/mehulnikumbh19",
  resume: "/Mehul_Nikumbh_Resume.pdf",
  grcPortfolio: "/Mehul_Nikumbh_GRC_Portfolio.pdf",
  accessGuardGuide: "/AccessGuard_Project_Guide.pdf"
};

export const heroSkills = [
  "Control Testing",
  "Risk Assessment",
  "Audit Readiness",
  "IAM Governance",
  "Vulnerability Risk",
  "Evidence Tracking"
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "GRC Lab", href: "#grc-lab" },
  { label: "Contact", href: "#contact" }
];

export const heroBadges = [
  "Open to GRC & IT Risk Roles",
  "Audit Readiness",
  "Risk Assessment",
  "Control Testing",
  "Security Compliance"
];

export const controlPanelMetrics = [
  { label: "controls mapped", value: 120, suffix: "+", icon: ShieldCheck },
  { label: "CVEs analyzed", value: 2000, suffix: "+", icon: AlertTriangle },
  { label: "SIEM alerts processed", value: 500, suffix: "+", icon: Radar },
  { label: "evidence gaps identified", value: 28, suffix: "", icon: FileCheck2 },
  { label: "assets reviewed", value: 150, suffix: "", icon: Database },
  { label: "control families assessed", value: 5, suffix: "", icon: Layers3 }
];

export const terminalLines = [
  "initializing grc_control_room...",
  "loading audit evidence...",
  "mapping controls to risk...",
  "status: open to GRC and IT Risk roles"
];

export const recruiterSnapshot = [
  {
    title: "Target Roles",
    icon: Target,
    text: "GRC Analyst, IT Risk Analyst, Security Compliance Analyst, Cybersecurity Compliance Analyst, Security Control Assessor"
  },
  {
    title: "Core Strength",
    icon: GitBranch,
    text: "Translating technical findings into audit-ready risk narratives"
  },
  {
    title: "Framework Focus",
    icon: ClipboardCheck,
    text: "NIST CSF, NIST 800-53, ISO 27001, SOC 2, SOX ITGC, PCI DSS, CIS Controls"
  },
  {
    title: "Practical Edge",
    icon: Gauge,
    text: "Security operations foundation plus hands-on control evidence and risk tracking projects, bridging GRC Analyst, IT Auditor, and Information Security Analyst workflows"
  }
];

export const aboutCards = [
  {
    title: "Technical Evidence",
    icon: Database,
    text: "SIEM, endpoint, vulnerability, access, configuration, and ticket evidence"
  },
  {
    title: "Risk Translation",
    icon: BarChart3,
    text: "Likelihood, impact, residual risk, control gaps, remediation ownership"
  },
  {
    title: "Audit Readiness",
    icon: FileSpreadsheet,
    text: "Evidence tracking, control mapping, exception logs, stakeholder reporting"
  }
];

export const problems = [
  {
    title: "Messy Audit Evidence",
    icon: FileCheck2,
    description:
      "Organizing screenshots, tickets, access reports, vulnerability exports, configuration evidence, and policy documents into audit-ready trackers."
  },
  {
    title: "Access Review Gaps",
    icon: KeyRound,
    description:
      "Testing user populations, privileged access, terminated-user access, provisioning/de-provisioning evidence, and SoD conflicts."
  },
  {
    title: "Unprioritized Vulnerability Backlogs",
    icon: AlertTriangle,
    description:
      "Converting CVEs into risk-ranked remediation queues using CVSS, exploitability, asset criticality, business impact, SLA status, and ownership."
  },
  {
    title: "Control Mapping Confusion",
    icon: Layers3,
    description:
      "Mapping technical evidence and policies to NIST, ISO 27001, SOC 2, SOX ITGC, PCI DSS, and CIS Controls."
  },
  {
    title: "Weak Stakeholder Reporting",
    icon: UsersRound,
    description:
      "Turning technical findings into business-risk narratives, control deficiencies, remediation actions, and leadership-ready summaries."
  },
  {
    title: "Remediation Drift",
    icon: TimerReset,
    description:
      "Tracking owners, due dates, compensating controls, exceptions, closure evidence, and open risk status."
  }
];

export const workflowSteps = [
  {
    title: "Collect Evidence",
    icon: Database,
    examples:
      "screenshots, tickets, access exports, vulnerability scans, SIEM alerts, policies, system configs"
  },
  {
    title: "Test Controls",
    icon: ClipboardCheck,
    examples:
      "access review testing, control mapping, configuration review, vulnerability validation, ticket review"
  },
  {
    title: "Identify Gaps",
    icon: AlertTriangle,
    examples:
      "missing evidence, unauthorized access, overdue remediation, weak MFA, orphan accounts, expired exceptions"
  },
  {
    title: "Rate Risk",
    icon: Gauge,
    examples:
      "likelihood, impact, severity, asset criticality, business exposure, compensating controls"
  },
  {
    title: "Track Remediation",
    icon: TimerReset,
    examples: "owner, SLA, due date, status, closure evidence, exception approval"
  },
  {
    title: "Report Clearly",
    icon: BarChart3,
    examples:
      "risk dashboards, stakeholder summaries, audit evidence trackers, executive summaries"
  }
];

export const skillGroups = [
  {
    title: "Governance & Compliance",
    icon: ShieldCheck,
    skills: [
      "GRC",
      "IT Risk",
      "Security Compliance",
      "Audit Readiness",
      "Control Testing",
      "Remediation Tracking",
      "Risk Register",
      "Compliance Gap Analysis",
      "Evidence Collection",
      "Stakeholder Reporting",
      "Control Effectiveness",
      "Control Deficiency Management"
    ]
  },
  {
    title: "Frameworks",
    icon: BookOpen,
    skills: [
      "NIST CSF",
      "NIST 800-53",
      "ISO 27001",
      "SOC 2",
      "SOX ITGC",
      "PCI DSS",
      "CIS Controls",
      "CIS Benchmarks",
      "OWASP Top 10",
      "CWE"
    ]
  },
  {
    title: "IAM & Risk",
    icon: Fingerprint,
    skills: [
      "User Access Reviews",
      "Provisioning",
      "De-provisioning",
      "Least Privilege",
      "Privileged Access Review",
      "Segregation of Duties",
      "Joiner/Mover/Leaver Testing",
      "Third-Party Risk",
      "Vendor Risk",
      "Vulnerability Risk Management"
    ]
  },
  {
    title: "Security Tools",
    icon: Radar,
    skills: [
      "Splunk",
      "Microsoft Sentinel",
      "CrowdStrike Falcon",
      "Wazuh",
      "OpenVAS",
      "Nmap",
      "Wireshark",
      "Active Directory",
      "Sysmon",
      "Windows Event Logs",
      "AWS Security Fundamentals"
    ]
  },
  {
    title: "Data & Reporting",
    icon: FileSpreadsheet,
    skills: [
      "Excel",
      "Pivot Tables",
      "XLOOKUP",
      "SQL",
      "Python",
      "pandas",
      "KPI/KRI Reporting",
      "Dashboards",
      "Evidence Trackers",
      "Risk Matrices",
      "Remediation Trackers"
    ]
  }
];

export const experience = [
  {
    title: "Information Security Analyst",
    company: "Vivekanand Education Society's Institute Of Technology",
    type: "Full-time",
    dates: "May 2023 - Aug 2024",
    location: "Mumbai, Maharashtra, India",
    tags: ["GRC", "Risk Assessment", "Audit Readiness", "Access Review", "Vendor Risk", "Excel Reporting"],
    bullets: [
      "Performed security risk assessments and control gap reviews across applications, systems, and business processes mapped to NIST CSF, ISO 27001, CIS Controls, and internal security policies.",
      "Supported audit readiness by collecting, validating, and organizing control evidence including screenshots, tickets, access reports, configuration exports, vulnerability reports, and policy documents.",
      "Assisted with user access review testing, including user population validation, privileged access checks, provisioning/de-provisioning review, terminated-user access review, and exception documentation.",
      "Maintained risk registers with risk descriptions, likelihood and impact ratings, control gaps, risk owners, remediation due dates, and status updates.",
      "Coordinated with application owners, IT teams, security stakeholders, and management to track remediation plans, compensating controls, and closure evidence.",
      "Reviewed third-party and vendor security documentation such as questionnaires, SOC 2 reports, ISO 27001 certificates, security policies, and data protection controls to identify vendor risk.",
      "Prepared Excel-based dashboards and trackers for open findings, control gaps, remediation status, risk ratings, and audit evidence completion."
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "The Cheesecake Factory",
    type: "Internship",
    dates: "Jun 2025 - Aug 2025",
    location: "Calabasas, California, United States",
    tags: ["Security Operations", "SIEM", "CrowdStrike", "Third-Party Risk", "Audit Evidence"],
    bullets: [
      "Supported security operations and audit-readiness workflows through endpoint and SIEM alert review.",
      "Validated CrowdStrike Falcon detections and documented findings for remediation tracking and evidence collection.",
      "Assisted with third-party application usage review to identify potential data leakage and governance risks.",
      "Reviewed firewall and SIEM configurations to identify visibility gaps, policy concerns, and control improvement opportunities.",
      "Documented technical findings in a structured format to support remediation and security stakeholder review."
    ]
  },
  {
    title: "Security Operations Intern",
    company: "TeleNetworks Technologies Private Limited",
    type: "Internship",
    dates: "Dec 2022 - May 2023",
    location: "Mumbai, Maharashtra, India",
    tags: ["Security Logs", "Control Gaps", "Incident Evidence", "Remediation Tracking"],
    bullets: [
      "Reviewed endpoint and network security logs to identify anomalies, control deviations, and investigation evidence.",
      "Assessed infrastructure configurations against hardening expectations and documented remediation gaps.",
      "Correlated host and network evidence to support incident investigations, root-cause summaries, and severity-based reporting.",
      "Maintained structured remediation tracking for security findings and open control gaps."
    ]
  }
];

export const metrics = [
  { label: "Controls Mapped", value: 120, suffix: "+", icon: ShieldCheck },
  { label: "CVEs Analyzed", value: 2000, suffix: "+", icon: AlertTriangle },
  { label: "SIEM Alerts Processed", value: 500, suffix: "+", icon: Radar },
  { label: "Evidence Gaps Identified", value: 28, suffix: "", icon: FileCheck2 },
  { label: "Assets Reviewed", value: 150, suffix: "", icon: Database },
  { label: "Control Families Assessed", value: 5, suffix: "", icon: Layers3 }
];

export const projects = [
  {
    name: "MANDATE",
    icon: ClipboardCheck,
    subtitle: "Third-Party Security & Data Handling Review Tracker",
    description:
      "A third-party risk and GRC platform for vendor inventories, questionnaire review, evidence gap analysis, residual risk scoring, follow-up tracking, and executive reporting.",
    metrics: [
      "15 simulated vendors",
      "75 questionnaire reviews",
      "30 evidence records",
      "12 risk assessments",
      "20 follow-ups",
      "8 remediations"
    ],
    bullets: [
      "Built a Flask and SQLite-backed TPRM workflow for reviewing vendor security posture, sensitive data handling, and approval readiness.",
      "Automated evidence gap detection for SOC 2, ISO 27001, HIPAA BAA, PCI AOC, and other security artifacts.",
      "Implemented inherent and residual risk scoring using likelihood, impact, data sensitivity, criticality, and compensating controls.",
      "Generated management-ready exports and summaries for open follow-ups, remediation items, expired evidence, and approval exceptions."
    ],
    tags: [
      "Third-Party Risk",
      "Vendor Security",
      "GRC",
      "Evidence Review",
      "Risk Scoring",
      "Executive Reporting"
    ],
    links: {
      live: "https://mandatemehul.vercel.app/",
      github: "https://github.com/mehulnikumbh19/MANDATE"
    }
  },
  {
    name: "SAFEGUARD",
    icon: ShieldCheck,
    subtitle: "Access, Logging & Cloud Control Review Workbook",
    description:
      "A Flask and SQLite security control review workbench that turns spreadsheet-style evidence tracking into an audit-ready workflow for access, logging, encryption, cloud configuration, risk, and remediation reporting.",
    metrics: [
      "12 control domains",
      "8 framework mappings",
      "Evidence aging flags",
      "Risk register exports",
      "Excel and Markdown reports",
      "CSV import templates"
    ],
    bullets: [
      "Built a web-based security assessment workflow for reviewing systems, technical controls, evidence requests, observations, remediation owners, and policy mappings.",
      "Implemented automated risk flags for missing MFA evidence, incomplete production logging evidence, PHI/payment encryption gaps, evidence aging, and overdue remediation.",
      "Created dashboards for assessment readiness, control status, evidence health, risk themes, cloud providers, remediation status, and framework coverage.",
      "Added Excel workbook, Markdown management report, system-level report, filtered systems CSV, risk register CSV, and validated CSV import workflows."
    ],
    tags: [
      "Control Review",
      "Audit Evidence",
      "Access Controls",
      "Logging",
      "Cloud Security",
      "Risk Register",
      "Remediation Tracking",
      "Policy Mapping"
    ],
    links: {
      github: "https://github.com/mehulnikumbh19/SAFEGUARD"
    }
  },
  {
    name: "AccessGuard",
    icon: KeyRound,
    subtitle: "User Access Review & Provisioning Control Testing Workflow",
    description:
      "A simulated access governance project focused on access review testing, joiner/mover/leaver validation, privileged access review, and audit evidence tracking.",
    metrics: [
      "500 simulated employees",
      "517 AD accounts",
      "647 group membership records",
      "25 privileged accounts",
      "179 ticket records",
      "28 exceptions identified",
      "13 Excel workbook tabs"
    ],
    bullets: [
      "Built a SOX ITGC, ISO 27001, and NIST-aligned access governance workflow using simulated HR, Active Directory, privileged account, and ticketing datasets.",
      "Validated user access completeness, terminated-user access, privileged access exceptions, provisioning/de-provisioning evidence, and segregation-of-duties conflicts.",
      "Created Excel-based evidence trackers, remediation dashboards, exception logs, risk-rating matrices, and control-owner status reports.",
      "Mapped findings to least privilege, access governance, privileged access management, and periodic access review objectives."
    ],
    tags: [
      "Access Reviews",
      "IAM Governance",
      "SOX ITGC",
      "Audit Evidence",
      "Provisioning",
      "Least Privilege",
      "Segregation of Duties"
    ],
    links: {
      github: "https://github.com/mehulnikumbh19/AccessGuard",
      caseStudy: "#case-studies",
      artifact: "/AccessGuard_Project_Guide.pdf"
    }
  },
  {
    name: "Bastion",
    icon: ShieldHalf,
    subtitle: "Compliance Control Mapping & Audit Evidence Tracker",
    description:
      "A control mapping and audit-readiness project designed to connect framework requirements with technical evidence, control owners, and remediation status.",
    metrics: ["120+ controls mapped", "28 evidence gaps", "5 control families"],
    bullets: [
      "Mapped 120+ NIST 800-53 and CIS Controls to policy artifacts, technical evidence, and control-owner responsibilities.",
      "Identified 28 evidence gaps across 5 control families and built structured remediation tracking workflows.",
      "Created Excel/Python dashboards for evidence completeness, residual risk visibility, control effectiveness, and audit readiness.",
      "Prioritized remediation using risk impact, control criticality, likelihood, and evidence quality."
    ],
    tags: [
      "Control Testing",
      "NIST 800-53",
      "CIS Controls",
      "Audit Readiness",
      "Risk Assessment",
      "Remediation Tracking"
    ],
    links: {
      live: "https://bastion.streamlit.app/",
      github: "https://github.com/mehulnikumbh19/bastion-grc",
      caseStudy: "#case-studies",
      artifact: "/Mehul_Nikumbh_GRC_Portfolio.pdf"
    }
  },
  {
    name: "Patchwork",
    icon: AlertTriangle,
    subtitle: "Vulnerability Risk Register & Remediation Prioritization Dashboard",
    description:
      "A vulnerability governance project focused on risk-based remediation, asset context, SLA tracking, and compliance-style reporting.",
    metrics: ["2,000+ CVEs", "150 assets", "Risk-ranked queues"],
    bullets: [
      "Correlated 2,000+ CVE records against a 150-asset inventory to build a centralized vulnerability risk register.",
      "Created risk-ranked remediation queues using CVSS severity, exploit availability, business impact, and asset criticality.",
      "Built dashboards for overdue remediation, high-risk assets, exception tracking, and leadership-level risk visibility.",
      "Mapped findings to NIST/CIS-aligned vulnerability management expectations and produced remediation guidance for audit support."
    ],
    tags: [
      "Vulnerability Management",
      "Risk Register",
      "CVSS",
      "Remediation SLA",
      "Asset Criticality",
      "Compliance Reporting"
    ],
    links: { caseStudy: "#case-studies", artifact: "/Risk_Register_Sample.xlsx" }
  },
  {
    name: "Watchtower",
    icon: Siren,
    subtitle: "SIEM Alert Evidence Review & Risk-Based Triage Workflow",
    description:
      "A security evidence and triage project focused on SIEM alert review, risk prioritization, and incident-ready documentation.",
    metrics: ["500+ SIEM alerts", "IOC enrichment", "MITRE mapping"],
    bullets: [
      "Processed 500+ simulated SIEM alerts and enriched indicators with external threat-intelligence context.",
      "Built a risk-based triage workflow using asset criticality, IOC confidence, alert severity, and business impact.",
      "Produced incident-ready documentation including evidence summaries, escalation status, recommended actions, and remediation notes.",
      "Mapped findings to MITRE ATT&CK techniques to improve incident traceability and governance visibility."
    ],
    tags: [
      "SIEM",
      "Incident Documentation",
      "Evidence Review",
      "Risk-Based Triage",
      "MITRE ATT&CK",
      "Security Monitoring"
    ],
    links: { caseStudy: "#case-studies", artifact: "/Mehul_Nikumbh_GRC_Portfolio.pdf" }
  }
];

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

export const frameworks = [
  {
    name: "NIST CSF",
    use: "Cybersecurity governance and risk communication",
    work: "Risk identification, governance, asset protection, detection, response, recovery.",
    examples: "Govern, Identify, Protect, Detect, Respond, Recover"
  },
  {
    name: "NIST 800-53",
    use: "Detailed security control assessment and control mapping",
    work: "Access control, audit logging, configuration management, incident response, risk assessment.",
    examples: "AC, AU, CM, IR, RA"
  },
  {
    name: "ISO 27001",
    use: "Information security management and audit evidence alignment",
    work: "Information security controls, access management, supplier security, incident management, policy governance.",
    examples: "Access management, supplier security, incident management"
  },
  {
    name: "SOC 2",
    use: "Trust services evidence and control owner readiness",
    work: "Security, availability, confidentiality, processing integrity, privacy.",
    examples: "Security, availability, confidentiality"
  },
  {
    name: "SOX ITGC",
    use: "IT general controls supporting financial reporting risk",
    work: "Access controls, change management, operations, logical security, audit evidence.",
    examples: "Access, change management, operations, logical security"
  },
  {
    name: "PCI DSS",
    use: "Payment security controls and compliance evidence",
    work: "Cardholder data protection, access controls, vulnerability management, monitoring, policy enforcement.",
    examples: "Vulnerability management, logging, access control"
  },
  {
    name: "CIS Controls",
    use: "Practical hardening and operational security baseline",
    work: "Asset inventory, secure configuration, vulnerability management, access control, audit logging.",
    examples: "Inventory, secure configuration, vulnerability management"
  }
];

export const artifacts = [
  {
    title: "Resume",
    href: "/Mehul_Nikumbh_Resume.pdf",
    icon: FileCheck2,
    description: "One-page summary of GRC experience, projects, certifications, and target roles.",
    fileType: "PDF",
    isPlaceholder: true
  },
  {
    title: "GRC Portfolio PDF",
    href: "/Mehul_Nikumbh_GRC_Portfolio.pdf",
    icon: ShieldCheck,
    description: "Compiled overview of control mapping, risk registers, and audit evidence samples.",
    fileType: "PDF",
    isPlaceholder: true
  },
  {
    title: "AccessGuard Project Guide",
    href: "/AccessGuard_Project_Guide.pdf",
    icon: KeyRound,
    description: "Walkthrough of the access review workflow, test cases, and workbook structure.",
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
    title: "Vulnerability Dashboard Sample",
    href: "/Vulnerability_Dashboard_Sample.xlsx",
    icon: BarChart3,
    description: "Dashboard views for CVE prioritization, SLA status, and asset criticality overlays.",
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

export const education = {
  school: "California State University, Long Beach",
  degree: "M.S. Information Systems, Cybersecurity Concentration",
  icon: GraduationCap,
  focusAreas: [
    "Cybersecurity analytics",
    "Governance, risk, and compliance",
    "Security operations",
    "Risk management",
    "Cloud and infrastructure security fundamentals",
    "Data analysis and reporting"
  ]
};

export const learningPriorities = [
  "NIST CSF and NIST 800-53 control interpretation",
  "ISO 27001 control objectives and audit evidence expectations",
  "SOX ITGC concepts: access, change management, operations, and logical security",
  "PCI DSS security control requirements",
  "IAM governance and access certification workflows",
  "Excel-based GRC reporting, risk registers, and compliance dashboards",
  "ServiceNow, Jira, SailPoint, and OneTrust workflow fundamentals",
  "Vendor risk questionnaires and SOC 2 report review basics"
];

export const faqs = [
  {
    question: "Why GRC after security operations?",
    answer:
      "My security operations background helps me understand the technical evidence behind controls. GRC requires the ability to connect technical findings to business risk, audit requirements, remediation actions, and stakeholder communication."
  },
  {
    question: "Do you only focus on documentation?",
    answer:
      "No. I focus on risk-based governance work including risk registers, control testing, remediation tracking, access reviews, vulnerability prioritization, and audit-ready evidence, not documentation alone."
  },
  {
    question: "What makes your profile useful for entry-level GRC roles?",
    answer:
      "I combine cybersecurity fundamentals with practical GRC project work across control mapping, risk registers, evidence tracking, access review testing, vulnerability prioritization, and audit-ready reporting."
  },
  {
    question: "Are your projects based on real company data?",
    answer:
      "No. The projects use simulated data designed to mirror real enterprise workflows while protecting confidentiality and avoiding any misuse of real organizational information."
  }
];

export const contactLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: UsersRound },
  { label: "GitHub", href: profile.github, icon: GitBranch },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Download Resume", href: profile.resume, icon: FileCheck2, isPlaceholder: true }
];

export const riskMatrix = [
  ["medium", "high", "high", "critical", "critical"],
  ["low", "medium", "high", "high", "critical"],
  ["low", "low", "medium", "high", "high"],
  ["low", "low", "low", "medium", "high"],
  ["low", "low", "low", "low", "medium"]
];

export const sectionKickers = {
  about: "Evidence, controls, and stakeholder-ready risk language",
  skills: "Governance depth with technical security context",
  projects: "Portfolio simulations using realistic enterprise workflows",
  lab: "Compact previews of the tools and thinking behind the work"
};
