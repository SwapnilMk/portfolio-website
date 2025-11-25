import { Metadata } from 'next';
import Link from 'next/link';

import PageContainer from '@/components/common/page-container';
import { ContactForm } from '@/components/forms/contact-form';
import { pagesConfig } from '@/config/pages';
import * as motion from 'framer-motion/client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/common/icons';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className='flex flex-col gap-12 py-12 lg:flex-row lg:gap-24'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex-1'
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-1 flex-col justify-center space-y-8'
        >
          <div className='rounded-2xl border bg-card p-8 text-card-foreground shadow-sm'>
            <h3 className='mb-4 text-2xl font-bold'>
              Let&apos;s build something amazing!
            </h3>
            <p className='mb-6 text-muted-foreground'>
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                  <Icons.gmail className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm font-medium'>Email</p>
                  <p className='text-sm text-muted-foreground'>
                    {siteConfig.email}
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <Link
                href='mailto:mswapnil218@gmail.com'
                target='_blank'
                className={cn(buttonVariants({ size: 'lg' }), 'w-full gap-2')}
              >
                <Icons.gmail className='h-4 w-4' />
                Mail me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}
