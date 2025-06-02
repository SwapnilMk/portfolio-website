import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/common/icons';
import { Button } from '@/components/ui/button';
import ChipContainer from '@/components/ui/chip-container';
import { ProjectInterface } from '@/config/projects';

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-transparent'>
      <div className='relative h-[200px] w-full'>
        <Image
          className='rounded-lg border border-gray-200 object-cover dark:border-gray-700'
          src={project.companyLogoImg}
          alt='img'
          fill
        />
      </div>
      <div className='space-y-3 pt-5'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {project.companyName}
        </h5>
        <p className='line-clamp-3 font-normal text-gray-700 dark:text-gray-400'>
          {project.shortDescription}
        </p>
        <div className='flex flex-wrap gap-2'>
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/project/${project.id}`}>
          <Button variant={'default'} className='mt-2'>
            Read more
            <Icons.chevronRight className='ml-1 w-4' />
          </Button>
        </Link>
      </div>
      <div className='absolute bottom-4 right-4 rounded-full border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-950'>
        {project.type === 'Personal Project' ? (
          <Icons.userFill className='h-4 w-4' />
        ) : (
          <Icons.work className='h-4 w-4' />
        )}
      </div>
    </div>
  );
}
