import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = `We built a legit business - but banks couldn't take the risk. It wasn't about the numbers; our industry was just too misunderstood. So we built the infrastructure ourselves — the financial heartbeat that kept us going when everything else flatlined. Now we use that same expertise to keep others flowing. Because if you're building a serious business, you deserve a partner that takes you seriously.`;

const words = FULL_TEXT.split(/(\s+)/);

const ScrollHighlightText: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <motion.p
      className="max-w-5xl mx-auto text-left px-4 md:px-8 leading-relaxed font-['IBM_Plex_Sans'] font-medium"
      style={{ fontSize: '3.8rem', lineHeight: 1.3, willChange: "color, transform" }}
    >
      {words.map((word, idx) => {
        if (/^\s+$/.test(word)) {
          return <span key={idx}>{word}</span>;
        }
        const isActiveOrBefore = idx <= activeIndex;

        return (
          <motion.span
            key={idx}
            initial={{ color: '#4A3A2E' }}
            animate={{
              color: isActiveOrBefore ? '#2B1E17' : '#4A3A2E',
              scale: isActiveOrBefore ? 1.05 : 1,
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ display: "inline-block", marginRight: '3px', cursor: 'default' }}
          >
            {word}
          </motion.span>
        );
      })}
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
    <section
      ref={containerRef}
      className="relative bg-white py-40 min-h-[90vh] flex items-center justify-center font-['IBM_Plex_Sans']"
    >
      <ScrollHighlightText activeIndex={activeIndex} />
    </section>
  );
};

export default StorySection;
