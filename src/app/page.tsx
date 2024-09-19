import BriefCase from "@/app/icons/brif-case";
import WorkExperience from "@/app/components/WorkExperience";
import GridPattern from "@/app/components/GridPattern";
import Section from "./components/Section";
import Container from "./components/Container";
import { FadeIn } from "./components/FadeIn";
import AnimatedTitle from "./components/AnimatedTitle";

export const metaData = {
  title: 'Swapnil Mahadik',
  description: 'Personal Portfolio',
}


export const sections = [
  {index: 0, title: 'About Me', id: 'about-me'}
]



interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}


const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-work_experience_orange">Semi-Senior Engineer</span> with <span className="text-work_experience_orange">4 years</span> of experience in the software industry
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
]

export default function Home() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Alejandro Gomez<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 mb-1">
                Looking for a job{' '}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>{' '}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">26 yo software engineer with a B.S. in Computer Science and Technology with experience in Front-End and Back-End technologies.</p>
            </FadeIn>
          </div>{' '}
        </Container>
      </Section>
      </div>
  );
}
