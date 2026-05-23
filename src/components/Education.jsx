import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science",
      institution: "Graphic Era Hill University, Dehradun",
      duration: "2021 – 2025",
      percentage: "CGPA: 7.3",
      details:
        "Focused on computer programming, data structures, web development, and databases. Built MERN and Next.js projects with REST APIs and real-world deployments.",
    },
    {
      degree: "CBSE Class XII (PCM)",
      institution: "St. Mary's Sr. Sec. School, Haridwar",
      duration: "2021",
      percentage: "87%",
      details:
        "Specialized in Physics, Chemistry, and Mathematics, building a strong foundation in analytical thinking and problem solving.",
    },
  ];

  return (
    <div className="pb-24" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto relative border-l border-stone-700 pl-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-4"
          >
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-stone-900" />
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-stone-400 text-sm mb-1">{edu.institution}</p>
            <span className="text-stone-500 text-sm italic">{edu.duration}</span>
            <p className="text-stone-400 text-sm mt-1">{edu.percentage}</p>
            <p className="mt-2 text-stone-300 text-[15px] leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
