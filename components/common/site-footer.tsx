import Link from 'next/link';
import * as React from 'react';

import { buttonVariants } from '@/components/ui/button';
import CustomTooltip from '@/components/ui/custom-tooltip';
import { SocialLinks } from '@/config/socials';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/common/icons';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        'border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
            © {new Date().getFullYear()} {siteConfig.authorName}. All rights
            reserved.
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <Link
            href='/contact'
            className='text-sm font-medium underline-offset-4 hover:underline'
          >
            Contact
          </Link>
          <Link
            href='/projects'
            className='text-sm font-medium underline-offset-4 hover:underline'
          >
            Projects
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target='_blank'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'sm'
                  }),
                  'h-8 w-8 px-0'
                )}
              >
                <item.icon className='h-4 w-4' />
                <span className='sr-only'>{item.username}</span>
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
      <div className='container flex justify-center pb-8'>
        <p className='text-xs text-muted-foreground'>
          Built with{' '}
          <span className='font-semibold text-foreground'>Next.js</span>,{' '}
          <span className='font-semibold text-foreground'>Shadcn UI</span> &{' '}
          <span className='font-semibold text-foreground'>Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
