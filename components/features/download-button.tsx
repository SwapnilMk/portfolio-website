'use client';

import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

export default function DownloadCV() {
  return (
    <Button
      type='button'
      onClick={() => {
        // Ensure /public/resume.pdf exists so it's served at /resume.pdf
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.download = 'SwapnilMk-Resume.pdf';

        document.body.appendChild(link);
        link.click();
        link.remove();
      }}
    >
      <div className='flex items-center'>
        <DownloadIcon className='h-4 w-4' />
        <span className='ml-1 p-1 lg:inline'>Download CV</span>
      </div>
    </Button>
  );
}
