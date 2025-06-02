import { Icons } from '@/components/common/icons';

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: 'Github',
    username: '@SwapnilMk',
    icon: Icons.gitHub,
    link: 'https://github.com/SwapnilMk'
  },
  {
    name: 'LinkedIn',
    username: 'Swapnil Mahadik',
    icon: Icons.linkedin,
    link: 'https://www.linkedin.com/in/swapnilmk/'
  },
  {
    name: 'Twitter',
    username: '@Swapy_mk',
    icon: Icons.twitter,
    link: 'https://x.com/Swapy_mk'
  },
  {
    name: 'Gmail',
    username: 'mswapnil218',
    icon: Icons.gmail,
    link: 'mailto:mswapnil218@gmail.com'
  }
];
