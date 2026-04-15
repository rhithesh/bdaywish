"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypingText from "@/components/typing";
import MusicPlayer from "@/components/music";

export default function BirthdayPage() {

  const triggerConfetti = async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex items-center justify-center p-6 text-white">
      
      <MusicPlayer />

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">

        {/* Image */}
        <motion.img
          src="/PHOTO.jpg"
          alt="Us"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-40 h-40 md:w-56 md:h-56   border-2 border-white shadow-xl"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: [1, 1.08, 1, 1.12, 1],
            }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
            className="text-3xl md:text-7xl font-extrabold drop-shadow-xl"
          >
            Happy Birthday my Dear Wife 🎉
          </motion.h1>

          <TypingText />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-10"
          >
            <Button
              className="rounded-2xl px-8 py-4 text-xl font-semibold shadow-xl bg-white text-purple-700 hover:scale-105 transition"
              onClick={triggerConfetti}
            >
              Celebrate 🎂
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}