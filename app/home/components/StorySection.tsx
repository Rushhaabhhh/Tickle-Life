import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = `We built a legitimate business, but banks couldn't take the risk. It wasn't about the numbers. Our industry was simply misunderstood. So we built the infrastructure ourselves. The financial heartbeat that kept us alive when everything else flatlined. Now, we use that same expertise to keep others flowing. Because if you're building a serious business, You deserve a partner that takes you seriously.`;

const words = FULL_TEXT.split(/(\s+)/);

const ScrollHighlightText: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <motion.p
      className="max-w-5xl mx-auto text-left px-4 md:px-8 leading-relaxed inter-500"
      style={{ fontSize: '3.8rem', lineHeight: 1.3 }}
    >
      {words.map((word, idx) =>
        /^\s+$/.test(word) ? (
          <span key={idx}>{word}</span>
        ) : (
          <motion.span
            key={idx}
            animate={{ color: idx <= activeIndex ? 'var(--color-brand-900)' : 'var(--color-brand-700)' }}
            transition={{ duration: 0.25 }}
          >
            {word}
          </motion.span>
        )
      )}
    </motion.p>
  );
};

const StorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      const index = Math.floor(progress * words.length);

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial set

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white py-40 min-h-[90vh] flex items-center justify-center inter-400">
      <ScrollHighlightText activeIndex={activeIndex} />
    </section>
  );
};

export default StorySection;
