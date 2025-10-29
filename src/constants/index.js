import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `A passionate Full Stack Developer specializing in the MERN stack and Next.js. I love crafting scalable, high-performance web applications that deliver seamless user experiences. With hands-on experience in React.js, Next.js, Node.js, and MongoDB, I focus on building clean, efficient, and production-ready solutions. I also have solid knowledge of System Design and DevOps, and I’m deeply interested in exploring the world of Web3 and decentralized technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion for building efficient, user-friendly, and scalable web applications. With strong experience in React.js, Next.js, Node.js, and MongoDB, I specialize in creating modern, high-performance solutions that blend functionality with great design. My journey in web development started with curiosity about how the web works and has grown into a constant pursuit of learning and innovation. I have solid knowledge of System Design and DevOps, and I’m also exploring Web3 technologies to stay ahead in the evolving tech landscape. Outside of coding, I love photography, fitness, and discovering new tools that push creative boundaries.`;

export const PROJECTS = [

  {
    title: "AI Summarizer using GPT-4.0",
    image: project3,
    description:
      "AI Summarizer lets you generate concise summaries of long articles in one click, powered by OpenAI. It features Q&A, translation, fact-checking, and a modern UI built with React + Redux Toolkit.",
    keyFeatures: [
      "AI-Powered Summarization",
      "Features like - Question & Answer, Fact Checking and Translation",
      "Modern UI with Copy to Clipboard Functionality",
      "Advanced RTK Query Integration",
    ],
    technologies: ["React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "OpenAI GPT-4", "Rapid API"],
    github: "https://github.com/Harshitt23/Ai-Summarizer",
    live: "https://ai-summarizer-gvvduccbr-harshitt23s-projects.vercel.app",
},  
{
    title: "FitNFoods",
    image: project1,
    description:
      "A beautiful web application showcasing fashion inspiration and delicious food recipes, built with Express.js and modern web technologies.",
    keyFeatures: [
      "Food and fashion galleries with responsive design",
      "Interactive 'Cute Runner' mini game",
      "Photobooth with filters and stickers",
      "Upload and share your own posts",
      "Dynamic video backgrounds for immersive experience",
    ],
    technologies: ["Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Multer", "Animate.css", "Vercel"],
    github: "https://github.com/Harshitt23/fitnfoods",
    live: "https://fitnfoods-4yafm5tbi-harshitt23s-projects.vercel.app",
  },
  {
    title: "BiteTOk",
    image: project2,
    description:
      "A TikTok-style food video platform built with React and Node.js. Share, discover, and connect over food content with vertical video feeds, likes, and restaurant profiles.",
    keyFeatures: [
      "Vertical video feed with auto-play",
      "User profiles and secure authentication",
      "Content creation for food partners",
      "Analytics dashboard for engagement tracking",
      "Direct customer contact for food partners",
      "ImageKit-powered media storage and CDN",
    ],
    technologies: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "ImageKit", "Multer", "Axios", "CSS3"],
    github: "https://github.com/Harshitt23/BiteTok",
    live: "https://bite-tok-frontend-252kg3z2u-harshitt23s-projects.vercel.app",
  },
  {
    title: "Dabas.EV [Currently Working]",
    image: project4,
    description:
      "Personal Freelancing Project Work.",
    keyFeatures: [
      "Modern UI Design",
      "Next.js Architecture",
      "Interactive About Section",
      "Fully Responsive",
    ],
    technologies: ["Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Framer motion", "Animate.css", "Vercel"],
    github: "https://github.com/Harshitt23/Dabas.EV",
    live: "https://dabas-m6ox1k1fe-harshitt23s-projects.vercel.app",
  },
];

export const CONTACT = {
  address: "Subhash Nagar, Haridwar",
  phoneNo: "+91 7828852886 ",
  email: "Harshitr2308@gmail.com",
};

// service id of emailjs->gmail:- service_lx88kz9
//Template ID:template_9ees3ur
// public key N9Wlq0Al8WnUc6b5y