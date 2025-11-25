import { Metadata } from 'next';

import PageContainer from '@/components/common/page-container';
import { ContactForm } from '@/components/forms/contact-form';
import { pagesConfig } from '@/config/pages';
import * as motion from 'framer-motion/client';

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
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex-1'
        >
          <ContactForm />
        </motion.div>
        <div className='flex flex-1 justify-center'></div>
      </div>
    </PageContainer>
  );
}
