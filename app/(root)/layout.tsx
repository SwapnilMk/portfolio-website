'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/common/icons';
import { MainNav } from '@/components/common/main-nav';
import { SiteFooter } from '@/components/common/site-footer';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { buttonVariants } from '@/components/ui/button';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { routesConfig } from '@/config/routes';
import { cn } from '@/lib/utils';
import Preloader from '@/components/features/preloader';

import { ScrollProgress } from '@/components/ui/scroll-progress';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className='flex min-h-screen flex-col'>
          <ScrollProgress />
          <header
            className={cn(
              'container sticky top-0 z-50 bg-background transition-transform duration-300',
              isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            )}
          >
            <div className='flex h-20 items-center justify-between py-6'>
              <MainNav items={routesConfig.mainNav} />
              <nav className='flex items-center gap-5'>
                <Link
                  href='https://github.com/SwapnilMk'
                  target='_blank'
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      size: 'sm'
                    }),
                    'h-8 w-8 px-0'
                  )}
                >
                  <Icons.gitHub className='h-5 w-5' />
                </Link>
                <AnimatedThemeToggler />
              </nav>
            </div>
          </header>
          <div className='cursor-none'>
            <SmoothCursor />
            <main className='container flex-1'>{children}</main>
          </div>
          <SiteFooter />
        </div>
      )}
    </>
  );
}
