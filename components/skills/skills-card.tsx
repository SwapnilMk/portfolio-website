import Rating from '@/components/skills/rating';
import { skillsInterface } from '@/config/skills';
import * as motion from 'framer-motion/client';

interface SkillsCardProps {
  skills: skillsInterface[];
}

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

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-50px' }}
      className='mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3'
    >
      {skills.map((skill, id) => (
        <motion.div
          key={id}
          variants={item}
          className='relative overflow-hidden rounded-lg border bg-background p-2'
        >
          <div className='flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]'>
            <skill.icon size={50} />
            <div className='space-y-2'>
              <h3 className='font-bold'>{skill.name}</h3>
              <p className='text-sm text-muted-foreground'>
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
