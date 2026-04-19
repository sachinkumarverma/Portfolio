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
    { icon: "MapPin", text: "Based in Gandhinagar, Gujarat" },
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
    title: "ViewTube",
    description:
      "A high-performance, full-stack video sharing platform built with modern web technologies. ViewTube offers a seamless user experience, a robust admin ecosystem, and a premium design language.",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/sachinkumarverma/Viewtube",
    liveUrl: "https://viewtube-app.vercel.app/",
    previews: [
      "/projects/project1-preview1.png",
      "/projects/project1-preview2.png",
    ],
  },
  {
    id: 2,
    title: "ClipVora",
    description:
      "A full-stack media downloader that lets you save videos, images, and audio from popular social media platforms.",
    tags: ["React", "TypeScript", "Chrome Manifest V3"],
    githubUrl: "https://github.com/sachinkumarverma/ClipVora",
    liveUrl: "https://clipvora.vercel.app/",
    previews: [
      "/projects/project2-preview1.png",
      "/projects/project2-preview2.png",
    ],
  },
  {
    id: 3,
    title: "Snake Game",
    description:
      "A feature-rich, modern snake game built with React and Vite. Classic gameplay reimagined with levels, power-ups, combos, and a sleek dark UI.",
    tags: ["React", "Vite"],
    githubUrl: "https://github.com/sachinkumarverma/Snake_Game",
    liveUrl: "https://snake-game-sachinverma.vercel.app/",
    previews: [
      "/projects/project3-preview1.png",
      "/projects/project3-preview2.png",
    ],
  },
  {
    id: 4,
    title: "Tribute Page",
    description:
      "A tribute page dedicated to the Spiritual Orator Devkinandan Thakur Ji. This project showcases my ability to create visually appealing and well-structured web pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/sachinkumarverma/OIBSIP_TASKS/tree/main/Task_2_TributePage",
    liveUrl: "https://tribute-page-sachin.vercel.app/",
    previews: [
      "/projects/project4-preview1.png",
      "/projects/project4-preview2.png",
    ],
  },
  {
    id: 5,
    title: "Todo Web App",
    description:
      "A modern, responsive To-Do web application built with React and Vite. This project demonstrates my ability to create functional, user-friendly interfaces with clean code and modern design principles.",
    tags: ["React", "Vite"],
    githubUrl: "https://github.com/sachinkumarverma/OIBSIP_TASKS/tree/main/Task_3_ToDo_WebApp",
    liveUrl: "https://sachinverma.vercel.app/",
    previews: [
      "/projects/project5-preview1.png",
    ],
  },
  {
    id: 6,
    title: "Data Science",
    description:
      "Built multiple machine learning and deep learning projects including classification, decision trees, image processing, and neural networks using datasets like Iris and MNIST.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    githubUrl: "https://github.com/sachinkumarverma/LGMVIP-DataScience",
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
