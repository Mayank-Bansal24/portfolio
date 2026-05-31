const env = import.meta.env;

export const personal = {
  name: "Mayank Bansal",
  role: "Senior Software Engineer",
  company: "Nucleus Software Exports Ltd.",
  location: "Noida, India",
  email:      env.VITE_EMAIL      || "bansalmk24@gmail.com",
  phone:      env.VITE_PHONE      || "+91-9636993445",
  github:     env.VITE_GITHUB     || "https://github.com/Mayank-Bansal24",
  linkedin:   env.VITE_LINKEDIN   || "https://www.linkedin.com/in/mayank-bansal-395067228/",
  codeforces: env.VITE_CODEFORCES || "https://codeforces.com/profile/Mayank_Bansal",
  codechef:   env.VITE_CODECHEF   || "https://www.codechef.com/users/mayank_2402",
  summary: "Backend Engineer and IIT Mandi graduate with 2 years of experience building scalable, distributed systems and AI-powered solutions.",
  typewriterWords: [
    "real-time data lakehouses.",
    "production RAG pipelines.",
    "agentic LLM systems.",
    "event-driven microservices.",
    "low-code platforms.",
    "distributed systems.",
  ],
};

export const education = {
  institution: "Indian Institute of Technology, Mandi",
  location: "Himachal Pradesh, India",
  degree: "B.Tech, Computer Science and Engineering",
  minor: "Minor in Management",
  cgpa: "8.17",
  period: "August 2020 — June 2024",
};

export const stats = [
  { value: 99.7, unit: "%", label: "Integration Time Reduction", detail: "60 days → 3 hours",          decimals: 1 },
  { value: 25,   unit: "%", label: "Latency Reduction",          detail: "Kafka event-driven arch.",   decimals: 0 },
  { value: 8.17, unit: "",  label: "CGPA — IIT Mandi",           detail: "B.Tech CSE + Minor Mgmt.",   decimals: 2 },
  { value: 90,   unit: "%", label: "Client Onboarding Speed",    detail: "Low-code platform impact",   decimals: 0 },
];

export const experience = [
  {
    id: "nucleus",
    role: "Senior Software Engineer",
    company: "Nucleus Software Exports Ltd.",
    companyUrl: env.VITE_NUCLEUS_LINKEDIN || "https://in.linkedin.com/company/nucleus-software-exports-limited",
    period: "July 2024 — Present",
    current: true,
    badgeChar: "N",
    badgeClass: "nucleus",
    items: [
      {
        title: "Production RAG Chatbot",
        desc: "Designed and deployed using LangChain, LangGraph & MCP with BAAI bge-large-en-v1.5 embeddings on Milvus. Multi-stage intent routing and LLM guardrails for accurate financial-domain responses at scale.",
        tags: ["LangChain", "LangGraph", "MCP", "Milvus", "RAG"],
      },
      {
        title: "Low-Code Integration Platform",
        desc: "Visual workflow engine cutting integration from 60 days → 3 hours. Accelerated client onboarding by >90%. Zero-downtime legacy migrations with Apache Camel & AtlasMap.",
        tags: ["Apache Camel", "AtlasMap", "Groovy", "Spring Boot"],
      },
      {
        title: "Real-Time Data Lakehouse",
        desc: "Medallion architecture (Bronze→Silver→Gold) with Kafka, Spark Structured Streaming & Apache Iceberg on MinIO. StarRocks as OLAP engine for analytical queries at scale.",
        tags: ["Spark", "Iceberg", "Kafka", "StarRocks", "MinIO"],
      },
      {
        title: "Event-Driven Microservices",
        desc: "Apache Kafka & Avro for schema-governed communication with stateful pipelines. Reduced end-to-end communication latency by 25%.",
        tags: ["Kafka", "Avro", "Microservices", "Java"],
      },
    ],
  },
  {
    id: "ode",
    role: "Software Development Intern",
    company: "ODE Holdings, Inc.",
    companyUrl: env.VITE_ODE_LINKEDIN   || "https://www.linkedin.com/company/opendataeconomy/",
    certificate: env.VITE_ODE_CERTIFICATE || "https://drive.google.com/file/d/14v5OOkyp_0LQwAv1bQSDkmb0oHFyZJ4o/view?usp=sharing",
    period: "January 2023 — June 2023",
    current: false,
    badgeChar: "O",
    badgeClass: "ode",
    items: [
      {
        title: "Decentralized Data Vault",
        desc: "Architected on AWS Managed Blockchain with a permissioned ledger, enabling tamper-proof data provenance and sovereign consumer data ownership.",
        tags: ["AWS Managed Blockchain", "Solidity", "Permissioned Ledger"],
      },
      {
        title: "NFT-Based Access Control & ODE Network Currency",
        desc: "Deployed ERC-1155 smart contracts on public blockchain testnets, enforcing NFT-based access control linked to user data vaults and wallet addresses. ERC-1155 tokens served as the native currency for the ODE network.",
        tags: ["ERC-1155", "Solidity", "Web3.js", "Blockchain"],
      },
      {
        title: "Privacy Data Access Framework",
        desc: "Built JSON-RPC APIs enabling users to query, retrieve, and revoke personal data from third-party platforms, with contract-level access policies enforcing on-chain consent.",
        tags: ["JSON-RPC", "DynamoDB", "API Design", "Web3"],
      },
      {
        title: "Graph-Based Data Awareness Platform",
        desc: "Modelled user data, platform entities, and access permissions as a traversable knowledge graph. Included interactive quizzes that award badges at progressive levels to drive user data literacy.",
        tags: ["Knowledge Graph", "Graph DB", "Gamification"],
      },
    ],
  },
];

export const projects = [
  {
    id: "lakehouse",
    title: "Real-Time Iceberg Lakehouse",
    atWork: true,
    desc: "Production-grade medallion lakehouse. Kafka ingests events → Spark Structured Streaming processes layers → Apache Iceberg manages table format on MinIO → StarRocks serves OLAP queries at scale.",
    tags: ["Kafka", "Spark", "Iceberg", "StarRocks", "MinIO", "Docker"],
    metrics: ["Medallion Architecture", "OLAP at Scale"],
    github: "https://github.com/Mayank-Bansal24",
    video: null,
  },
  {
    id: "ragchatbot",
    title: "RAG Chatbot — Finance Domain",
    atWork: true,
    desc: "Production RAG pipeline with LangChain, LangGraph & MCP. BAAI bge-large-en-v1.5 embeddings on Milvus. Multi-stage intent routing and LLM guardrails for safe, accurate financial responses.",
    tags: ["LangChain", "LangGraph", "MCP", "Milvus", "Python"],
    metrics: ["LLM Guardrails", "Semantic Search"],
    github: "https://github.com/Mayank-Bansal24",
    video: null,
  },
  {
    id: "chatx",
    title: "Chatx",
    atWork: false,
    desc: "Real-time chat application with user registration, login, live messaging, and avatar customisation. WebSockets for instant communication, MongoDB for persistence, React.js frontend with one-time login via browser local storage.",
    tags: ["Node.js", "React.js", "MongoDB", "Socket.io", "Express.js"],
    metrics: ["Real-time Messaging", "WebSocket Architecture"],
    github: "https://github.com/Mayank-Bansal24/Chatx",
    video: "/chatx_demo.mp4",
  },
  {
    id: "backup",
    title: "Backup Utility",
    atWork: false,
    desc: "Privacy-focused backup utility in C++ with modular OOP architecture. Git commit metadata parsing for incremental version history. Firebase Remote Storage for encrypted cloud backup with conflict resolution.",
    tags: ["C++", "OOP", "Firebase", "Git"],
    metrics: ["Encrypted Storage", "Incremental Sync"],
    github: "https://github.com/Mayank-Bansal24/Backup_utility",
    video: "/backup_utility_demo.mp4",
  },
  {
    id: "stocks",
    title: "YourStocks Bot",
    atWork: false,
    desc: "Real-time stock monitoring bot in Python with configurable price threshold alerts. Telegram Bot integration for instant push notifications with a command interface to manage watchlist conditions.",
    tags: ["Python", "Telegram API", "Market Data"],
    metrics: ["Real-time Alerts", "Telegram Integration"],
    github: "https://github.com/Mayank-Bansal24/Yourstocks_bot",
    video: "/yourstocks_bot_demo.mp4",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "JavaScript", "Solidity"],
  },
  {
    category: "Backend & Infrastructure",
    items: [
      "Spring Boot", "Apache Kafka", "Apache Camel", "Hibernate",
      "Node.js", "Django", "REST APIs", "Docker", "Microservices",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "Spark Structured Streaming", "Apache Iceberg", "Kafka Streams",
      "StarRocks", "PostgreSQL", "DynamoDB", "MinIO", "Avro",
    ],
  },
  {
    category: "AI & LLM",
    items: [
      "LangChain", "LangGraph", "RAG Pipelines",
      "Model Context Protocol (MCP)", "Milvus",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS Lambda", "API Gateway", "Cognito",
      "AWS Managed Blockchain", "Git", "Jira",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS", "JavaScript"],
    supplementary: true,
  },
];

export const achievements = [
  {
    id: "cf",
    type: "cp",
    platform: "Codeforces",
    rating: 1514,
    rank: "Specialist",
    highlights: ["Rank 167 / 11,460 participants in a contest", "Codeforces Specialist rating"],
    link: "https://codeforces.com/profile/Mayank_Bansal",
    linkText: "View Profile →",
    colorClass: "cf-card",
    badgeClass: "specialist",
    badgeText: "Specialist",
  },
  {
    id: "cc",
    type: "cp",
    platform: "CodeChef",
    rating: 1809,
    rank: "4 Star",
    highlights: ["Global Rank 121 — July Cook-Off 2022 Div 2", "Top 0.5% globally"],
    link: "https://www.codechef.com/users/mayank_2402",
    linkText: "View Profile →",
    colorClass: "cc-card",
    badgeClass: "star4",
    badgeText: "4★",
  },
  {
    id: "icpc",
    type: "milestone",
    title: "ICPC Asia Amritapuri — Pre-Regional Round",
    rankDisplay: "Rank 176",
    sub: "Team: Accidental Derangement · September 2022",
    link: "https://webfiles.amrita.edu/2022/09/ICPC-Asia-Amritapuri-Preliminary-Rank-List-2021.pdf",
    linkText: "Verify →",
  },
  {
    id: "kickstart",
    type: "milestone",
    title: "Google Kickstart 2022 — Round C",
    rankDisplay: "Global Rank 2534",
    sub: "Competed among hundreds of thousands globally",
  },
];
