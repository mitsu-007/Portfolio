import React from 'react';
import { motion } from 'motion/react';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Top Right Floating Circle */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#88B8B3]/10 to-[#527779]/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle Left Floating Soft Geometric Shape */}
      <motion.div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D2D7D8]/10 to-[#07323D]/10 blur-2xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Bottom Right Subtle Ring */}
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full border border-[#88B8B3]/10 blur-xs"
        animate={{
          rotate: [0, 360],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hero Accent Floating Line Grid */}
      <svg
        className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-10 stroke-[#527779]"
        fill="none"
        viewBox="0 0 1000 600"
      >
        <motion.path
          d="M0,100 Q250,50 500,200 T1000,100"
          strokeWidth="1.5"
          animate={{
            d: [
              "M0,100 Q250,50 500,200 T1000,100",
              "M0,120 Q250,70 500,180 T1000,120",
              "M0,100 Q250,50 500,200 T1000,100",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
