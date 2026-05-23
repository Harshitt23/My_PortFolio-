import { useState } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const PROFILE_PHOTOS = [
  "/profile.jpg",
  "/profile.jpeg",
  "/profile.png",
  "/profile.webp",
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HeroPhoto = ({ motionProps }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className="w-full max-w-[420px] aspect-square rounded-3xl border border-dashed border-stone-700 bg-stone-900/80 flex flex-col items-center justify-center p-8 text-center text-stone-400 mx-auto">
        <span className="text-5xl mb-4">📷</span>
        <p className="text-sm leading-relaxed">
          Add your photo as{" "}
          <code className="text-cyan-400">profile.JPG</code> in the{" "}
          <code className="text-cyan-400">public</code> folder, then refresh.
        </p>
      </div>
    );
  }

  return (
    <motion.img
      {...motionProps}
      src={PROFILE_PHOTOS[photoIndex]}
      alt="Harshit Sharma"
      className="w-full max-w-[420px] aspect-square object-cover border border-stone-900 rounded-3xl mx-auto shadow-xl"
      onError={() => {
        if (photoIndex + 1 < PROFILE_PHOTOS.length) {
          setPhotoIndex((i) => i + 1);
        } else {
          setMissing(true);
        }
      }}
    />
  );
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <HeroPhoto
              motionProps={{
                initial: { x: 100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 1, delay: 1.5 },
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-center mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-6xl"
            >
              Harshit Sharma
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 mt-4 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              MERN · Backend APIs · Azure · AI
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-6 py-3 mt-8 text-sm font-semibold text-stone-800 mb-10 shadow-md"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
                backgroundColor: "#f5f5f5",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
