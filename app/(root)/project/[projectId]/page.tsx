import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Icons } from '@/components/common/icons';
import ProjectDescription from '@/components/projects/project-description';
import { buttonVariants } from '@/components/ui/button';
import ChipContainer from '@/components/ui/chip-container';
import CustomTooltip from '@/components/ui/custom-tooltip';
import { Projects } from '@/config/projects';
import { siteConfig } from '@/config/site';
import { cn, formatDateFromObj } from '@/lib/utils';
import swapnilImg from '@/public/swapnil-profile.png';

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function Project({ params }: ProjectPageProps) {
  let project = Projects.find((val) => val.id === params.projectId);
  if (!project) {
    redirect('/project');
  }

  return (
    <article className='container relative max-w-3xl py-6 lg:py-10'>
      <Link
        href='/project'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <Icons.chevronLeft className='mr-2 h-4 w-4' />
        All Projects
      </Link>
      <div>
        <time
          dateTime={Date.now().toString()}
          className='block text-sm text-muted-foreground'
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className='mt-2 flex items-center justify-between font-heading text-4xl leading-tight lg:text-5xl'>
          {project.companyName}
          <div className='flex items-center'>
            {project.githubLink && (
              <CustomTooltip text='Link to the source code.'>
                <Link href={project.githubLink} target='_blank'>
                  <Icons.gitHub className='ml-4 w-6 text-muted-foreground hover:text-foreground' />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text='Please note that some project links may be temporarily unavailable.'>
                <Link href={project.websiteLink} target='_blank'>
                  <Icons.externalLink className='ml-4 w-6 text-muted-foreground hover:text-foreground' />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className='mt-4 flex space-x-4'>
          <Link
            href={siteConfig.links.github}
            className='flex items-center space-x-2 text-sm'
          >
            <Image
              src={swapnilImg}
              alt='swapnil'
              width={42}
              height={42}
              className='rounded-full bg-white'
            />

            <div className='flex-1 text-left leading-tight'>
              <p className='font-medium'>{'Swapnil Mahadik'}</p>
              <p className='text-[12px] text-muted-foreground'>
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className='my-8 rounded-md border bg-muted transition-colors'
        priority
      />

      <div className='mb-7'>
        <h2 className='mb-2 inline-block font-heading text-3xl leading-tight lg:text-3xl'>
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className='mb-7'>
        <h2 className='mb-2 inline-block font-heading text-3xl leading-tight lg:text-3xl'>
          Description
        </h2>
        {/* {<exp.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>

      <div className='mb-7'>
        <h2 className='mb-5 inline-block font-heading text-3xl leading-tight lg:text-3xl'>
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className='mt-3 flex items-center font-heading text-xl leading-tight lg:text-xl'>
              <Icons.star className='mr-2 h-5 w-5' /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img, ind) => (
                <Image
                  src={img}
                  key={ind}
                  alt={img}
                  width={720}
                  height={405}
                  className='my-4 rounded-md border bg-muted transition-colors'
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className='mt-12' />
      <div className='flex justify-center py-6 lg:py-10'>
        <Link
          href='/project'
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          All Projects
        </Link>
      </div>
    </article>
  );
}
