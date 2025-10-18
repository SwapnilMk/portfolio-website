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
    id: 'amorattar',
    companyName: 'Amorattar',
    type: 'Personal Project',
    category: ['Web Dev', 'Full Stack', 'E-commerce', 'UI/UX'],
    shortDescription:
      'Amorattar is a modern e-commerce platform specializing in premium attars and perfumes. Built with Next.js and TypeScript, it offers a seamless shopping experience with features like real-time cart management, wishlist functionality, and an intuitive admin dashboard for product management.',
    websiteLink: 'https://amorattar.vercel.app/',
    techStack: [
      'Next.js 14',
      'Typescript',
      'Tailwind CSS',
      'MongoDB',
      'Prisma ORM',
      'Redux Toolkit',
      'Framer Motion',
      'Shadcn UI'
    ],
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-05-21'),
    companyLogoImg: '/projects/amorattar/home.webp',
    pagesInfoArr: [
      {
        title: 'Landing Page',
        description:
          'Modern and responsive landing page featuring premium attars and perfumes with smooth animations and intuitive navigation.',
        imgArr: [
          '/projects/amorattar/home.webp',
          '/projects/amorattar/landing_1.webp',
          '/projects/amorattar/landing_2.webp',
          '/projects/amorattar/landing_3.webp'
        ]
      },
      {
        title: 'Product Catalog',
        description:
          'Comprehensive product catalog with advanced filtering, sorting, and detailed product pages featuring multiple images, volume selection, and color variants.',
        imgArr: [
          '/projects/amorattar/catalog_1.webp',
          '/projects/amorattar/catalog_2.webp'
        ]
      },
      {
        title: 'Shopping Experience',
        description:
          'Seamless shopping experience with real-time cart management, wishlist functionality, and secure checkout process.',
        imgArr: ['/projects/amorattar/cart_1.webp']
      },
      {
        title: 'Admin Dashboard',
        description:
          'Secure admin interface for comprehensive product management, order tracking, user management, and sales analytics.',
        imgArr: [
          '/projects/amorattar/admin_1.webp',
          '/projects/amorattar/admin_2.webp',
          '/projects/amorattar/admin_3.webp',
          '/projects/amorattar/admin_4.webp',
          '/projects/amorattar/admin_5.webp',
          '/projects/amorattar/admin_6.webp',
          '/projects/amorattar/admin_7.webp',
          '/projects/amorattar/admin_8.webp',
          '/projects/amorattar/admin_9.webp'
        ]
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'Amorattar is a luxury fragrance e-commerce platform that brings the rich tradition of attars to the modern world. The platform offers a curated collection of premium attars and perfumes, combining traditional craftsmanship with contemporary design.',
        'Built with modern web technologies, Amorattar provides a seamless shopping experience with features like real-time cart management, wishlist functionality, and an intuitive admin dashboard for comprehensive product management.'
      ],
      bullets: [
        'Developed a modern e-commerce platform using Next.js 14, TypeScript, and Tailwind CSS for a responsive and performant user experience',
        'Implemented advanced product catalog features including filtering, sorting, and detailed product pages with multiple images and variants',
        'Created a secure admin dashboard with comprehensive product management, order tracking, and sales analytics',
        'Integrated MongoDB with Prisma ORM for efficient data management and real-time updates',
        'Utilized Framer Motion for smooth animations and transitions throughout the application',
        'Implemented Redux Toolkit for efficient state management and real-time cart functionality',
        'Designed and developed a responsive UI using Shadcn UI components and custom styling'
      ]
    }
  },
  {
    id: 'tech-tea',
    companyName: 'TechTea',
    type: 'Personal Project',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription:
      'TechTea is a modern React-based blog platform for tech enthusiasts to share and discuss the latest technology news. Built with a focus on user experience and performance, it provides a seamless platform for tech content creators and readers.',
    websiteLink: 'https://techtea-two.vercel.app/',
    techStack: [
      'React',
      'Redux Toolkit',
      'React Router Dom',
      'Tailwind CSS',
      'Vite',
      'Node.js',
      'MongoDB'
    ],
    startDate: new Date('2024-01-01'), // Update this to your actual start date
    endDate: new Date('2024-03-01'), // Update this to your actual end date
    companyLogoImg: '/projects/techtea/home.webp',
    pagesInfoArr: [
      {
        title: 'Landing Page',
        description:
          'Modern and responsive landing page featuring latest tech news and blog posts with smooth animations and lazy loading for optimal performance.',
        imgArr: [
          '/projects/techtea/home.webp',
          '/projects/techtea/landing_1.webp'
        ]
      },
      {
        title: 'Blog Post Creation',
        description:
          'Intuitive interface for creating and editing blog posts with rich text formatting and image upload capabilities.',
        imgArr: ['/projects/techtea/blog_create.webp']
      },
      {
        title: 'User Authentication',
        description:
          'Secure user authentication system with sign-up and login functionality, protected routes, and user profile management.',
        imgArr: [
          '/projects/techtea/auth_1.webp',
          '/projects/techtea/auth_2.webp',
          '/projects/techtea/profile.webp'
        ]
      },
      {
        title: 'Viewing Blog Posts',
        description:
          'View and interact with blog posts, including comments and likes, with real-time updates and toast notifications for better user feedback.',
        imgArr: ['/projects/techtea/blog_1.webp']
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'TechTea is a modern blog platform specifically designed for tech enthusiasts and content creators. The platform features a clean, intuitive interface that makes it easy for users to share and discover the latest technology news and insights.',
        'Built with performance and user experience in mind, TechTea implements modern web development practices including lazy loading, state management with Redux, and responsive design principles.'
      ],
      bullets: [
        'Developed a full-stack blog platform using React.js 18 and modern web technologies',
        'Implemented user authentication and authorization with secure routes',
        'Created a responsive design that works seamlessly across all devices',
        'Integrated Redux Toolkit for efficient state management',
        'Utilized Tailwind CSS for modern, maintainable styling',
        'Implemented lazy loading and performance optimizations',
        'Added real-time updates and toast notifications for better user feedback'
      ]
    }
  },
  {
    id: 'bpp-india',
    companyName: 'Bharatiya Popular Party',
    type: 'Professional',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription: 'Official Bharatiya Popular Party Website',
    websiteLink: 'https://bppindia.com/',
    techStack: [
      'React',
      'Node.js',
      'MongoDB',
      'Javascript',
      'Typescript',
      'Tailwind CSS',
      'Shadcn UI',
      'TanStack Router',
      'Recharts',
      'Express.js',
      'Redis',
      'Socket.IO',
      'AWS S3',
      'AWS SES',
      'AWS SNS',
      'Bull Queue',
      'JWT',
      'Passport.js'
    ],
    startDate: new Date('2024-07-01'),
    endDate: new Date('2025-04-21'),
    companyLogoImg: '/projects/bppindia/home.webp',
    pagesInfoArr: [
      {
        title: 'User Authentication',
        description:
          'Secure user authentication system with sign-up and login functionality, protected routes, and user profile management.',
        imgArr: [
          '/projects/bppindia/userAuth_1.webp',
          '/projects/bppindia/userAuth_2.webp'
        ]
      },
      {
        title: 'User Dashboard Overview',
        description:
          'Interactive dashboard with member statistics, charts, and recent activities',
        imgArr: [
          '/projects/bppindia/dashboard_1.webp',
          '/projects/bppindia/dashboard_2.webp'
        ]
      },
      {
        title: 'Profile Management',
        description:
          'Comprehensive profile management with personal details, address, and document verification',
        imgArr: [
          '/projects/bppindia/profile_1.webp',
          '/projects/bppindia/profile_2.webp'
        ]
      },
      {
        title: 'Membership Management',
        description:
          'Membership system with different tiers (Member, Primary Member, Active Member) and verification process',
        imgArr: ['/projects/bppindia/membership.webp']
      },
      {
        title: 'Wallet & Donation System',
        description:
          'Integrated wallet system for donations and transaction tracking',
        imgArr: ['/projects/bppindia/wallet.webp']
      },
      {
        title: 'Referral System',
        description: 'Referral system for member referrals and rewards',
        imgArr: ['/projects/bppindia/referral.webp']
      },
      {
        title: 'Master Dashboard Overview',
        description:
          'Centralized master data management system for states, districts, and organizational hierarchy',
        imgArr: [
          '/projects/bppindia/masterDashboard_1.webp',
          '/projects/bppindia/masterDashboard_2.webp',
          '/projects/bppindia/masterDashboard_3.webp'
        ]
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'Developed and maintained the official website for Bharatiya Popular Party (BPP), a political organization in India. The platform serves as a comprehensive digital solution for party operations, member management, and public engagement.',
        'Implemented a robust role-based access control system with multiple user types (Superadmin, Admin, Manager, Cashier) to manage different aspects of party operations securely.',
        'Built a scalable backend architecture using Node.js and Express.js, implementing microservices patterns for better maintainability and scalability. The system handles high concurrent users with Redis caching and rate limiting.',
        'Implemented real-time features using Socket.IO for live updates on member activities, campaign progress, and donation tracking, enhancing user engagement and system responsiveness.',
        'Developed a comprehensive master data management system for managing states, districts, and organizational hierarchy, ensuring data consistency across the platform.'
      ],
      bullets: [
        'Architected and developed a full-stack web application using React, Node.js, and MongoDB, implementing modern UI/UX practices with Tailwind CSS and Shadcn UI',
        'Created an interactive dashboard with real-time statistics, charts, and member distribution maps using Recharts and Google Maps integration',
        'Implemented a comprehensive membership system with different tiers (Member, Primary Member, Active Member) and document verification workflow',
        'Developed a secure wallet and donation system for managing party finances and tracking transactions',
        'Built a campaign management system for organizing and tracking party activities and events',
        'Integrated role-based access control with multiple user types for secure party operations management',
        'Implemented responsive design ensuring seamless experience across all devices',
        'Utilized TanStack Router for efficient client-side routing and state management',
        'Designed and implemented a secure authentication system using JWT and Passport.js with Google OAuth integration',
        'Built a robust API architecture with Express.js, implementing middleware for security (helmet, rate limiting, CORS), request validation, and error handling',
        'Implemented Redis caching for frequently accessed data and session management, improving application performance',
        'Integrated AWS services (S3 for file storage, SES for email notifications, SNS for SMS alerts) for scalable cloud infrastructure',
        'Developed a background job processing system using Bull Queue for handling asynchronous tasks like PDF generation, email sending, and data processing',
        'Implemented comprehensive logging and monitoring using Winston and Prometheus for better system observability',
        'Created automated testing suite using Jest and Supertest for API endpoints and business logic',
        'Set up CI/CD pipeline with GitHub Actions for automated testing and deployment',
        'Implemented internationalization (i18n) support for multiple languages',
        'Integrated payment gateway for secure donation processing and transaction management',
        'Developed RESTful APIs with proper documentation using Swagger/OpenAPI',
        'Implemented security best practices including input sanitization, XSS protection, and CSRF prevention',
        'Built a master data management system for centralized control of states, districts, and organizational hierarchy',
        'Implemented data validation and integrity checks for master data using Zod schema validation',
        'Developed a flexible data table system with advanced filtering, sorting, and pagination capabilities',
        'Created a state directory system for managing party organizational structure across different regions'
      ]
    }
  },
  {
    id: 'expense-tracker',
    companyName: 'Expense Tracker',
    type: 'Personal Project',
    category: ['Web Dev', 'Full Stack', 'UI/UX'],
    shortDescription:
      'A full-stack expense tracker application built with the MERN stack that allows users to add, view, and manage income and expenses with visual analytics and category filters.',
    websiteLink: 'https://swap-expense-tracker.vercel.app/',
    githubLink: 'https://github.com/SwapnilMk/expense-tracker',
    techStack: [
      'React',
      'Vite',
      'Redux Toolkit',
      'Material UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'React Router Dom'
    ],
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-06-01'),
    companyLogoImg: '/projects/expense-tracker/overview.webp',
    pagesInfoArr: [
      {
        title: 'Dashboard Overview',
        description:
          'Interactive dashboard displaying total income, expenses, and visual charts representing financial data.',
        imgArr: [
          '/projects/expense-tracker/overview.webp',
          '/projects/expense-tracker/overview_dark.webp'
        ]
      },
      {
        title: 'Transaction History',
        description:
          'Displays all user transactions with filtering and sorting options for type, category, and date.',
        imgArr: ['/projects/expense-tracker/history.webp']
      },
      {
        title: 'Add Transaction',
        description:
          'Simple and intuitive interface to add new transactions with validation and error handling.',
        imgArr: ['/projects/expense-tracker/add_transaction.webp']
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'The Expense Tracker App is a full-stack financial management tool that enables users to track their income and expenses efficiently. It includes CRUD operations, filtering, and interactive charts for data visualization.',
        'The frontend is built using React, Vite, and Material-UI (MUI), while the backend is powered by Node.js, Express, and MongoDB. State management is handled with Redux Toolkit, ensuring smooth and responsive interactions.'
      ],
      bullets: [
        'Built a full-stack MERN application for managing income and expenses',
        'Implemented CRUD operations with input validation and error handling',
        'Integrated Redux Toolkit for global state management',
        'Used MUI X Charts for interactive data visualization',
        'Developed RESTful APIs with Express and MongoDB (Mongoose)',
        'Added transaction filtering by type, category, and date',
        'Implemented responsive UI using Material-UI components',
        'Configured Winston logger for backend monitoring and error tracking',
        'Deployed on Vercel with environment-based configurations'
      ]
    }
  },
  {
    id: 'econs-exim-gateway',
    companyName: 'EGC India (Econs Exim Gateway)',
    type: 'Professional',
    category: ['Web Dev', 'UI/UX'],
    shortDescription:
      "Official website of EGC India (Econs Gateway Commercial Services Pvt. Ltd.) — a modern, responsive single-page application built with React, Vite, and TypeScript. It showcases the company's dual focus on global commercial services and innovative technology platforms.",
    websiteLink: 'https://econs-exim-gateway.vercel.app/',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-03-01'),
    companyLogoImg: '/projects/econs/dashboard.png',
    pagesInfoArr: [
      {
        title: 'Landing Page',
        description:
          'A responsive landing page introducing EGC India’s mission and services, featuring smooth animations and modern layouts.',
        imgArr: ['/projects/econs/dashboard.png']
      }
    ],
    descriptionDetails: {
      paragraphs: [
        'This repository contains the source code for the official website of EGC India (Econs Gateway Commercial Services Pvt. Ltd.). The website is a modern, responsive single-page application built with React, Vite, and TypeScript. It showcases the company’s dual focus on global commercial services and innovative technology platforms.',
        'EGC India is a technology-driven company that provides comprehensive solutions in two main areas: Commercial Services and IT & Technology. The website serves as the primary digital presence for EGC India, offering information about services, platforms, partners, and company vision.'
      ],
      bullets: [
        'Developed a responsive corporate website using React, TypeScript, and Tailwind CSS',
        'Implemented Framer Motion for smooth animations and engaging UI transitions',
        'Built reusable components using Shadcn UI for design consistency',
        'Integrated React Hook Form and Zod for robust form validation',
        'Configured Vite for optimized builds and fast HMR during development',
        'Structured project with scalable directories for assets, components, layouts, and routes',
        'Ensured clean code practices with ESLint and Prettier setup'
      ]
    }
  }
];

export const featuredProjects = Projects.slice(0, 3);
