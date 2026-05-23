import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiGithub,
  SiTypescript,
  SiVercel,
  SiOpenai,
  SiNextdotjs,
  SiCplusplus,
  SiPython,
  SiBootstrap,
  SiFirebase,
  SiRedux,
  SiJsonwebtokens,
  SiAxios,
  SiMysql,
  SiMongoose,
  SiNetlify,
  SiRender,
  SiDocker,
  SiFigma,
  SiVisualstudiocode,
  SiNpm,
  SiWebpack,
  SiPhp,
  SiMicrosoftazure,
  SiSalesforce,
  SiFramer,
  SiVite,
  SiRedis,
} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { SKILL_CATEGORIES } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TECH_ICONS = {
  JavaScript: { Icon: SiJavascript, color: "text-yellow-400", duration: 3 },
  TypeScript: { Icon: SiTypescript, color: "text-blue-500", duration: 2.4 },
  Java: { Icon: FaJava, color: "text-red-500", duration: 2.5 },
  "C++": { Icon: SiCplusplus, color: "text-blue-400", duration: 2.5 },
  Python: { Icon: SiPython, color: "text-yellow-300", duration: 2.7 },
  SQL: { Icon: SiMysql, color: "text-sky-400", duration: 2.6 },
  PHP: { Icon: SiPhp, color: "text-indigo-400", duration: 2.6 },
  "React.js": { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2 },
  "Next.js": { Icon: SiNextdotjs, color: "text-white", duration: 2.1 },
  HTML5: { Icon: RiHtml5Fill, color: "text-orange-500", duration: 2.2 },
  CSS3: { Icon: RiCss3Fill, color: "text-blue-500", duration: 2.3 },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "text-sky-400", duration: 2.5 },
  Redux: { Icon: SiRedux, color: "text-purple-500", duration: 2.7 },
  "Redux Toolkit": { Icon: SiRedux, color: "text-purple-400", duration: 2.75 },
  "RTK Query": { Icon: SiRedux, color: "text-violet-400", duration: 2.8 },
  Bootstrap: { Icon: SiBootstrap, color: "text-purple-400", duration: 2.6 },
  "Framer Motion": { Icon: SiFramer, color: "text-pink-400", duration: 2.7 },
  Vite: { Icon: SiVite, color: "text-purple-400", duration: 2.6 },
  "Node.js": { Icon: FaNodeJs, color: "text-green-500", duration: 3 },
  "Express.js": { Icon: SiExpress, color: "text-gray-300", duration: 2.8 },
  "REST APIs": { Icon: SiExpress, color: "text-emerald-400", duration: 2.7 },
  "JWT Authentication": { Icon: SiJsonwebtokens, color: "text-amber-400", duration: 2.5 },
  JWT: { Icon: SiJsonwebtokens, color: "text-yellow-500", duration: 2.5 },
  "API Integration": { Icon: SiAxios, color: "text-indigo-400", duration: 2.7 },
  Microservices: { Icon: SiMicrosoftazure, color: "text-cyan-300", duration: 2.8 },
  Multer: { Icon: FaNodeJs, color: "text-stone-400", duration: 2.8 },
  MongoDB: { Icon: SiMongodb, color: "text-green-600", duration: 2.5 },
  MySQL: { Icon: SiMysql, color: "text-blue-400", duration: 2.6 },
  Firebase: { Icon: SiFirebase, color: "text-amber-400", duration: 2.6 },
  Mongoose: { Icon: SiMongoose, color: "text-red-500", duration: 2.6 },
  "Authentication Systems": { Icon: SiJsonwebtokens, color: "text-amber-300", duration: 2.5 },
  "REST Architecture": { Icon: SiExpress, color: "text-teal-400", duration: 2.6 },
  "REST API Design": { Icon: SiExpress, color: "text-teal-300", duration: 2.6 },
  "Database Optimization": { Icon: SiMongodb, color: "text-green-400", duration: 2.5 },
  Caching: { Icon: SiRedis, color: "text-red-400", duration: 2.6 },
  Scalability: { Icon: SiMicrosoftazure, color: "text-violet-300", duration: 2.7 },
  "Client-Server Architecture": { Icon: FaNodeJs, color: "text-green-400", duration: 2.7 },
  "Scalable Web Applications": { Icon: SiVercel, color: "text-violet-300", duration: 2.7 },
  "State Management": { Icon: SiRedux, color: "text-violet-400", duration: 2.8 },
  Git: { Icon: SiGit, color: "text-red-500", duration: 2.5 },
  GitHub: { Icon: SiGithub, color: "text-gray-400", duration: 2.6 },
  Vercel: { Icon: SiVercel, color: "text-white", duration: 2.4 },
  Netlify: { Icon: SiNetlify, color: "text-teal-400", duration: 2.5 },
  Render: { Icon: SiRender, color: "text-white", duration: 2.5 },
  "Docker (basic)": { Icon: SiDocker, color: "text-blue-400", duration: 2.6 },
  "Microsoft Azure": { Icon: SiMicrosoftazure, color: "text-blue-500", duration: 2.4 },
  "OpenAI APIs": { Icon: SiOpenai, color: "text-emerald-300", duration: 2.5 },
  "OpenAI GPT-4": { Icon: SiOpenai, color: "text-emerald-400", duration: 2.5 },
  Claude: { Icon: SiOpenai, color: "text-orange-300", duration: 2.6 },
  Postman: { Icon: SiPostman, color: "text-orange-400", duration: 2.3 },
  Figma: { Icon: SiFigma, color: "text-pink-400", duration: 2.5 },
  "VS Code": { Icon: SiVisualstudiocode, color: "text-blue-400", duration: 2.2 },
  "ChatGPT APIs": { Icon: SiOpenai, color: "text-green-300", duration: 2.5 },
  npm: { Icon: SiNpm, color: "text-red-400", duration: 2.4 },
  Webpack: { Icon: SiWebpack, color: "text-sky-300", duration: 2.6 },
  "GitHub Copilot": { Icon: SiGithub, color: "text-white", duration: 2.5 },
  RapidAPI: { Icon: SiPostman, color: "text-blue-300", duration: 2.6 },
  ImageKit: { Icon: SiVercel, color: "text-sky-300", duration: 2.5 },
  Axios: { Icon: SiAxios, color: "text-indigo-300", duration: 2.7 },
  Salesforce: { Icon: SiSalesforce, color: "text-sky-400", duration: 2.7 },
};

const Technologies = () => {
  const tabs = Object.keys(SKILL_CATEGORIES);
  const [activeCategory, setActiveCategory] = useState(tabs[0]);

  const skills = SKILL_CATEGORIES[activeCategory];
  const withIcons = skills
    .map((name) => ({ name, ...TECH_ICONS[name] }))
    .filter((item) => item.Icon);
  const textOnly = skills.filter((name) => !TECH_ICONS[name]);

  return (
    <div className="pb-24" id="Skills">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <div className="flex justify-center flex-wrap gap-3 mb-10 px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCategory(tab)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === tab
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-10"
      >
        {withIcons.map(({ Icon, name, color, duration }) => (
          <motion.div
            key={name}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <Icon className={`text-6xl sm:text-7xl ${color}`} />
            <p className="mt-3 text-center text-sm sm:text-lg font-medium text-gray-300 max-w-[120px]">
              {name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {textOnly.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
          {textOnly.map((name) => (
            <span
              key={name}
              className="rounded-full border border-stone-700 bg-stone-900/60 px-4 py-2 text-sm text-stone-300"
            >
              {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Technologies;
