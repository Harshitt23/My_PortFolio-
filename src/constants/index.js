import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Full Stack Developer building scalable REST APIs and production web apps with the MERN stack, Next.js, and Microsoft Azure. Currently at NIIT Limited as an Associate Software Engineer, working on Salesforce CRM administration, data operations, and enterprise platform workflows. Hackathon winner (Chainlink, Monad Blitz) with 400+ LeetCode problems solved.`;

export const ABOUT_TEXT = HERO_CONTENT;

export const EXPERIENCE = [
  {
    role: "Associate Software Engineer",
    company: "NIIT Limited",
    location: "Gurgaon, Haryana",
    duration: "June 2026 – Present",
    highlights: [
      "Working on automations and workflows, leveraging skills in Salesforce and Python to enhance system functionality",
      "Handling end-to-end data operations including bulk imports, exports, and data quality assurance using Salesforce Data Loader",
      "Assisting in Salesforce customization including custom objects, fields, validation rules, and flows",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Aaptaat Private Limited",
    location: "Gurgaon, Haryana",
    duration: "Jan 2026 – May 2026",
    highlights: [
      "Developed and optimized REST APIs for production workloads",
      "Built scalable backend services and integrated enterprise third-party APIs",
      "fixed bugs and issues in the codebase, including user stories and features",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Remote",
    location: "",
    duration: "2024 – Present",
    highlights: [
      "Best project: Dabas EV CMS — admin auth, RBAC with JWT, and scalable REST APIs",
      "Contributed to a platform supporting 5k+ EV users in India (4-developer team)",
    ],
  },
];

export const INTERNSHIPS = [
  {
    role: "Full Stack Developer Intern",
    company: "Kaizen Prospecting LLP",
    duration: "",
    highlights: ["Built MERN stack web applications during a 3-month offline internship."],
  },
  {
    role: "Frontend Developer Intern",
    company: "OctaNet Private Solutions",
    duration: "",
    highlights: [
      "Developed React modules and improved performance through debugging and optimization",
    ],
  },
];

export const HACKATHON_WINS = [
  {
    title: "Chainlink Hackathon",
    badge: "Winner",
    prize: "$4,000 prize",
    image: "/achievements/chainlink-hackathon.jpg",
    imageAlt: "Chainlink Hackathon winner",
  },
  {
    title: "Monad Blitz Hackathon Delhi",
    badge: "Winner",
    prize: "$1,000 prize",
    image: "/achievements/monad-blitz.jpg",
    video: "/achievements/monad-video.mov",
    imageAlt: "Monad Blitz Hackathon Delhi winner",
  },
];

export const OTHER_ACHIEVEMENTS = [
  {
    title: "100xDevs",
    description: "100xDevs certification",
    image: "/achievements/100xdevs.png",
    imageAlt: "100xDevs certificate",
  },
  {
    title: "LeetCode",
    description: "400+ Data Structures & Algorithms problems solved",
    image: "/achievements/leetcode.png",
    imageAlt: "LeetCode profile milestone",
  },
  {
    title: "IBM Certification",
    description: "IBM Web Development Certification",
    image: "/achievements/ibm-cert.png",
    imageAlt: "IBM Web Development certificate",
  },
];

export const PROJECTS = [
  {
    title: "AI Interview Collaboration Platform",
    image: project1,
    description:
      "Real-time AI-powered platform for technical interviews and collaborative coding — featuring an intelligent interviewer bot, live multi-user code sessions, and instant code execution across multiple languages.",
    keyFeatures: [
      "AI-driven interviewer with real-time code evaluation and feedback",
      "Live collaborative coding with Monaco Editor synced via Socket.IO",
      "Multi-language code execution powered by Piston API",
      "JWT + bcrypt authentication with PostgreSQL & Prisma ORM",
      "Full-stack TypeScript — Next.js 16 (App Router) + Express 5 backend",
    ],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Monaco Editor",
      "Zustand",
      "Node.js",
      "Express 5",
      "Socket.IO",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Piston API",
      "Vercel",
      "Render",
      "Supabase",
    ],
    github: "https://github.com/Harshitt23/Ai-interview-Collaboration-platform",
    live: "https://ai-interview-collaboration-platform.vercel.app",
  },
  {
    title: "Kairo – Multi-Tenant Project Management SaaS",
    image: project4,
    description:
      "Production-shaped, multi-tenant project-management SaaS (Linear/Jira-style) — workspaces → teams → projects → issues, with a real-time drag-and-drop board, RBAC enforced client and server, and Stripe billing.",
    keyFeatures: [
      "Postgres row-level security backs tenant isolation on every request",
      "Rotating refresh tokens with theft/reuse detection, RBAC shared client + server",
      "Real-time optimistic Kanban board synced via Redis-backed Socket.IO",
      "Background jobs (BullMQ) for notifications/email; presigned S3/R2 uploads",
      "Stripe Checkout + webhooks with graceful FREE-plan fallback",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "BullMQ",
      "Stripe",
      "Turborepo",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/Harshitt23/Ai-saas-multi-tenant",
    live: "https://kairo-multi-tenant-web.vercel.app",
  },
  {
    title: "AI Article Summarizer",
    image: project3,
    description:
      "AI web app that generates summaries of long articles using GPT-4, with Q&A, multilingual translation, and fact-checking.",
    keyFeatures: [
      "LLM-powered summarization in one click",
      "Q&A, translation, and fact-checking",
      "RTK Query for efficient API data fetching",
      "Modern React UI with copy-to-clipboard",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "OpenAI GPT-4",
    ],
    github: "https://github.com/Harshitt23/Ai-Summarizer",
    live: "https://ai-summarizer-nu-six.vercel.app",
  },
  {
    title: "BiteTok – Food Video Platform",
    image: project2,
    description:
      "Full-stack social platform for sharing short food videos with secure auth, vertical feeds, and partner analytics.",
    keyFeatures: [
      "TikTok-style vertical video feed",
      "JWT & bcrypt authentication",
      "Partner dashboards and engagement analytics",
      "ImageKit-powered media CDN",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "ImageKit",
    ],
    github: "https://github.com/Harshitt23/BiteTok",
    live: "https://bite-tok-frontend.vercel.app",
  },
];

export const SKILL_CATEGORIES = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "Python",
    "SQL",
    "PHP",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Redux Toolkit",
    "RTK Query",
    "Bootstrap",
    "Framer Motion",
    "Vite",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "JWT",
    "API Integration",
    "Microservices",
    "Multer",
  ],
  Database: ["MongoDB", "MySQL", "Firebase", "Mongoose"],
  "System Design": [
    "Authentication Systems",
    "REST Architecture",
    "REST API Design",
    "Client-Server Architecture",
    "Scalable Web Applications",
    "State Management",
    "Database Optimization",
    "Caching",
    "Scalability",
  ],
  "Cloud & DevOps": [
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Render",
    "Docker (basic)",
    "Microsoft Azure",
  ],
  "AI & Tools": [
    "OpenAI APIs",
    "OpenAI GPT-4",
    "ChatGPT APIs",
    "Claude",
    "Prompt Engineering",
    "Postman",
    "Figma",
    "Canva",
    "VS Code",
    "Cursor AI",
    "npm",
    "Webpack",
    "GitHub Copilot",
    "RapidAPI",
    "ImageKit",
    "Axios",
    "Salesforce",
  ],
};

export const CONTACT = {
  address: "Subhash Nagar, Haridwar",
  phoneNo: "+91 7818852886",
  email: "harshitr2308@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshitcode/",
  leetcode: "https://leetcode.com/u/Harshitt23/",
  github: "https://github.com/Harshitt23",
};

// service id of emailjs->gmail:- service_lx88kz9
//Template ID:template_9ees3ur
// public key N9Wlq0Al8WnUc6b5y
