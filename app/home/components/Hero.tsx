'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 inter-400">
      <div
        className="border p-8 max-w-7xl w-full mx-4 flex flex-col items-center"
        style={{ borderColor: "rgba(74, 58, 46, 0.3)" }}
      >
        <motion.div
          className="relative z-10 w-full max-w-6xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.h1
            className="mx-auto leading-tight mb-12 max-w-full"
            style={{ 
              fontSize: "clamp(1.5rem, 8vw, 4.5rem)",
              color: '#2B1E17'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            You&apos;re probably overpaying for payments.
          </motion.h1>
        </motion.div>
      </div>

      <div
        className="p-8 max-w-7xl w-full mx-4 mt-8 flex flex-col items-center"
        style={{ borderColor: "rgba(74, 58, 46, 0.3)" }}
      >
        <motion.div
          className="relative z-10 w-full max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-8 inter-400"
            style={{ color: '#4A3A2E' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            Try our calculator to see what you could be paying.
          </motion.p>
          <motion.button
            onClick={() => router.push('/')}
            className="bg-[#2B1E17] text-white px-10 py-4 rounded-full text-base inter-500 hover:bg-[#4A3A2E] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Try Calculator →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
