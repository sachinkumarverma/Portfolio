export const personalInfo = {
  name: "Sachin Kumar Verma",
  initials: "SV",
  title: "FULL STACK DEVELOPER",
  subtitle:
    "Full-Stack Engineer at Argusoft building reliable web and mobile products with React, Node.js, and React Native.",
  description:
    "Specializing in React, Node.js, and cross-platform mobile development. I build performant, test-driven applications with clean architecture and modern best practices.",
  location: "India",
  email: "sachinv1410@gmail.com",
  github: "https://github.com/sachinkumarverma",
  linkedin: "https://linkedin.com/in/sachin-kumar-verma",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  availabilityText: "Open to full-time software engineering opportunities",
  yearsOfExperience: "3+",
};

export const aboutData = {
  heading: "Building Solutions That Scale",
  bio: [
    "I’m a software developer focused on mobile development, building fast, stable iOS and Android applications with React Native. Over the past three years at Argusoft, I’ve progressed from an entry-level engineer to a Solution Analyst by working deeply on clean architecture, cross-platform performance, and reliable software.",
    "React Native is my primary tool, and I enjoy solving the platform-specific challenges that arise across iOS and Android—from performance bottlenecks and lifecycle edge cases to native integrations and release stability.",
    "Beyond mobile, I work across the web stack with React and Vue.js on the frontend and Node.js on the backend. This broader perspective helps me understand how mobile applications fit into the larger system. I’m motivated by difficult engineering problems, continuous learning, and building software that remains dependable as it grows.",
  ],
  highlights: [
    { icon: "Briefcase", text: "3+ Years Professional Experience" },
    { icon: "MapPin", text: "Based in Gandhinagar, Gujarat" },
  ],
};

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Argusoft",
    companyUrl: "https://www.argusoft.com/",
    location: "Gandhinagar, Gujarat",
    period: "Jan 2024 - Present",
    type: "current",
    badge: null,
    responsibilities: [
      "Built and maintained full-stack web applications using React and Node.js, serving enterprise-grade features to production users.",
      "Developed and shipped native Android (Kotlin) and iOS (Swift) modules, integrating them with existing web services for a unified cross-platform experience.",
      "Implemented comprehensive test suites — unit tests for React components (Vitest/React Testing Library) and backend API validation (Mocha/Supertest) to ensure software reliability and prevent regressions.",
      "Designed RESTful APIs and integrated third-party services including payment gateways and push notification systems.",
      "Collaborated with cross-functional teams in agile sprints, conducting code reviews and driving CI/CD pipeline improvements.",
    ],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Argusoft",
    companyUrl: "https://www.argusoft.com/",
    location: "Gandhinagar, Gujarat",
    period: "July 2023 - Dec 2023",
    type: "past",
    badge: null,
    responsibilities: [
      "Developed responsive web interfaces with React and Tailwind CSS, following pixel-perfect designs from Figma.",
      "Contributed to backend services using Express.js and MongoDB, writing unit tests for every new API endpoint.",
      "Built a hybrid mobile feature using React Native that shipped to both Android and iOS app stores.",
    ],
  },
];

// To add preview images for the carousel:
// 1. Place screenshots in public/projects/ (e.g., public/projects/project-one-1.png)
// 2. Add paths to the "previews" array below
// 3. Set "liveUrl" to your deployed site URL
export const projectsData = [
  {
    id: 1,
    title: "Aradhna Marg — Devotional Website",
    projectType: "Independent Project",
    description:
      "An independently built Hindi and English devotional website for exploring bhajans, spiritual articles, festivals, deities, and other religious content.",
    purpose:
      "Make devotional content easier to browse and discover in Hindi and English.",
    whatIBuilt:
      "Built the public content experience, category and discovery flows, responsive UI, SEO metadata, and deployment for the live website.",
    technicalChallenge:
      "Organizing multilingual devotional content into clear, discoverable, and easy-to-navigate pages.",
    outcome:
      "A live devotional website available at https://aradhnamarg.com/",
    credentials: null,
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/sachinkumarverma/Aradhna-Marg",
    liveUrl: "https://aradhnamarg.com/",
    previews: [
      "/projects/project1-preview1.png",
      "/projects/project1-preview2.png",
    ],
  },
  {
    id: 2,
    title: "SkillNora",
    projectType: "Independent Project",
    description:
      "A full-stack learning platform featuring structured courses, interactive lecture players, role-based dashboards, and payment gateway integration.",
    purpose:
      "Build a modern web application for publishing educational courses and tracking individual student learning progress.",
    whatIBuilt:
      "Developed the Next.js frontend, course browsing and lecture player interfaces, role-based dashboards (student, instructor, admin), Express backend API, and Razorpay checkout workflow.",
    technicalChallenge:
      "Designing role-based access control and state synchronization between the Next.js frontend and Express/Supabase backend.",
    outcome:
      "A deployed full-stack web application with open-source repositories.",
    credentials: null,
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Supabase"],
    githubUrl: "https://github.com/sachinkumarverma/SkillNora",
    liveUrl: "https://skillnora.vercel.app/",
    previews: [
      "/projects/project2-preview1.png",
      "/projects/project2-preview2.png",
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
      "/projects/project3-preview1.png",
      "/projects/project3-preview2.png",
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
      "/projects/project4-preview1.png",
      "/projects/project4-preview2.png",
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
      "/projects/project5-preview1.png",
      "/projects/project5-preview2.png",
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
      "/projects/project6-preview1.png",
      "/projects/project6-preview2.png",
    ],
  },
];

export const skillsData = {
  categories: [
    {
      title: "Frontend",
      icon: "Monitor",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: "Code2",
      skills: ["Node.js", "Express.js", "REST API", "GraphQL", "WebSockets"],
    },
    {
      title: "Mobile",
      icon: "Smartphone",
      skills: ["React Native", "Android (Kotlin)", "iOS (Swift)", "Expo"],
    },
    {
      title: "Testing",
      icon: "FlaskConical",
      skills: ["Vitest", "React Testing Library", "Mocha", "Supertest", "Cypress"],
    },
    {
      title: "Databases",
      icon: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    },
    {
      title: "Tools & DevOps",
      icon: "Wrench",
      skills: ["Git/GitHub", "CI/CD", "Docker", "Figma", "Linux"],
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
