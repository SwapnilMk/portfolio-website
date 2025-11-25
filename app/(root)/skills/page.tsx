import { Metadata } from 'next';

import PageContainer from '@/components/common/page-container';
import SkillsCard from '@/components/skills/skills-card';
import { pagesConfig } from '@/config/pages';
import { skills } from '@/config/skills';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkillsCard skills={skills} />
      </motion.div>
    </PageContainer>
  );
}
