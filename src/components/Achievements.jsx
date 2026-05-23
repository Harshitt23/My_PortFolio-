import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HACKATHON_WINS, OTHER_ACHIEVEMENTS } from "../constants";

const AchievementImage = ({ src, alt, className }) => {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop();

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900 text-center p-6 ${className}`}
      >
        <span className="text-5xl mb-3">🏆</span>
        <p className="text-stone-400 text-sm max-w-[200px]">
          Add photo as{" "}
          <code className="text-cyan-400 text-xs">{filename}</code>
          <br />
          in <code className="text-cyan-400 text-xs">public/achievements/</code>
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

const AchievementVideo = ({ src, poster, className }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <AchievementImage
        src={poster}
        alt="Monad hackathon"
        className={className}
      />
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
      onError={() => setFailed(true)}
    />
  );
};

const Lightbox = ({ item, onClose }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl hover:text-blue-400 z-10"
        aria-label="Close"
      >
        ×
      </button>
      {item.video ? (
        <video
          src={item.video}
          poster={item.image}
          className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
          onClick={(e) => e.stopPropagation()}
        />
      ) : imgFailed ? (
        <p className="text-stone-300 text-center px-6">
          Photo not found. Add{" "}
          <code className="text-cyan-400">{item.image.split("/").pop()}</code> to{" "}
          <code className="text-cyan-400">public/achievements/</code>
        </p>
      ) : (
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          src={item.image}
          alt={item.imageAlt}
          className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
          onError={() => setImgFailed(true)}
        />
      )}
      <p className="absolute bottom-6 text-center text-stone-300 text-lg px-4">
        {item.title}
        {item.prize ? ` · ${item.prize}` : ""}
      </p>
    </motion.div>
  );
};

const Achievements = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="pb-24" id="achievements">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Achievements 🏆
      </motion.h2>

      <p className="text-center text-stone-400 mb-10 px-4 max-w-2xl mx-auto">
        Hackathon wins, certificates, and highlights — click to view full size.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-16">
        {HACKATHON_WINS.map((win, index) => (
          <motion.article
            key={win.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-stone-800 bg-stone-900/40 overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow"
          >
            <button
              type="button"
              onClick={() => setLightbox(win)}
              className="w-full block cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
            >
              {win.video ? (
                <AchievementVideo
                  src={win.video}
                  poster={win.image}
                  className="w-full h-56 sm:h-64 object-cover object-center bg-black"
                />
              ) : (
                <AchievementImage
                  src={win.image}
                  alt={win.imageAlt}
                  className="w-full h-56 sm:h-64 object-cover object-center"
                />
              )}
              {win.video && (
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-stone-300">
                  Tap to enlarge
                </span>
              )}
            </button>
            <div className="p-5">
              <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white mb-2">
                {win.badge}
              </span>
              <h3 className="text-xl font-semibold text-white">{win.title}</h3>
              <p className="text-stone-400 mt-1">{win.prize}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="text-center text-2xl font-semibold text-stone-200 mb-8">
        Certifications & milestones
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {OTHER_ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-stone-800 bg-stone-900/40 overflow-hidden"
          >
            <button
              type="button"
              onClick={() =>
                setLightbox({ ...item, prize: null, imageAlt: item.imageAlt })
              }
              className="w-full block cursor-zoom-in"
            >
              <AchievementImage
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-44 object-contain object-center bg-stone-950"
              />
            </button>
            <div className="p-4">
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-stone-400 text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
