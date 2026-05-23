import { motion } from "framer-motion";
import { EXPERIENCE, INTERNSHIPS } from "../constants";

const TimelineEntry = ({ entry, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
    viewport={{ once: true }}
    className="mb-10 ml-4"
  >
    <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-stone-900" />
    <h3 className="text-xl font-semibold text-white">{entry.role}</h3>
    <p className="text-stone-400 text-sm mb-1">
      {entry.company}
      {entry.location ? ` — ${entry.location}` : ""}
    </p>
    {entry.duration && (
      <span className="text-stone-500 text-sm italic">{entry.duration}</span>
    )}
    <ul className="mt-3 list-disc list-inside space-y-1 text-stone-300 text-[15px] leading-relaxed">
      {entry.highlights.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

export const Experience = () => {
  return (
    <div className="pb-24" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative border-l border-stone-700 pl-6">
        {EXPERIENCE.map((entry, index) => (
          <TimelineEntry key={index} entry={entry} index={index} />
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-2xl font-semibold text-stone-200 mt-16 mb-8"
      >
        Internships
      </motion.h3>

      <div className="max-w-4xl mx-auto relative border-l border-stone-700 pl-6">
        {INTERNSHIPS.map((entry, index) => (
          <TimelineEntry key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
