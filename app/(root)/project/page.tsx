import { Metadata } from 'next';

import PageContainer from '@/components/common/page-container';
import ProjectCard from '@/components/projects/project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Projects } from '@/config/projects';
import { pagesConfig } from '@/config/pages';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description
};

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === 'personal') {
    projectArr = projectArr.filter((val) => val.type === 'Personal Project');
  } else if (tabVal === 'professional') {
    projectArr = projectArr.filter((val) => val.type === 'Professional');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='static mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3'
    >
      {projectArr.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function ProjectPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <Tabs defaultValue='all' className='w-full'>
        <TabsList className='conatiner grid max-w-[30rem] grid-cols-3'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='personal'>Personal</TabsTrigger>
          <TabsTrigger value='professional'>Professional</TabsTrigger>
        </TabsList>
        <TabsContent value='all' className='w-full'>
          {renderContent('all')}
        </TabsContent>
        <TabsContent value='professional'>
          {renderContent('professional')}
        </TabsContent>
        <TabsContent value='personal'>{renderContent('personal')}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}
