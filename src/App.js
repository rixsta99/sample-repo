<<<<<<< HEAD
import React, { useState } from "react";
import "./HomePage.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjnlnjl";

// Shared, self-contained style tokens — used across every card/section so the
// look doesn't depend on (or get broken by) whatever the external CSS does.
const BRAND_GREEN = "#2f7d4f";
const sectionHeadingStyle = { fontSize: "1.5rem", lineHeight: 1.3, textAlign: "center" };
const cardStyle = {
  background: "#ffffff",
  borderRadius: "10px",
  padding: "14px 16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  borderLeft: `4px solid ${BRAND_GREEN}`,
};
const cardNumberStyle = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
  color: BRAND_GREEN,
  marginBottom: "6px",
};
const cardTitleStyle = { margin: "0 0 6px", fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a" };
const cardTextStyle = { margin: 0, fontSize: "0.9rem", lineHeight: 1.5, color: "#555555" };
const BG_GREY = "#f6f6f4";
const BG_GREEN = "#eef6f0";
const BG_WHITE = "#ffffff";
const SECTION_GAP = "8px";
const backToTopWrapStyle = { display: "flex", justifyContent: "center", width: "100%", marginTop: "12px" };
const rightColumnBackToTopStyle = { display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "12px", gridColumn: "2" };
// Forcing position/display/float here guards against a CSS rule on .back-to-top
// that pulls the link out of normal flow (e.g. position:absolute) — without this,
// no amount of wrapper styling can center it, since it would no longer be part
// of the wrapper's layout at all.
const backToTopLinkStyle = { color: BRAND_GREEN, position: "static", float: "none", display: "inline-block" };

// Simple line-style SVG icons — no external dependency, colored with the brand green.
const IconWrap = ({ children }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={BRAND_GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    {children}
  </svg>
);
const IconChip = () => (
  <IconWrap>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <line x1="9" y1="2" x2="9" y2="6" /><line x1="15" y1="2" x2="15" y2="6" />
    <line x1="9" y1="18" x2="9" y2="22" /><line x1="15" y1="18" x2="15" y2="22" />
    <line x1="2" y1="9" x2="6" y2="9" /><line x1="2" y1="15" x2="6" y2="15" />
    <line x1="18" y1="9" x2="22" y2="9" /><line x1="18" y1="15" x2="22" y2="15" />
    <circle cx="12" cy="12" r="2" fill={BRAND_GREEN} stroke="none" />
  </IconWrap>
);
const IconChat = () => (
  <IconWrap>
    <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H5a1 1 0 0 1-1-1z" />
  </IconWrap>
);
const IconGear = () => (
  <IconWrap>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </IconWrap>
);
const IconChart = () => (
  <IconWrap>
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="6" y="12" width="3" height="8" />
    <rect x="11" y="8" width="3" height="12" />
    <rect x="16" y="4" width="3" height="16" />
  </IconWrap>
);
const IconLayers = () => (
  <IconWrap>
    <polygon points="12,3 21,8 12,13 3,8" />
    <polyline points="3,12 12,17 21,12" />
    <polyline points="3,16 12,21 21,16" />
  </IconWrap>
);
const IconPulse = () => (
  <IconWrap>
    <polyline points="2,12 7,12 9,6 13,18 15,12 22,12" />
  </IconWrap>
);
const IconBook = () => (
  <IconWrap>
    <path d="M12 5c-1.8-1-4.6-1.4-7-1v14c2.4-.4 5.2 0 7 1 1.8-1 4.6-1.4 7-1V4c-2.4-.4-5.2 0-7 1z" />
    <line x1="12" y1="5" x2="12" y2="19" />
  </IconWrap>
);
const IconContainer = () => (
  <IconWrap>
    <rect x="3" y="7" width="18" height="12" rx="1" />
    <line x1="3" y1="11" x2="21" y2="11" />
    <line x1="8" y1="7" x2="8" y2="19" />
    <line x1="16" y1="7" x2="16" y2="19" />
  </IconWrap>
);
const IconBolt = () => (
  <IconWrap>
    <polygon points="13,2 3,14 11,14 9,22 21,9 13,9" />
  </IconWrap>
);
const IconNetwork = () => (
  <IconWrap>
    <circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="7" y1="8" x2="11" y2="16" />
    <line x1="17" y1="8" x2="13" y2="16" />
  </IconWrap>
);
const IconCloud = () => (
  <IconWrap>
    <path d="M6.5 18h11a4 4 0 0 0 .3-8 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 18z" />
  </IconWrap>
);
const IconCycle = () => (
  <IconWrap>
    <path d="M4 12a8 8 0 0 1 14-5" />
    <polyline points="18,3 18,7 14,7" />
    <path d="M20 12a8 8 0 0 1-14 5" />
    <polyline points="6,21 6,17 10,17" />
  </IconWrap>
);
const IconEnvelope = () => (
  <IconWrap>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <polyline points="3,7 12,13 21,7" />
  </IconWrap>
);
const IconWarning = () => (
  <IconWrap>
    <path d="M12 3 22 20H2z" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <circle cx="12" cy="17" r="0.6" fill={BRAND_GREEN} stroke="none" />
  </IconWrap>
);
const IconThreads = () => (
  <IconWrap>
    <line x1="3" y1="7" x2="10" y2="7" />
    <line x1="3" y1="12" x2="10" y2="12" />
    <line x1="3" y1="17" x2="10" y2="17" />
    <path d="M10 7 16 12 10 17" />
    <line x1="16" y1="12" x2="21" y2="12" />
  </IconWrap>
);
const IconGauge = () => (
  <IconWrap>
    <path d="M4 16a8 8 0 0 1 16 0" />
    <line x1="12" y1="16" x2="16" y2="10" />
    <circle cx="12" cy="16" r="1.2" fill={BRAND_GREEN} stroke="none" />
  </IconWrap>
);
const IconMonitor = () => (
  <IconWrap>
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="12" y1="16" x2="12" y2="20" />
    <polyline points="6,13 9,9 12,12 16,7" />
  </IconWrap>
);
const IconShield = () => (
  <IconWrap>
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z" />
    <polyline points="9,12 11,14 15,9" />
  </IconWrap>
);

const capabilities = [
  {
    number: "01",
    title: "Integration architecture",
    description: "Designing secure, standards-based gateways across APIs, events, messaging, and legacy platforms. Strong at canonical facade layers that de-risk third-party integration, and direct-to-service pathways that retire legacy middleware.",
    icon: IconNetwork,
  },
  {
    number: "02",
    title: "AWS cloud & serverless",
    description: "Architecting event-driven, serverless AWS platforms — Lambda, ECS/Fargate, SQS, API Gateway, and Bedrock — for high-volume, regulated workloads, including hybrid integrations that bridge legacy systems to cloud-native targets.",
    icon: IconCloud,
  },
  {
    number: "03",
    title: "DevOps, CI/CD & production resilience",
    description: "Building the automation and observability that keeps regulated platforms safe to change — automated testing pipelines, proactive monitoring, and cross-functional post-incident leadership on critical infrastructure.",
    icon: IconCycle,
  },
  {
    number: "04",
    title: "Agentic & AI-assisted engineering",
    description: "Applying practical, guardrailed AI to accelerate delivery and diagnosis — from automated error-monitoring agents to AI-assisted testing and legacy-system knowledge validation.",
    icon: IconChip,
  },
];

const proofPoints = [
  { value: "450x", label: "faster validation throughput", detail: "Thread-safe session caching cut per-document processing from 45 seconds to under 100 milliseconds." },
  { value: "700k+", label: "records migrated & platform decommissioned", detail: "Serverless AWS migration and legacy platform decommission, delivered fully automated via CI/CD." },
  { value: "30+", label: "stakeholders led through a critical PIR", detail: "Directed real-time remediation on payment-critical infrastructure through to root-cause resolution." },
  { value: "10k+", label: "technical knowledge contributions", detail: "Primary author of the organization's integration architecture knowledge base." },
];

const technologyGroups = [
  {
    title: "AWS Cloud",
    technologies: [
      ["API Gateway", "amazon-api-gateway.svg"],
      ["Bedrock", "amazon-bedrock.svg"],
      ["DynamoDB", "amazon-dynamodb.svg"],
      ["EC2", "amazon-ec2.svg"],
      ["EFS", "amazon-efs.svg"],
      ["Elastic Container Registry", "amazon-elastic-container-registry.svg"],
      ["ElastiCache", "amazon-elasticache.svg"],
      ["EventBridge", "amazon-eventbridge.svg"],
      ["OpenSearch Service", "amazon-opensearch-service.svg"],
      ["RDS", "amazon-rds.svg"],
      ["Route 53", "amazon-route-53.svg"],
      ["SNS", "amazon-simple-notification-service.svg"],
      ["SQS", "amazon-simple-queue-service.svg"],
      ["S3", "amazon-simple-storage-service.svg"],
      ["CloudFormation", "aws-cloudformation.svg"],
      ["CloudTrail", "aws-cloudtrail.svg"],
      ["Fargate", "aws-fargate.svg"],
      ["KMS", "aws-key-management-service.svg"],
      ["Lambda", "aws-lambda.svg"],
      ["Secrets Manager", "aws-secrets-manager.svg"],
      ["Step Functions", "aws-step-functions.svg"],
      ["WAF", "aws-waf.svg"],
      ["Elastic Load Balancing", "elastic-load-balancing.svg"],
    ],
  },
  {
    title: "Integration & Security",
    technologies: [
      ["", "azure.png"],
      ["WSO2", null, true],
      ["Kafka", "apachekafka"],
      ["REST / OpenAPI", "openapiinitiative"],
      ["OAuth 2.0", null, true],
      ["IBM Cloud (JWKS & JWT)", null, true],
      ["Java", "openjdk"],
      ["React", "react"],
      ["Node.js", "nodedotjs"],
    ],
  },
  {
    title: "CI/CD & AI",
    technologies: [
      ["CodeBuild", "aws-codebuild.svg"],
      ["Bedrock Guardrails", "amazon-bedrock.svg"],
      ["Terraform", "terraform"],
      ["AWS CDK", null, true],
      ["GitHub Actions", "githubactions"],
      ["Docker", "docker"],
      ["Python", "python"],
      ["TypeScript", "typescript"],
      ["Playwright MCP", null, true],
      ["MCP Servers", null, true],
      ["GitHub Copilot", "githubcopilot"],
    ],
  },
];

const engagements = [
  {
    number: "01",
    title: "External gateway: hardship platform integration",
    description: "Led the end-to-end architecture exposing arrears & hardship mailboxes to a third-party servicing partner via a standardized, OAuth2/JWT-secured gateway — Private Key JWT authentication with internally issued certificates, resource-level throttling per operation, and a facade layer that kept the partner fully abstracted from internal cloud and identity complexity.",
    icon: IconEnvelope,
  },
  {
    number: "02",
    title: "Post-incident review: signing certificate expiry",
    description: "Diagnosed a decade-old JWT signing certificate failure with two days of production runway remaining, resolved a Java 8 / OpenSSL 3 keystore incompatibility mid-incident, and eliminated the systemic gap by registering every affected repository in an automated 30-day certificate-expiry monitor.",
    icon: IconWarning,
  },
  {
    number: "03",
    title: "Contribution clearing: multi-threaded processing overhaul",
    description: "Re-architected a legacy single-threaded contribution pipeline to meet a regulatory-driven volume increase, then led triage of the resulting thread-safety defect — building a secure, PII-redacted production replay capability, and standing up a masked-payload volume-testing framework to validate capacity ahead of future peak windows.",
    icon: IconThreads,
  },
  {
    number: "04",
    title: "Regulatory validation: session caching for batch throughput",
    description: "Identified a 45-second-per-document taxonomy initialization bottleneck and implemented thread-safe, double-checked-locking session caching — cutting a 12.5-hour batch run to minutes and lifting throughput from roughly 1.3 to 600 validations per minute.",
    icon: IconGauge,
  },
  {
    number: "05",
    title: "Internal platform engineering: operations & observability tooling",
    description: "Co-built a full-stack internal platform (React, Node.js, MongoDB) used by 50+ enterprise staff — bringing live contribution tracking, registry-sync tooling, and automated volume-testing suites into a single operational surface, with observability telemetry and transaction-level tracing wired directly into the UI.",
    icon: IconMonitor,
  },
  {
    number: "06",
    title: "Defense-in-depth security model for autonomous AI agents",
    description: "A seven-layer security model for production AI agents — defense in depth from the user interface all the way down to backend data access:",
    icon: IconShield,
    layers: [
      "Identity-aware UI authentication",
      "Signed service-to-service calls (AWS SigV4)",
      "Least-privilege IAM principals",
      "Guardrailed model access with PII masking (Bedrock Guardrails)",
      "LLM prompt hardening",
      "Scoped tool access (tool-level permissioning)",
      "Downstream role-based access control (RBAC)",
    ],
  },
];

const pantherStats = [
  { value: "40+", label: "integration capabilities", detail: "A broad set of AI, platform engineering, monitoring, and business intelligence workflows." },
  { value: "50+", label: "active users", detail: "Across Banking, Operations, Digital, Advice & Integration teams." },
];

const pantherFeatures = [
  { label: "Agentic AI", text: "AWS Bedrock + Claude via agent frameworks (Strands Agents), tool-use, Knowledge Bases and SSE streaming", icon: IconChip },
  { label: "Natural-language chat", text: "Query live integration and industry adviser data through a grounded AI interface", icon: IconChat },
  { label: "Platform engineering", text: "MFT file transfer job builder and SQS dead-letter queue replay", icon: IconGear },
  { label: "Business intelligence", text: "CSAT / NPS event analysis and industry adviser data exploration", icon: IconChart },
  { label: "Multi-stack visibility", text: "AWS, WSO2 Micro Integrator, Kafka and SSIS services in a single view", icon: IconLayers },
  { label: "Datadog", text: "Real-time integration service monitoring permalinks", icon: IconPulse },
];

const pantherPatterns = [
  {
    title: "RAG pattern",
    detail: "A Bedrock Agent backed by a Knowledge Base and vector search — best suited to static or slow-changing knowledge, like documentation and legacy-system Q&A agents.",
    icon: IconBook,
  },
  {
    title: "Containerized agent pattern",
    detail: "A fully serverless AWS ECS agent with isolated tool execution — auto-scaling, stateless, and easy to deploy independently of the core platform.",
    icon: IconContainer,
  },
  {
    title: "Direct API agent pattern",
    detail: "An agentic loop running directly in the platform's own API — full control over streaming and real-time external API calls, at the cost of owning the tool logic directly.",
    icon: IconBolt,
  },
];

const incidentPractices = [
  { title: "Stabilize", detail: "Protect throughput, data integrity, and customer-facing services while the issue is understood." },
  { title: "Diagnose", detail: "Use traces, logs, metrics, replayable test data, and dependency knowledge to find the real constraint." },
  { title: "Strengthen", detail: "Convert incident learning into automation, alerting, capacity testing, and durable architecture improvements." },
];

const App = () => {
  const year = new Date().getFullYear();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("idle");

  const openContact = (e) => {
    e.preventDefault();
    setContactStatus("idle");
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (data.get("_gotcha")) {
      return;
    }

    setContactStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setContactStatus("success");
        form.reset();
      } else {
        setContactStatus("error");
      }
    } catch (err) {
      setContactStatus("error");
    }
  };

  return (
    <div className="main-wrapper" id="top">
      <style>{`
        #hero-title,
        #capabilities-title,
        #engagements-title,
        #approach-title,
        .aspen-centered,
        .aspen-centered p,
        .aspen-centered h2 {
          text-align: center !important;
        }
      `}</style>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aspen Tree home">
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            alt="Aspen Tree"
            style={{ height: "170px", width: "auto", objectFit: "contain", maxWidth: "none" }}
          />
        </a>
        <div className="header-actions">
          <nav className="section-nav" aria-label="Page sections">
            <a href="#capabilities-title">Capabilities</a>
            <a href="#engagements-title">Showcases</a>
            <a href="#approach-title">Our Approach</a>
            <a href="#contact" onClick={openContact}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" style={{ textAlign: "left", background: BG_WHITE, padding: "16px 24px", marginBottom: SECTION_GAP }}>
          <div
            className="hero-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                ...cardStyle,
                borderLeft: "none",
                position: "relative",
                padding: "18px 28px",
                textAlign: "center",
                width: "100%",
                maxWidth: "660px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.35rem", lineHeight: 1.5, color: "#2a2a2a" }}>
                Aspen Tree specialises in Integration architecture, incident leadership, DevOps automation, and agentic AI — applied where it earns its place: across banking, superannuation, operations teams and enterprise integration.
              </p>
            </div>

            <div style={{ background: "#ffffff", borderRadius: "10px", padding: "12px" }}>
              <a href="#capabilities-title" aria-label="Explore the work">
                <img
                  src={process.env.PUBLIC_URL + "/panther-logo.png"}
                  alt="Panther API"
                  style={{ height: "110px", width: "auto", display: "block" }}
                />
              </a>
              <p className="panther-tagline">was proudly built by Aspen Tree</p>
            </div>
          </div>
        </section>

        <section id="capabilities" aria-labelledby="capabilities-title" style={{ background: BG_GREY, marginBottom: SECTION_GAP }}>
          <div className="section" style={{ padding: "32px 24px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px", textAlign: "center" }}>
              <h2 id="capabilities-title" style={{ textAlign: "center", margin: "0 auto", ...sectionHeadingStyle }}>Depth across every layer of the stack.</h2>
              <p style={{ ...cardTextStyle, fontSize: "1rem", maxWidth: "700px", margin: "10px auto 0" }}>
                Aspen Tree designs and delivers secure, observable integration and cloud platforms for regulated enterprises — closing the distance between legacy complexity and cloud-native, AI-augmented delivery.
              </p>
            </div>
            <div className="capability-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {capabilities.map((capability) => (
                <article key={capability.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <capability.icon />
                    <span style={{ ...cardNumberStyle, margin: 0 }}>{capability.number}</span>
                  </div>
                  <h3 style={cardTitleStyle}>{capability.title}</h3>
                  <p style={cardTextStyle}>{capability.description}</p>
                </article>
              ))}
            </div>
            <div style={backToTopWrapStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section className="engagements-section" id="engagements" aria-labelledby="engagements-title" style={{ background: BG_GREEN, marginBottom: SECTION_GAP }}>
          <div className="section" style={{ padding: "32px 24px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px" }}>
              <h2 id="engagements-title" style={{ ...sectionHeadingStyle, margin: "0 auto", whiteSpace: "nowrap" }}>Complex systems, delivered with confidence.</h2>
            </div>
            <div className="capability-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
              {engagements.map((engagement) => (
                <article key={engagement.number} style={{ ...cardStyle, borderLeft: `2px solid ${BRAND_GREEN}`, padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "38px", marginBottom: "6px", padding: "4px", overflow: "visible" }}>
                    <div style={{ lineHeight: 0, transform: "translateY(-2px)" }}>
                      <engagement.icon />
                    </div>
                    <span style={{ ...cardNumberStyle, margin: 0 }}>{engagement.number}</span>
                  </div>
                  <h3 style={{ ...cardTitleStyle, fontSize: "1.15rem", lineHeight: 1.25, margin: "16px 0 10px", paddingBottom: "10px", borderBottom: "1px solid #cdd9d2" }}>{engagement.title}</h3>
                  <p style={{ ...cardTextStyle, fontSize: "0.85rem" }}>{engagement.description}</p>
                  {engagement.layers && (
                    <ol style={{ margin: "8px 0 0", paddingLeft: "16px" }}>
                      {engagement.layers.map((layer) => (
                        <li key={layer} style={{ ...cardTextStyle, fontSize: "0.8rem", marginBottom: "3px" }}>{layer}</li>
                      ))}
                    </ol>
                  )}
                </article>
              ))}
            </div>
            <div style={backToTopWrapStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section className="panther-section" id="panther" aria-labelledby="panther-title" style={{ background: BG_WHITE, marginBottom: SECTION_GAP }}>
          <div className="section" style={{ padding: "32px 24px" }}>
            <h2
              id="panther-title"
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
              }}
            >
              Panther API
            </h2>
            <div className="panther-capabilities" style={{ marginBottom: "18px" }}>
              <h3 style={{ ...cardTitleStyle, fontSize: "1.25rem", marginBottom: "6px" }}>Panther API capabilities</h3>
              <p style={{ ...cardTextStyle, fontSize: "1rem", marginBottom: "14px" }}>
                A practical operations platform that brings live integration insight, agentic AI, and high-value engineering workflows into one clear interface.
              </p>
              <div className="panther-feature-list">
                {pantherFeatures.map((feature) => (
                  <div key={feature.label} style={{ ...cardStyle, padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <feature.icon />
                      <h4 style={{ ...cardTitleStyle, fontSize: "0.95rem", margin: 0 }}>{feature.label}</h4>
                    </div>
                    <p style={cardTextStyle}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panther-metrics" style={{ marginBottom: "18px" }}>
              <h3 style={{ ...cardTitleStyle, fontSize: "1.1rem", marginBottom: "10px" }}>Panther metrics</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              {pantherStats.map((stat) => (
                <div key={stat.label} style={cardStyle}>
                  <strong style={{ display: "block", fontSize: "1.4rem", color: BRAND_GREEN, marginBottom: "4px" }}>{stat.value}</strong>
                  <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{stat.label}</span>
                  <p style={cardTextStyle}>{stat.detail}</p>
                </div>
              ))}
              </div>
            </div>

            <div style={{ background: "#eef6f0", borderRadius: "12px", padding: "16px" }}>
              <h3 style={{ ...cardTitleStyle, fontSize: "1rem", marginBottom: "4px" }}>Three agentic AI patterns</h3>
              <p style={{ ...cardTextStyle, marginBottom: "10px" }}>
                Different problems call for different agent architectures — chosen based on latency, statefulness, and deployment constraints:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
                {pantherPatterns.map((pattern, index) => (
                  <div key={pattern.title} style={cardStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <pattern.icon />
                      <span style={{ ...cardNumberStyle, margin: 0 }}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h4 style={{ ...cardTitleStyle, fontSize: "0.95rem" }}>{pattern.title}</h4>
                    <p style={cardTextStyle}>{pattern.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={backToTopWrapStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section className="incident-section" id="incidents" aria-labelledby="incident-title" style={{ background: BG_GREEN, marginBottom: SECTION_GAP }}>
          <div className="section incident-inner" style={{ padding: "32px 24px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px" }}>
              <h2 id="incident-title" style={{ ...sectionHeadingStyle }}>Triage that turns pressure into progress.</h2>
            </div>
            <div className="incident-copy">
              <p className="incident-lead">When transaction volumes rise and systems are under pressure, the first job is to create clarity.</p>
              <p>Production incident triage combines rapid fault isolation, safe operational decisions, and communication that keeps technical and business stakeholders aligned. See the Selected Showcases below for how this plays out on real incidents.</p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  marginTop: "20px",
                }}
              >
                {incidentPractices.map((practice) => (
                  <div key={practice.title} style={{ ...cardStyle, borderLeft: "none", borderTop: `4px solid ${BRAND_GREEN}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ color: BRAND_GREEN, fontSize: "1.1rem", fontWeight: 700 }} aria-hidden="true">&#10003;</span>
                      <h4 style={{ ...cardTitleStyle, margin: 0 }}>{practice.title}</h4>
                    </div>
                    <p style={cardTextStyle}>{practice.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={rightColumnBackToTopStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section className="proof-section" id="outcomes" aria-labelledby="proof-title" style={{ background: BG_WHITE, marginBottom: SECTION_GAP }}>
          <div className="section proof-inner" style={{ padding: "32px 24px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px" }}>
              <h2 id="proof-title" style={{ ...sectionHeadingStyle, color: "#1a1a1a" }}>Engineering with evidence behind it.</h2>
            </div>
            <div className="proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {proofPoints.map((point) => (
                <div key={point.value} style={cardStyle}>
                  <strong style={{ display: "block", fontSize: "1.4rem", color: BRAND_GREEN, marginBottom: "4px" }}>{point.value}</strong>
                  <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{point.label}</span>
                  <p style={cardTextStyle}>{point.detail}</p>
                </div>
              ))}
            </div>
            <div style={rightColumnBackToTopStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section id="approach" aria-labelledby="approach-title" style={{ background: BG_GREY, marginBottom: SECTION_GAP }}>
          <div className="section" style={{ padding: "32px 24px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px" }}>
              <h2 id="approach-title" style={{ ...sectionHeadingStyle, margin: "0 auto" }}>Modernize without losing the plot.</h2>
            </div>
            <div className="approach-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              <div style={{ ...cardStyle, display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={cardNumberStyle}>01</span>
                <div><h3 style={cardTitleStyle}>Find the leverage</h3><p style={cardTextStyle}>Understand the landscape, constraints, failure modes, and real operational pressure before choosing a solution.</p></div>
              </div>
              <div style={{ ...cardStyle, display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={cardNumberStyle}>02</span>
                <div><h3 style={cardTitleStyle}>Modernize incrementally</h3><p style={cardTextStyle}>Use event bridges, facade APIs, and clear boundaries to move legacy capability toward a cloud-native target state without a risky rewrite.</p></div>
              </div>
              <div style={{ ...cardStyle, display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={cardNumberStyle}>03</span>
                <div><h3 style={cardTitleStyle}>Automate the feedback loop</h3><p style={cardTextStyle}>Build delivery, security, integration, and performance testing into the path from design to production.</p></div>
              </div>
              <div style={{ ...cardStyle, display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={cardNumberStyle}>04</span>
                <div><h3 style={cardTitleStyle}>Multiply the team</h3><p style={cardTextStyle}>Leave behind standards, documentation, reusable workflows, and mentoring that help engineers operate and extend the platform confidently.</p></div>
              </div>
            </div>
            <div style={backToTopWrapStyle}>
              <a className="back-to-top" href="#top" style={backToTopLinkStyle}>Back to top <span aria-hidden="true">&#8593;</span></a>
            </div>
          </div>
        </section>

        <section className="technology-section" id="technology" aria-labelledby="technology-title" style={{ background: BG_GREEN, marginBottom: SECTION_GAP }}>
          <div className="section technology-inner" style={{ padding: "32px 24px 12px" }}>
            <div className="aspen-centered" style={{ marginBottom: "24px" }}>
              <h2 id="technology-title" style={{ ...sectionHeadingStyle, margin: "0 auto", textAlign: "center" }}>A broad toolkit, applied with restraint.</h2>
              <p style={{ ...cardTextStyle, fontSize: "1rem", maxWidth: "700px", margin: "10px auto 0", textAlign: "center" }}>
                From cloud-native backends and integration middleware to CI/CD automation, identity and security controls, and AI-assisted operations.
              </p>
            </div>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <div className="technology-group" key={group.title}>
                  <h3 className="technology-group-title">{group.title}</h3>
                  <div className="technology-list">
                    {group.technologies.map(([name, logo, iconOnly]) => {
                      const isLocalLogo = logo && logo.includes(".");
                      const logoSource = logo && isLocalLogo
                        ? `${process.env.PUBLIC_URL}/logos/${logo}`
                        : logo
                          ? `https://cdn.simpleicons.org/${logo}/17352d`
                          : null;

                      return (
                        <div className={`technology-logo${iconOnly ? " technology-logo--icon-only" : ""}`} key={name} aria-label={name}>
                          {logoSource && (
                            <img
                              src={logoSource}
                              alt={iconOnly ? name : ""}
                              aria-hidden={!iconOnly}
                              onError={(event) => {
                                event.currentTarget.hidden = true;
                                event.currentTarget.parentElement.classList.add("technology-logo--icon-failed");
                                event.currentTarget.nextElementSibling.hidden = false;
                              }}
                            />
                          )}
                          <span className="technology-logo-fallback" hidden={Boolean(logoSource)} aria-hidden="true">
                            {name}
                          </span>
                          {!iconOnly && <span className="technology-logo-name">{name}</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...backToTopWrapStyle, marginTop: "4px" }}>
            <a className="back-to-top" href="#top" style={{ ...backToTopLinkStyle, paddingBottom: "6px" }}>Back to top <span aria-hidden="true">&#8593;</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" style={{ justifyContent: "center" }}>
        <span>Aspen Tree &copy; 2014-{year}</span>
      </footer>

      {isContactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={closeContact}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 24, 22, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              maxWidth: "440px",
              width: "100%",
              padding: "32px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={closeContact}
              aria-label="Close contact form"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "20px",
                lineHeight: 1,
                cursor: "pointer",
                color: "#666",
              }}
            >
              &#10005;
            </button>

            <h2 id="contact-modal-title" style={{ marginTop: 0, marginBottom: "6px", fontSize: "1.4rem" }}>
              Get in touch
            </h2>
            <p style={{ marginTop: 0, marginBottom: "20px", color: "#555", fontSize: "0.95rem" }}>
              Send a message and Aspen Tree will get back to you directly.
            </p>

            {contactStatus === "success" ? (
              <p style={{ color: "#2f7d4f", fontWeight: 600 }}>
                Thanks — your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <input type="hidden" name="_subject" value="New enquiry from Aspen Tree website" />

                <label style={{ display: "block", marginBottom: "12px", fontSize: "0.9rem" }}>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    style={{
                      display: "block",
                      width: "100%",
                      marginTop: "4px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </label>

                <label style={{ display: "block", marginBottom: "12px", fontSize: "0.9rem" }}>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    style={{
                      display: "block",
                      width: "100%",
                      marginTop: "4px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </label>

                <label style={{ display: "block", marginBottom: "18px", fontSize: "0.9rem" }}>
                  Message
                  <textarea
                    name="message"
                    required
                    rows={4}
                    style={{
                      display: "block",
                      width: "100%",
                      marginTop: "4px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                  />
                </label>

                {contactStatus === "error" && (
                  <p style={{ color: "#b3261e", fontSize: "0.9rem", marginBottom: "12px" }}>
                    Something went wrong sending that. Please try again in a moment.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={contactStatus === "submitting"}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#2f7d4f",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: contactStatus === "submitting" ? "default" : "pointer",
                    opacity: contactStatus === "submitting" ? 0.7 : 1,
                  }}
                >
                  {contactStatus === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
=======

import React from "react";
import HomePage from "./HomePage";

function App() {
  return <HomePage />;
}

export default App;
>>>>>>> 3ea82893c4a28af3be9d5072a3e8efae46d545a4
