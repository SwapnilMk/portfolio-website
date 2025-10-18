'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShimmerButton } from '../ui/shimmer-button';

export default function HeroButton() {
  return (
    <ShimmerButton
      onClick={() => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className='lg:text-md whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10'>
        See What I Do
      </span>
      <motion.div
        className='ml-2'
        animate={{ y: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <ArrowDown className='!h-5 !w-5' />
      </motion.div>
    </ShimmerButton>
  );
}
