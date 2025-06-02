import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/common/icons';
import SkillsCard from '@/components/skills/skills-card';
import { Button, buttonVariants } from '@/components/ui/button';
import { pagesConfig } from '@/config/pages';
import { featuredSkills } from '@/config/skills';
import { cn } from '@/lib/utils';
import swapnilImg from '@/public/swapnil-profile.png';
import { FlipWords } from '@/components/ui/flip-word';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { SocialLinks } from '@/config/socials';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { RainbowButton } from '@/components/ui/rainbow-button';
import ShinyButton from '@/components/ui/shiny-button';
import ProjectCard from '@/components/projects/project-card';
import { featuredProjects } from '@/config/projects';

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description
};

export default async function IndexPage() {
  const words = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Web Engineer',
    'Software Developer',
    'Creative Coder',
    'Technical Lead',
    'DevOps Specialist',
    'SEO Expert'
  ];

  return (
    <>
      <section className='mb-0 flex h-screen items-center space-y-6 pb-8 pt-6 md:py-20 md:pb-12 lg:py-32'>
        <div className='container -mt-20 flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <Link
            href={SocialLinks[2].link}
            className='flex rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium hover:text-blue-500'
            target='_blank'
          >
            <AnimatedShinyText className='inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <span>✨ Follow along on Twitter </span>
              <Icons.twitter className='size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedShinyText>
          </Link>
          <Image
            src={swapnilImg}
            height={100}
            width={100}
            sizes='100vw'
            className='mb-0 h-auto w-[60%] max-w-[16rem] rounded-full border-8 border-primary bg-primary dark:border-white dark:bg-white md:mb-2'
            alt='naman-barkiya-img'
          />
          {/* </div> */}
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Swapnil Mahadik
          </h1>
          <h3 className='font-heading text-base sm:text-xl md:text-xl lg:text-2xl'>
            <FlipWords words={words} />
          </h3>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
              'inset-x-0 inset-y-[-30%] -z-40 h-[200%] skew-y-12'
            )}
          />
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Full-stack web developer with two years&apos; experience who is
            innovative and ambitious. Excellent analytical and creative
            abilities, with a heavy emphasis on writing well-documented code.
          </p>
          <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4'>
            <Link href={'https://github.com/SwapnilMk'} target='_blank'>
              <RainbowButton>
                {' '}
                <Icons.gitHub className='mr-2 h-4 w-4' /> GitHub
              </RainbowButton>
            </Link>
            <Link href='/contact' passHref>
              <ShinyButton
                className={cn(
                  'flex items-center justify-center',
                  'rounded-lg text-lg',
                  buttonVariants({
                    variant: 'outline',
                    size: 'lg'
                  })
                )}
              >
                <span className='flex items-center justify-center gap-1'>
                  <Icons.contact className='mr-2 h-4 w-4' /> Contact
                </span>
              </ShinyButton>
            </Link>
          </div>
          <Icons.chevronDown className='mt-10 h-6 w-6' />
        </div>
      </section>
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
      {/* <section
        id="contributions"
        className="container py-10 space-y-6 bg-slate-50 dark:bg-transparent my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.contributions.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.contributions.description}
          </p>
        </div>
        <div className="justify-center gap-4 mx-auto md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredProjects} />
        </div>
        <Link href="/contributions" className="flex justify-center">
          <Button variant={"outline"} className="rounded-xl">
            <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
          </Button>
        </Link>
        <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> 
      </section> */}
    </>
  );
}
