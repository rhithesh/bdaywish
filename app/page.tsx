"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-extrabold md:text-7xl drop-shadow-xl"
        >
          Happy Birthday Shashank 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-2xl font-light"
        >
          Wishing you a year full of growth, happiness, and massive success. 💫
        </motion.p>

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
  );
}
