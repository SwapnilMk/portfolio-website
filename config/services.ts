import { Icons } from '@/components/common/icons';

export interface Service {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Building responsive, high-performance websites using modern technologies like Next.js, React, and Tailwind CSS.',
    icon: 'laptop'
  },
  {
    title: 'Backend Development',
    description:
      'Designing robust and scalable server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL.',
    icon: 'server'
  },
  {
    title: 'API Design & Integration',
    description:
      'Creating RESTful and GraphQL APIs to seamlessly connect your frontend with backend services and third-party tools.',
    icon: 'cloud'
  },
  {
    title: 'UI/UX Implementation',
    description:
      'Translating design mockups into interactive, pixel-perfect user interfaces with smooth animations and accessibility.',
    icon: 'palette'
  },
  {
    title: 'Database Management',
    description:
      'Optimizing database schemas and queries for performance, ensuring data integrity and security.',
    icon: 'database'
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Setting up CI/CD pipelines, containerization with Docker, and deploying applications to cloud platforms like AWS and Vercel.',
    icon: 'settings'
  }
];
