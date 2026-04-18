export const personalInfo = {
  name: "Sachin Kumar Verma",
  initials: "SV",
  title: "FULL STACK DEVELOPER",
  subtitle: "React & Node.js Specialist | Mobile & Web",
  description:
    "Specializing in React, Node.js, and cross-platform mobile development. I build performant, test-driven applications with clean architecture and modern best practices.",
  location: "India",
  email: "sachinv1410@gmail.com",
  github: "https://github.com/sachinkumarverma",
  linkedin: "https://linkedin.com/in/sachin-kumar-verma",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  yearsOfExperience: "3+",
};

export const aboutData = {
  heading: "Building Solutions That Scale",
  bio: [
    "As a software engineer deeply passionate about modern web and mobile technologies, I specialize in building robust, scalable applications across React, Node.js, and native Android & iOS platforms.",
    "My approach to engineering insists on rigorous test coverage — from unit testing React components with Vitest to validating backend APIs with Mocha and Supertest. Clean architecture and quality code aren't optional, they're the foundation.",
    "I thrive in agile environments, bridging web and mobile ecosystems to deliver seamless cross-platform experiences that users love.",
  ],
  highlights: [
    { icon: "MapPin", text: "Based in India" },
    { icon: "Award", text: "Open Source Contributor" },
  ],
};

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Argusoft",
    companyUrl: "#",
    location: "Gandhinagar, Gujarat",
    period: "Jan 2024 - Present",
    type: "current",
    badge: null,
    responsibilities: [
      "Built and maintained full-stack web applications using React and Node.js, serving enterprise-grade features to production users.",
      "Developed and shipped native Android (Kotlin) and iOS (Swift) modules, integrating them with existing web services for a unified cross-platform experience.",
      "Architected comprehensive test suites — unit tests for React components (Vitest/React Testing Library) and backend API validation (Mocha/Supertest), achieving 85%+ code coverage.",
      "Designed RESTful APIs and integrated third-party services including payment gateways and push notification systems.",
      "Collaborated with cross-functional teams in agile sprints, conducting code reviews and driving CI/CD pipeline improvements.",
    ],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Argusoft",
    companyUrl: "#",
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
    title: "Project One",
    description:
      "A full-stack web application with modern UI, authentication, and real-time features.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/sachin/project-one",
    liveUrl: "https://project-one.vercel.app",
    previews: [
      "/projects/project-one-1.svg",
      "/projects/project-one-2.svg",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A responsive dashboard application with data visualization and analytics.",
    tags: ["React", "TypeScript", "Chart.js"],
    githubUrl: "https://github.com/sachin/project-two",
    liveUrl: "https://project-two.vercel.app",
    previews: [
      "/projects/project-two-1.svg",
      "/projects/project-two-2.svg",
    ],
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "An open-source CLI tool for automating development workflows.",
    tags: ["Node.js", "CLI"],
    githubUrl: "https://github.com/sachin/project-three",
    liveUrl: null,
    previews: [],
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "A real-time chat application with WebSocket support and end-to-end encryption.",
    tags: ["React", "Socket.io", "Express"],
    githubUrl: "https://github.com/sachin/project-four",
    liveUrl: "https://project-four.vercel.app",
    previews: [
      "/projects/project-four-1.svg",
      "/projects/project-four-2.svg",
    ],
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "A mobile-first e-commerce platform with payment integration.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/sachin/project-five",
    liveUrl: "https://project-five.vercel.app",
    previews: [
      "/projects/project-five-1.svg",
    ],
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "A task management app with drag-and-drop, notifications, and team collaboration.",
    tags: ["Vue.js", "Firebase"],
    githubUrl: "https://github.com/sachin/project-six",
    liveUrl: null,
    previews: [],
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
