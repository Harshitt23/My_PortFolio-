import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Full Stack Developer building scalable REST APIs and production web apps with the MERN stack, Next.js, and Microsoft Azure. Currently at Aaptaat Private Limited, working on backend services, enterprise API integrations, and Claude-based AI workflows. Hackathon winner (Chainlink, Monad Blitz) with 400+ LeetCode problems solved.`;

export const ABOUT_TEXT = HERO_CONTENT;

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Aaptaat Private Limited",
    location: "Gurgaon, Haryana",
    duration: "Jan 2026 – Present",
    highlights: [
      "Developed and optimized REST APIs for production workloads.",
      "Built scalable backend services and integrated enterprise third-party APIs.",
      "Integrated Claude-based AI workflows with backend APIs (MCP-aligned tool interactions).",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Remote",
    location: "",
    duration: "2024 – Present",
    highlights: [
      "Best project: Dabas EV CMS — admin auth, RBAC with JWT, and scalable REST APIs.",
      "Contributed to a platform supporting 5k+ EV users in India (4-developer team).",
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
      "Developed React modules and improved performance through debugging and optimization.",
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
    title: "Dabas EV CMS",
    image: project4,
    description:
      "Freelance CMS for Dabas EV — secure admin authentication, role-based access, and scalable APIs for content, media, and page management.",
    keyFeatures: [
      "JWT-based admin authentication & RBAC",
      "Scalable REST APIs for content & media",
      "Platform supporting 5k+ EV users in India",
      "Built with a 4-developer team",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "JWT",
      "REST APIs",
      "MongoDB",
      "Vercel",
    ],
    github: "https://github.com/Harshitt23/Dabas.EV",
    live: "https://dabas-m6ox1k1fe-harshitt23s-projects.vercel.app",
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
    live: "https://ai-summarizer-gvvduccbr-harshitt23s-projects.vercel.app",
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
    live: "https://bite-tok-frontend-252kg3z2u-harshitt23s-projects.vercel.app",
  },
  {
    title: "Student Knowledge Hub",
    image: project5,
    description:
      "Platform where students upload, explore, and access study notes, PYQs, and learning resources with search and filtering.",
    keyFeatures: [
      "Upload and browse notes, PYQs, and resources",
      "Search and filtering for quick discovery",
      "REST APIs and database-backed content management",
      "Scalable note-sharing for students",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
    github: "https://github.com/Harshitt23",
    live: "https://github.com/Harshitt23",
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
