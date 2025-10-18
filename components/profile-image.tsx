import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import swapnilImg from '@/public/swapnil-profile.png';

export const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-10 h-48 w-48 md:h-80 md:w-80', className)} {...props}>
    <div className='relative h-full w-full overflow-hidden rounded-2xl bg-accent'>
      <Image src={swapnilImg} alt='' className='object-cover' fill />
    </div>
  </div>
);
