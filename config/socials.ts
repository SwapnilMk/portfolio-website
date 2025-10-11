import { Icons } from '@/components/common/icons';
import { SocialItem } from '@/components/social-icon';

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

export const socialLinks: SocialItem[] = [
  {
    href: 'https://github.com/SwapnilMk',
    ariaLabel: 'Github',
    tooltip: 'Github',
    color: '#64943E',
    svgUrl: 'https://svgl.app/library/github.svg'
  },
  {
    href: '#',
    ariaLabel: 'Edge',
    tooltip: 'Edge',
    color: '#0078D7',
    svgUrl: 'https://svgl.app/library/edge.svg'
  },
  {
    href: '#',
    ariaLabel: 'Facebook',
    tooltip: 'Facebook',
    color: '#3b5998',
    svgUrl: 'https://svgl.app/library/facebook.svg'
  },
  {
    href: '#',
    ariaLabel: 'Telegram',
    tooltip: 'Telegram',
    color: '#0088cc',
    svgUrl: 'https://svgl.app/library/telegram.svg'
  }
];
