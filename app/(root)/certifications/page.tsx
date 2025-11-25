import { Metadata } from 'next';
import PageContainer from '@/components/common/page-container';
import CertificationCard from '@/components/certifications/certification-card';
import { certifications } from '@/config/certifications';
import { pagesConfig } from '@/config/pages';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CertificationsPage() {
  return (
    <PageContainer
      title={pagesConfig.certifications.title}
      description={pagesConfig.certifications.description}
    >
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {certifications.map((cert, index) => (
          <motion.div key={index} variants={item}>
            <CertificationCard certification={cert} />
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}
