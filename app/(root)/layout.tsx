import { Icons } from '@/components/common/icons';
import { MainNav } from '@/components/common/main-nav';
import ModeToggle from '@/components/common/mode-toggle';
import { SiteFooter } from '@/components/common/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { routesConfig } from '@/config/routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container z-50 bg-background'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={routesConfig.mainNav} />
          <nav className='flex items-center gap-5'>
            <Link
              href={'https://github.com/SwapnilMk'}
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
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className='container flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
