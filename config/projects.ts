import { ValidCategory, ValidExpType, ValidSkills } from './constants';

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: 'tech-tea',
    companyName: 'Techtea',
    type: 'Personal Project',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription:
      "Welcome to my news website, where you can find the latest updates on current events and important issues. I strive to bring you accurate and unbiased coverage of the stories that matter most. Whether you're interested in politics, sports, entertainment, or something else entirely, you'll find something of interest on my site. Thank you for visiting, and I hope you enjoy your stay!",
    websiteLink: 'https://techtea.netlify.app/',
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'Nest.js',
      'Typescript'
    ],
    startDate: new Date('2021-07-01'),
    endDate: new Date('2022-07-01'),
    companyLogoImg: '/projects/techtea/home.webp',
    pagesInfoArr: [
      {
        title: 'Landing Page',
        description: 'test description',
        imgArr: [
          '/projects/techtea/home.webp',
          '/experience/builtdesign/landing_3.webp',
          '/experience/builtdesign/landing_5.webp',
          '/experience/builtdesign/landing_6.webp',
          '/experience/builtdesign/landing_2.webp',
          '/experience/builtdesign/landing_4.webp'
        ]
      },
      {
        title: 'Custom PDF Reader and optimizer',
        description: 'test description',
        imgArr: ['/experience/builtdesign/pdf_opt.webp']
      },
      {
        title: 'Clients Dashboard',
        description: 'test description',
        imgArr: [
          '/experience/builtdesign/cli_dashboard_1.webp',
          '/experience/builtdesign/cli_dashboard_2.webp',
          '/experience/builtdesign/cli_dashboard_3.webp'
        ]
      },
      {
        title: 'Admin Dashboard',
        description: 'test description',
        imgArr: ['/experience/builtdesign/logo.png']
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'Welcome to my news website, where you can find the latest updates on current events and important issues. I strive to bring you accurate and unbiased coverage of the stories that matter most.',
        " Whether you're interested in politics, sports, entertainment, or something else entirely, you'll find something of interest on my site. Thank you for visiting, and I hope you enjoy your stay!"
      ],
      bullets: [
        'Developed and optimized a high-performing website catering to over 4000 users.',
        'Collaborated closely with the product team to implement cutting-edge features.',
        'Created an intuitive admin dashboard to efficiently manage and announce contest winners.',
        'Leveraged Next.js, React with TypeScript for captivating front-end experiences.',
        'Utilized Node.js, MongoDB, and GraphQL to design and manage databases.'
      ]
    }
  },
  {
    id: 'bpp-india',
    companyName: 'Bharatiya Popular Party',
    type: 'Professional',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription: 'Offical Bharatiya Popular Party Website',
    websiteLink: 'https://bppindia.com/',
    techStack: [
      'React',
      'Node.js',
      'MongoDB',
      'Javascript',
      'Typescript',
      'Tailwind CSS'
    ],
    startDate: new Date('2021-07-01'),
    endDate: new Date('2022-07-01'),
    companyLogoImg: '/projects/bppindia/home.webp',
    pagesInfoArr: [
      {
        title: 'Quotes View Page',
        description: 'test description',
        imgArr: ['/experience/superquotes/app_2.webp']
      },
      {
        title: 'Quotes Download Component',
        description: 'test description',
        imgArr: [
          '/experience/superquotes/app_4.webp',
          '/experience/superquotes/app_7.webp'
        ]
      },
      {
        title: 'Account Management',
        description: 'test description',
        imgArr: ['/experience/superquotes/app_6.webp']
      },
      {
        title: 'Interest Selection and Update Page',
        description: 'test description',
        imgArr: [
          '/experience/superquotes/app_1.webp',
          '/experience/superquotes/app_3.webp'
        ]
      },
      {
        title: 'Responsiveness',
        description: 'test description',
        imgArr: ['/experience/superquotes/app_5.webp']
      }
    ],
    descriptionDetails: {
      paragraphs: [`official Bharatiya Popular Party Website`],
      bullets: [
        'Led the end-to-end development of a captivating application using JavaScript and React Native.',
        'Championed the integration of APIs, harmonizing data flow and enhancing application functionality.',
        'Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.',
        'Premiered the application on the Google Play Store, capturing hearts and expanding its user base.'
      ]
    }
  },
  {
    id: 'ecommerce-shopping',
    companyName: 'Ecommerce Shopping',
    type: 'Personal Project',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription: 'Ecommerce Shopping Website',
    githubLink: 'https://ecommerce-web-front-end.vercel.app/',
    techStack: [
      'React Native',
      'Node.js',
      'express.js',
      'MongoDB',
      'Typescript'
    ],
    startDate: new Date('2021-07-14'),
    endDate: new Date('2022-07-01'),
    companyLogoImg: '/experience/apex/logo.png',
    pagesInfoArr: [
      {
        title: 'Splash Screen',
        description: 'test description',
        imgArr: ['/experience/apex/app_7.webp']
      },
      {
        title: 'Login/Signup Authentication',
        description: 'test description',
        imgArr: ['/experience/apex/app_1.webp']
      },
      {
        title: 'All Products Explore Screen',
        description: 'test description',
        imgArr: ['/experience/apex/app_3.webp']
      },
      {
        title: 'Admin Panel',
        description: 'test description',
        imgArr: ['/experience/apex/app_4.webp', '/experience/apex/app_6.webp']
      },
      {
        title: 'Sidenav Navigation',
        description: 'test description',
        imgArr: ['/experience/apex/app_5.webp']
      },
      {
        title: 'Firebase Database',
        description: 'test description',
        imgArr: ['/experience/apex/db.webp']
      }
    ],
    descriptionDetails: {
      paragraphs: [`offical ecommerce shopping website`],
      bullets: [
        'Designed and developed the Builtdesign Blogs Website as an integral part of the larger project.',
        'Harmonized the power of React to create a captivating and intuitive user interface.',
        'Integrated Netlify CMS, providing them with a user-friendly platform.',
        'Enhanced my skill set in front-end development and content management technologies.'
      ]
    }
  }
];

export const featuredProjects = Projects.slice(0, 3);
