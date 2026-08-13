import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-[#061925]/30 pointer-events-none">
      <motion.div
        className="h-full bg-[#88B8B3] origin-left shadow-[0_0_8px_rgba(136,184,179,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
