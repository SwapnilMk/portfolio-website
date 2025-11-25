import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { experience } from '@/config/experience';
import * as motion from 'framer-motion/client';

export default function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='relative w-full overflow-clip'
    >
      <Timeline data={experience} />
    </motion.div>
  );
}
