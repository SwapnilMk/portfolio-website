'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className='fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
      style={{ scaleX }}
    />
  );
}
