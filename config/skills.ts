import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 3,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 5,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 5,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Deploy and host modern web projects with continuous deployment and serverless functions.",
    rating: 5,
    icon: Icons.netlify,
  },
  {
    name: "Vercel",
    description:
      "Deploy and host modern web projects with a focus on performance and developer experience.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "VSCode",
    description:
      "A powerful and customizable code editor for developers.",
    rating: 5,
    icon: Icons.vscode,
  },
  {
    name: "GIT",
    description:
      "Version control system to track changes in source code during software development.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Docker",
    description:
      "Automate the deployment of applications inside lightweight, portable containers.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description:
      "Manage containerized applications across multiple hosts, providing scalability and reliability.",
    rating: 3,
    icon: Icons.kubernetes,
  },
  {
    name: "Firebase",
    description:
      "Build and deploy apps quickly with a suite of cloud-based tools and services.",
    rating: 3,
    icon: Icons.firebase,
  },
  {
    name: "Figma",
    description:
      "Collaborative interface design tool for creating user interfaces and user experiences.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "Adobe XD",
    description:
      "Design and prototype user experiences for web and mobile applications.",
    rating: 3,
    icon: Icons.adobeXd,
  },
  {
    name: "Adobe Photoshop",
    description:
      "Industry-standard software for photo editing and graphic design.",
    rating: 2,
    icon: Icons.photoshop,
  },
  {
    name: "Wordpress",
    description:
      "Create and manage websites easily with a popular content management system.",
    rating: 5,
    icon: Icons.wordpress,
  },
  {
    name: "Terraform",
    description:
      "Automate and manage infrastructure as code for scalable cloud resources.",
    rating: 2,
    icon: Icons.terraform,
  },
  {
    name: "PostgreSQL",
    description:
      "Efficiently manage relational databases with advanced features and scalability.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Redis",
    description:
      "Optimize application performance with an in-memory data structure store for caching and messaging.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "Jenkins",
    description:
      "Automate software development processes with continuous integration and delivery pipelines.",
    rating: 3,
    icon: Icons.jenkins,
  },
  {
    name: "GitLab",
    description:
      "Collaborate on code and manage DevOps processes with a robust Git repository platform.",
    rating: 5,
    icon: Icons.gitlab,
  },
  {
    name: "Bitbucket",
    description:
      "Version control and manage code collaboratively with Atlassian's Git repository.",
    rating: 5,
    icon: Icons.bitbucket,
  },
  {
    name: "Jest",
    description:
      "Write unit tests efficiently with a delightful JavaScript testing framework.",
    rating: 4,
    icon: Icons.jest,
  },
  {
    name: "Babel",
    description:
      "Transform and optimize modern JavaScript for compatibility across environments.",
    rating: 5,
    icon: Icons.babel,
  },
  {
    name: "ESLint",
    description:
      "Enforce consistent coding styles and catch bugs with a customizable JavaScript linter.",
    rating: 5,
    icon: Icons.eslint,
  },
  {
    name: "Prettier",
    description:
      "Automatically format code to ensure a consistent and clean style across your project.",
    rating: 5,
    icon: Icons.prettier,
  },
  {
    name: "Yarn",
    description:
      "Manage project dependencies faster and more efficiently with an advanced package manager.",
    rating: 5,
    icon: Icons.yarn,
  },
  {
    name: "PowerShell",
    description:
      "Automate and manage system tasks efficiently using a powerful scripting environment.",
    rating: 5,
    icon: Icons.powershell,
  },
  {
    name: "Linux",
    description:
      "Master the command line and manage servers using the popular open-source operating system.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "BUN",
    description: "A simple and fast static site generator.",
    rating: 3,
    icon: Icons.bun,
  }
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
