"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disparaît après 3 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Brume en arrière-plan */}
          <motion.div
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.6, 0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(17, 48, 143, 0.1) 20%, rgba(25, 17, 94, 0.8) 80%)",
              filter: "blur(20px)",
            }}
          />

          {/* Effet de fumée en mouvement */}
          <motion.div
            className="absolute w-64 h-64 bg-gray-400 opacity-20 rounded-full blur-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-56 h-56 bg-gray-500 opacity-15 rounded-full blur-3xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: [30, -30, 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Texte SACKO animé */}
          <motion.h1
            className="text-6xl text-[#F2A900] font-extrabold tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            SACKO
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
