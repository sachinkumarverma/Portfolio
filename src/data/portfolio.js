export const personalInfo = {
  name: "Sachin Kumar Verma",
  initials: "SV",
  title: "Solution Analyst",
  subtitle:
    "Solution Analyst at Argusoft building and modernizing production-grade web, mobile, and agentic AI systems.",
  description:
    "With 3+ years of experience across healthcare, enterprise, and client analytics platforms, I build high-reliability web architectures, cross-platform mobile apps, and autonomous agentic workflows with React, TypeScript, NestJS, Node.js, and React Native.",
  location: "Gandhinagar, India",
  email: "sachinv1410@gmail.com",
  github: "https://github.com/sachinkumarverma",
  linkedin: "https://linkedin.com/in/sachin-kumar-verma",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  availabilityText: "Open to full-time software engineering opportunities",
  yearsOfExperience: "3+",
};

export const aboutData = {
  heading: "Architecting Resilient Full-Stack & Agentic AI Solutions",
  bio: [
    "I am a software engineer with 3+ years of professional experience building, modernizing, and scaling production-grade web, mobile, and backend systems. Over my journey at Argusoft—progressing from Programmer Analyst Trainee to Programmer Analyst and now Solution Analyst—I've led mission-critical enterprise migrations, autonomous AI platforms, and real-time healthcare applications.",
    "On the web and backend stack, I've architected real-time client-risk analytics platforms with NestJS, WebSockets, and PostgreSQL, and modernized core enterprise systems for a Big Four audit firm—migrating 25+ modules to Vue 3 (Composition API), upgrading microservices to .NET 10, and scaling Vitest test coverage to 90% across 1,200+ files.",
    "In mobile development, I engineer clinical communication workflows like TriageStat with React Native and Expo (SDK 50–53), delivering WebRTC video calling and VoIP background push notifications on Android 8–16 and iOS for 500+ active healthcare professionals.",
  ],
  highlights: [
    { icon: "Cpu", text: "Agentic AI & Real-Time Analytics" },
    { icon: "Building2", text: "Enterprise & Big Four Modernization" },
    { icon: "MapPin", text: "Based in Gandhinagar, India" },
  ],
  education: {
    institution: "Sagar Institute of Research and Technology (SIRTS)",
    degree: "B.Tech in Computer Science",
    grade: "8.23 CGPA",
    period: "Jul 2019 – May 2023",
    location: "Bhopal, India",
  },
};

export const experienceData = [
  {
    id: 1,
    role: "Solution Analyst",
    company: "Argusoft",
    companyUrl: "https://www.argusoft.com/",
    location: "Gandhinagar, Gujarat",
    period: "July 2025 – Present",
    type: "current",
    badge: null,
    responsibilities: [
      "Built an agentic AI client-risk analytics platform using React, TypeScript, NestJS, PostgreSQL, and WebSockets to investigate client sentiment, operational issues, CSAT, and ticket trends.",
      "Engineered end-to-end client data ingestion workflows with automated review checkpoints and resilient recovery mechanisms, reducing manual intervention and ensuring traceable inputs for risk analytics.",
      "Modernized mission-critical enterprise workflows for a Big Four audit firm, migrating 25+ frontend modules from Vue 2 to Vue 3 (Composition API) and upgrading core backend microservices from .NET 8 to .NET 10.",
      "Automated database and cloud storage maintenance with index-rebuild cron jobs and implemented application-level database security roles to safeguard data access.",
      "Expanded frontend test coverage to 90% by authoring and maintaining Vitest unit test suites across 1,200+ files and supporting Azure DevOps CI/CD deployment pipelines.",
    ],
  },
  {
    id: 2,
    role: "Programmer Analyst",
    company: "Argusoft",
    companyUrl: "https://www.argusoft.com/",
    location: "Gandhinagar, Gujarat",
    period: "Jan 2024 – Jun 2025",
    type: "past",
    badge: null,
    responsibilities: [
      "Developed React Native clinical care communication workflows for TriageStat, enabling 500+ healthcare professionals to coordinate patient care and share clinical data in real time.",
      "Implemented push notifications and WebRTC video calling on Android 8–16 (handling foreground, background, and locked-screen states) while resolving iOS compatibility, permissions, and media handling.",
      "Modernized the mobile application from class to functional components with an Expo SDK 50–53 upgrade, resolving native dependency issues and validating production Android builds.",
      "Designed RESTful APIs in Node.js and SQL Server with parameterized queries, integrating third-party services and optimizing payload delivery for mobile networks.",
    ],
  },
  {
    id: 3,
    role: "Programmer Analyst Trainee",
    company: "Argusoft",
    companyUrl: "https://www.argusoft.com/",
    location: "Gandhinagar, Gujarat",
    period: "July 2023 – Dec 2023",
    type: "past",
    badge: null,
    responsibilities: [
      "Developed responsive, accessible web interfaces with React, JavaScript, and Tailwind CSS, adhering strictly to pixel-perfect Figma designs.",
      "Contributed to backend API endpoints using Express.js and MongoDB, authoring unit tests for newly introduced service logic.",
      "Built cross-platform mobile features using React Native and assisted senior developers with code reviews, bug fixes, and sprint deliverables.",
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Aradhna Marg — Bilingual Platform & Agentic AI CMS",
    projectType: "Independent Project",
    description:
      "A production-grade bilingual platform and CMS built with React, TypeScript, Node.js, and PostgreSQL, featuring an autonomous Agentic AI framework with permission governance and multi-host routing.",
    purpose:
      "Provide high-traffic public exploration of spiritual content while empowering administrative teams with autonomous AI auditing and content workflows.",
    whatIBuilt:
      "Architected multi-host routing isolating public traffic (aradhnamarg.com) from admin dashboards, built an autonomous Agentic AI framework (SEO audit, content quality, system health) with human-in-the-loop proposal reviews, automated cron background queues, and optimized B-tree indexes for sub-millisecond queries.",
    technicalChallenge:
      "Building a safe Agentic AI framework with Tier 1–5 permission governance ensuring automated tools never mutate live data without review, alongside concurrency-safe background job scheduling with PostgreSQL row locks.",
    outcome:
      "A live, high-performance production platform with sub-millisecond query responses and automated background AI processing.",
    credentials: null,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Agentic AI", "Tailwind CSS"],
    githubUrl: "https://github.com/sachinkumarverma/Aradhna-Marg",
    liveUrl: "https://aradhnamarg.com/",
    previews: [
      "/projects/project1-preview1.webp",
      "/projects/project1-preview2.webp",
    ],
  },
  {
    id: 2,
    title: "SkillNora — Intelligent Learning Platform",
    projectType: "Independent Project",
    description:
      "An intelligent full-stack learning platform powered by Groq LLaMA featuring activity-based recommendations, AI-generated assessments, proctoring controls, and role-based access.",
    purpose:
      "Build a modern AI-powered learning system with automated assessment generation, timed proctoring, and granular student analytics.",
    whatIBuilt:
      "Developed the Next.js frontend, AI assessment generator with Groq LLaMA, timed test runner with answer auto-save, proctoring controls, rank analytics, role-based access control (RBAC), Express backend API, and webhook verification.",
    technicalChallenge:
      "Integrating fast LLM streaming for real-time assessment generation and synchronizing auto-saved exam states with role-based webhook verification.",
    outcome:
      "A live full-stack AI learning platform with public repository and active user assessments.",
    credentials: null,
    tags: ["Next.js", "TypeScript", "Groq LLaMA", "Node.js", "Express", "Supabase"],
    githubUrl: "https://github.com/sachinkumarverma/SkillNora",
    liveUrl: "https://skillnora.vercel.app/",
    previews: [
      "/projects/project2-preview1.webp",
      "/projects/project2-preview2.webp",
    ],
  },
  {
    id: 3,
    title: "ViewTube",
    projectType: "Independent Project",
    description:
      "A full-stack video sharing web application featuring video streaming, custom playback controls, user channels, search, and a dedicated admin management portal.",
    purpose:
      "Create a full-featured video exploration and streaming web platform from scratch with authentication and management tools.",
    whatIBuilt:
      "Built the React user interface, custom video player with keyboard controls, Express REST APIs, authentication flows, and administrative moderation dashboard.",
    technicalChallenge:
      "Managing fluid video layout state, responsive playback controls, and synchronized interaction data across user and admin interfaces.",
    outcome:
      "A functional full-stack project deployed on Vercel with public source code on GitHub.",
    credentials: null,
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/sachinkumarverma/Viewtube",
    liveUrl: "https://viewtube-app.vercel.app/",
    previews: [
      "/projects/project3-preview1.webp",
      "/projects/project3-preview2.webp",
    ],
  },
  {
    id: 4,
    title: "HospIQ",
    projectType: "Independent Project",
    description:
      "A healthcare operations web prototype designed for clinical triage workflows, patient tracking, and administrative reporting.",
    purpose:
      "Create an independent operational prototype to explore patient triage tracking, real-time alert updates, and administrative workflow interfaces.",
    whatIBuilt:
      "Developed the React admin portal, patient record views, SBAR workflow interface components, and integrated socket event notifications for status updates.",
    technicalChallenge:
      "Designing an intuitive multi-column dashboard that organizes patient statuses, clinical priority tiers, and updates without visual clutter.",
    outcome:
      "A prototype web application deployed on Vercel with repository on GitLab.",
    credentials: null,
    tags: ["React", "Node.js", "TypeScript", "WebSockets"],
    githubUrl: "https://gitlab.com/sachinv1410/hospiq",
    liveUrl: "https://hospiq-admin.vercel.app/",
    previews: [
      "/projects/project4-preview1.webp",
      "/projects/project4-preview2.webp",
    ],
  },
  {
    id: 5,
    title: "ClipVora",
    projectType: "Independent Project",
    description:
      "A full-stack media downloader utility and Chrome extension for saving videos, images, and audio from public social media platforms.",
    purpose:
      "Provide an accessible web tool and browser extension for extracting and downloading public media in multiple formats.",
    whatIBuilt:
      "Built the React web client, Chrome Extension (Manifest V3), Express backend service, format selectors, and real-time download status indicators.",
    technicalChallenge:
      "Handling varying platform media payloads, format extraction, and multi-format conversion pipelines reliably.",
    outcome:
      "A live personal utility deployed on Vercel with open-source code on GitHub.",
    credentials: null,
    tags: ["React", "TypeScript", "Node.js", "Chrome Extension"],
    githubUrl: "https://github.com/sachinkumarverma/ClipVora",
    liveUrl: "https://clipvora.vercel.app/",
    previews: [
      "/projects/project5-preview1.webp",
      "/projects/project5-preview2.webp",
    ],
  },
  {
    id: 6,
    title: "CVPilot",
    projectType: "Independent Project",
    description:
      "A modern resume studio featuring live interactive editing, customizable templates, real-time preview, and PDF export.",
    purpose:
      "Build a streamlined, browser-based resume builder with instant visual feedback and clean PDF generation.",
    whatIBuilt:
      "Developed the Next.js application, dual-column builder and preview interfaces, template switcher, drag-and-drop section ordering, and print-optimized PDF styling.",
    technicalChallenge:
      "Balancing live interactive editing state with pixel-perfect single-page A4/Letter print CSS constraints.",
    outcome:
      "A live web application deployed on Vercel with open-source repository on GitHub.",
    credentials: null,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    githubUrl: "https://github.com/sachinkumarverma/CVPilot",
    liveUrl: "https://cv-pilot-ai.vercel.app/",
    previews: [
      "/projects/project6-preview1.webp",
      "/projects/project6-preview2.webp",
    ],
  },
];

export const skillsData = {
  categories: [
    {
      title: "Frontend Development",
      icon: "Monitor",
      skills: ["React", "Vue.js (Vue 3)", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      title: "Backend & AI Systems",
      icon: "Cpu",
      skills: ["Node.js", "NestJS", "Express.js", ".NET 10 / 8", "WebSockets", "REST APIs", "Agentic AI Workflows"],
    },
    {
      title: "Mobile Engineering",
      icon: "Smartphone",
      skills: ["React Native", "Expo SDK 50–53", "Android (Kotlin)", "iOS (Swift)", "WebRTC Video", "VoIP Push Notifications"],
    },
    {
      title: "Databases & Optimization",
      icon: "Database",
      skills: ["PostgreSQL", "SQL Server", "SQL", "Database Optimization", "B-Tree Indexes", "MongoDB", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: ["Azure DevOps", "Azure Storage", "Azure Functions", "Docker", "CI/CD Pipelines", "Vercel", "Git / GitHub"],
    },
    {
      title: "Testing & Automation",
      icon: "FlaskConical",
      skills: ["Vitest (90% Coverage)", "Jest", "Cypress", "React Testing Library", "Unit & E2E Testing", "Test Automation"],
    },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
