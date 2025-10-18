import { Metadata } from 'next';
import Link from 'next/link';
import { Icons } from '@/components/common/icons';
import SkillsCard from '@/components/skills/skills-card';
import { Button } from '@/components/ui/button';
import { pagesConfig } from '@/config/pages';
import { featuredSkills } from '@/config/skills';
import { cn } from '@/lib/utils';
import { FlipWords } from '@/components/ui/flip-word';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import ProjectCard from '@/components/projects/project-card';
import { featuredProjects } from '@/config/projects';
import { Badge } from '@/components/ui/badge';
import { AnimatedShinyTextBadge } from '@/components/ui/animated-badge';
import { ProfileImage } from '@/components/profile-image';
import { siteConfig } from '@/config/site';
import HeroButton from '@/components/features/hero-button';
import { AuroraText } from '@/components/ui/aurora-text';
import StarOnGithub from '@/components/features/github-button';
import DownloadCV from '@/components/features/download-button';
import { SocialButton } from '@/components/features/social-button';
import { Timeline } from '@/components/ui/timeline';
import { experience } from '@/config/experience';

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description
};

export default async function IndexPage() {
  return (
    <>
      <section className='px-auto relative flex min-h-screen items-center justify-center overflow-hidden'>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] -z-40 h-[200%] skew-y-12'
          )}
        />
        <div className='relative z-[1] max-w-screen-md text-center'>
          <AnimatedShinyTextBadge />
          <h1 className='mt-3 text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-6xl'>
            Building Scalable & Engaging{' '}
            <AuroraText> Web Experiences</AuroraText>
          </h1>
          <p className='mt-6 text-[17px] md:text-lg'>
            Hey there! I’m Swapnil Mahadik, a
            <FlipWords words={siteConfig.role} />
            passionate about crafting scalable, high-performance web
            applications. From designing sleek, intuitive frontends to building
            powerful, efficient backends, I love turning ideas into seamless
            digital experiences. Let’s collaborate and build something amazing
            together!
          </p>
          <div className='mt-12 flex items-center justify-center gap-4'>
            <HeroButton />
          </div>
        </div>
      </section>
      <section
        id='about'
        className='container space-y-6 bg-slate-50 py-10 dark:bg-transparent'
      >
        <div className='mx-auto flex max-w-full flex-col items-center gap-12 md:flex-row-reverse md:items-start md:gap-16'>
          {/* Profile + Social Buttons */}
          <div className='flex flex-col items-center gap-6 md:items-start'>
            <ProfileImage className='hidden md:block' />
            <SocialButton className='mx-auto hidden space-x-2 md:block' />
          </div>

          {/* Content */}
          <div className='flex-1 text-center md:text-left'>
            <Badge variant='secondary' className='mb-4'>
              About Me
            </Badge>

            {/* Mobile Profile */}
            <ProfileImage className='mx-auto mb-6 mt-2 block md:hidden' />
            <SocialButton className='mx-auto mb-6 mt-2 block space-x-2 md:hidden' />

            <h2 className='mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:whitespace-pre-line'>
              {siteConfig.heading}
            </h2>

            <p className='mb-6 text-justify leading-snug text-muted-foreground md:whitespace-pre-line'>
              {siteConfig.description}
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
              <StarOnGithub />
              <DownloadCV />
            </div>
          </div>
        </div>
      </section>
      <div className='relative w-full overflow-clip'>
        <Timeline data={experience} />
      </div>

      <section
        id='skills'
        className='container space-y-6 bg-slate-50 py-10 dark:bg-transparent'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            {pagesConfig.skills.title}
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            {pagesConfig.skills.description}
          </p>
        </div>
        <SkillsCard skills={featuredSkills} />
        <Link href='/skills' className='flex justify-center'>
          <Button variant={'outline'} className='rounded-xl'>
            <Icons.chevronDown className='mr-2 h-4 w-4' /> View All
          </Button>
        </Link>
        <div className='mx-auto text-center md:max-w-[58rem]'>
          <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            See all the relevant skills.
          </p>
        </div>
      </section>

      <section
        id='project'
        className='container my-14 space-y-6 py-10 dark:bg-transparent'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            {pagesConfig.projects.title}
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            {pagesConfig.projects.description}
          </p>
        </div>
        <div className='mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3'>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link href='/project' className='flex justify-center'>
          <Button variant={'outline'} className='rounded-xl'>
            <Icons.chevronDown className='mr-2 h-4 w-4' /> View All
          </Button>
        </Link>
        <div className='mx-auto text-center md:max-w-[58rem]'>
          <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            See all the relevant Projects.
          </p>
        </div>
      </section>
    </>
  );
}
