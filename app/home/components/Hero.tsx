'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui';

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 inter-400">
      <div className="border border-brand p-8 max-w-7xl w-full mx-4 flex flex-col items-center">
        <motion.div
          className="relative z-10 w-full max-w-6xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.h1
            className="mx-auto leading-tight mb-12 max-w-full text-brand text-[clamp(1.5rem,8vw,4.5rem)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            You&apos;re probably overpaying for payments.
          </motion.h1>
        </motion.div>
      </div>

      <div className="p-8 max-w-7xl w-full mx-4 mt-8 flex flex-col items-center">
        <motion.div
          className="relative z-10 w-full max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-8 inter-400 text-brand-muted"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            Try our calculator to see what you could be paying
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <Button size="lg" className="hover:scale-105 cursor-pointer" aria-label="Try calculator" onClick={() => router.push('/')}>
              Try Calculator
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
