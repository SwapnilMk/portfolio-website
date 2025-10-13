'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { SocialLinks } from '@/config/socials';

function SocialButton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)} {...props}>
      {SocialLinks.map((s) => {
        const Icon = s.icon;
        return (
          <Button
            key={s.name}
            className='flex-1'
            variant='outline'
            aria-label={`${s.name} — ${s.username}`}
            size='icon'
            onClick={() => window.open(s.link, '_blank', 'noopener,noreferrer')}
          >
            <Icon
              className='text-[#14171a] dark:text-primary'
              size={16}
              aria-hidden='true'
            />
          </Button>
        );
      })}
    </div>
  );
}

export { SocialButton };
