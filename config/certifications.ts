export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: 'Frontend End Development Libraries Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    link: '#',
    image: '/certifications/freecodecamp-responsive-web-design.png'
  },
  {
    title: 'HTML, CSS, and JavaScript for Web Developers.',
    issuer: 'JOHNS HOPKINS UNIVERSITY (Coursera)',
    date: '2020',
    link: 'https://coursera.org/verify/QJCZH8WS8RAP',
    image: '/certifications/html-css-js.jpg'
  },
  {
    title: 'Node.js (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2024',
    link: '#',
    image: '/certifications/hackerrank-nodejs-intermediate.png'
  },
  {
    title: 'React (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2024',
    link: '#',
    image: '/certifications/hackerrank-react-basic.png'
  },
  {
    title: 'JavaScript (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2024',
    link: '#',
    image: '/certifications/hackerrank-javascript-intermediate.png'
  },
  {
    title: 'Git and GitHub from Scratch',
    issuer: 'Udemy',
    date: '2022',
    link: '#',
    image: '/certifications/udemy-git-github.png'
  },
  {
    title: 'TechFryDay Participation',
    issuer: 'Event',
    date: '2019',
    link: '#',
    image: '/certifications/techfryday.png'
  }
];
