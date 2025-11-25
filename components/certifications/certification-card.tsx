'use client';

import { Certification } from '@/config/certifications';
import { Icons } from '@/components/common/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import Image from 'next/image';

interface CertificationCardProps {
  certification: Certification;
}

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function CertificationCard({
  certification
}: CertificationCardProps) {
  return (
    <Dialog>
      <motion.div
        whileHover={{ y: -5 }}
        className='group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md'
      >
        <div className='relative aspect-video w-full overflow-hidden bg-muted'>
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <div className='mb-4'>
            <h3 className='line-clamp-2 font-heading text-xl font-bold leading-tight tracking-tight'>
              {certification.title}
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              {certification.issuer} • {certification.date}
            </p>
          </div>
          <div className='mt-auto pt-4'>
            <DialogTrigger asChild>
              <button
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' }),
                  'w-full gap-2'
                )}
              >
                <Icons.externalLink className='h-4 w-4' />
                View Certificate
              </button>
            </DialogTrigger>
          </div>
        </div>
      </motion.div>
      <DialogContent className='max-w-4xl overflow-hidden p-0'>
        <div className='relative aspect-[4/3] w-full'>
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className='object-contain'
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
