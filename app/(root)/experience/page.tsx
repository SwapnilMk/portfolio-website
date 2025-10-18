import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { experience } from '@/config/experience';

export default function ExperiencePage() {
  return (
    <div className='relative w-full overflow-clip'>
      <Timeline data={experience} />
    </div>
  );
}
