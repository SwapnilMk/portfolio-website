import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
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

export const Experiences: ExperienceInterface[] = [
  {
    id: "built-design",
    companyName: "Builtdesign",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://builtdesign.in",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "test description",
        imgArr: [
          "/experience/builtdesign/landing_1.webp",
          "/experience/builtdesign/landing_3.webp",
          "/experience/builtdesign/landing_5.webp",
          "/experience/builtdesign/landing_6.webp",
          "/experience/builtdesign/landing_2.webp",
          "/experience/builtdesign/landing_4.webp",
        ],
      },
      {
        title: "Custom PDF Reader and optimizer",
        description: "test description",
        imgArr: ["/experience/builtdesign/pdf_opt.webp"],
      },
      {
        title: "Clients Dashboard",
        description: "test description",
        imgArr: [
          "/experience/builtdesign/cli_dashboard_1.webp",
          "/experience/builtdesign/cli_dashboard_2.webp",
          "/experience/builtdesign/cli_dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description: "test description",
        imgArr: ["/experience/builtdesign/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "the-super-quotes",
    companyName: "The Super Quotes",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/superquotes/logo.png",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/experience/superquotes/app_2.webp"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/experience/superquotes/app_4.webp",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/experience/superquotes/app_6.webp"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/experience/superquotes/app_1.webp",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/experience/superquotes/app_5.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Personal Project",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    githubLink: "https://github.com/SwapnilMk/apex-shopping-app",
    techStack: [
      "React Native",
      "Node.js",
      "express.js",
      "MongoDB",
      "Typescript",
    ],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "test description",
        imgArr: ["/experience/apex/app_7.webp"],
      },
      {
        title: "Login/Signup Authentication",
        description: "test description",
        imgArr: ["/experience/apex/app_1.webp"],
      },
      {
        title: "All Products Explore Screen",
        description: "test description",
        imgArr: ["/experience/apex/app_3.webp"],
      },
      {
        title: "Admin Panel",
        description: "test description",
        imgArr: ["/experience/apex/app_4.webp", "/experience/apex/app_6.webp"],
      },
      {
        title: "Sidenav Navigation",
        description: "test description",
        imgArr: ["/experience/apex/app_5.webp"],
      },
      {
        title: "Firebase Database",
        description: "test description",
        imgArr: ["/experience/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `As an integral part of the Builtdesign project, I embarked on the creation of an engaging blogs website, seamlessly intertwining the power of Netlify CMS and React.`,
        `My role was to weave together the threads of technology and creativity, crafting a platform that echoed the essence of Builtdesign's vision.`,
        `The symphony of React components danced in harmony, orchestrating an interface that seamlessly materialized the blogosphere.`,
        `The crowning jewel was the integration of Netlify CMS, an elegant solution that granted content creators a canvas to paint their narratives.`,
        `This venture left an indelible mark on my skill set, sharpening my proficiency in both front-end and content management technologies.`,
      ],
      bullets: [
        "Designed and developed the Builtdesign Blogs Website as an integral part of the larger project.",
        "Harmonized the power of React to create a captivating and intuitive user interface.",
        "Integrated Netlify CMS, providing them with a user-friendly platform.",
        "Enhanced my skill set in front-end development and content management technologies.",
      ],
    },
  },
  {
    id: "builtdesign-blogs",
    companyName: "Builtdesign Blogs",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    websiteLink: "https://blog.builtdesign.in",
    techStack: [
      "React Native",
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/builtdesign-blogs/logo.png",
    pagesInfoArr: [
      {
        title: "Blogs Landing Page",
        description: "test description",
        imgArr: ["/experience/builtdesign-blogs/blog_2.webp"],
      },
      {
        title: "All Blogs",
        description: "test description",
        imgArr: ["/experience/builtdesign-blogs/blog_3.webp"],
      },
      {
        title: "Category Filter in Blogs",
        description: "test description",
        imgArr: ["/experience/builtdesign-blogs/blog_1.webp"],
      },
      {
        title: "Blog",
        description: "test description",
        imgArr: [
          "/experience/builtdesign-blogs/blog_4.webp",
          "/experience/builtdesign-blogs/blog_5.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `As an integral part of the Builtdesign project, I embarked on the creation of an engaging blogs website, seamlessly intertwining the power of Netlify CMS and React.`,
        `My role was to weave together the threads of technology and creativity, crafting a platform that echoed the essence of Builtdesign's vision.`,
        `The symphony of React components danced in harmony, orchestrating an interface that seamlessly materialized the blogosphere.`,
        `The crowning jewel was the integration of Netlify CMS, an elegant solution that granted content creators a canvas to paint their narratives.`,
        `This venture left an indelible mark on my skill set, sharpening my proficiency in both front-end and content management technologies.`,
      ],
      bullets: [
        "Designed and developed the Builtdesign Blogs Website as an integral part of the larger project.",
        "Harmonized the power of React to create a captivating and intuitive user interface.",
        "Integrated Netlify CMS, providing them with a user-friendly platform.",
        "Enhanced my skill set in front-end development and content management technologies.",
      ],
    },
  },
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
    websiteLink: "https://card.namanbarkiya.xyz/",
    githubLink: "https://github.com/SwapnilMk/3d-portfolio-card",
    techStack: [
      "React Native",
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Nest.js",
      "Typescript",
    ],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/card/logo.png",
    pagesInfoArr: [
      {
        title: "Blogs Landing Page",
        description: "Front and Back view of the card",
        imgArr: [
          "/experience/card/card_2.webp",
          "/experience/card/card_3.webp",
        ],
      },
      {
        title: "Links embedding on the model",
        description: "test description",
        imgArr: ["/experience/card/card_1.webp"],
      },
      {
        title: "Blender project",
        description: "test description",
        imgArr: ["/experience/card/card_4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal project, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal project epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-01-01"), // You can fill this in later
    companyLogoImg: "/experience/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description: "Main dashboard view",
        imgArr: ["/experience/cirql/web_1.png", "/experience/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description: "User profile page",
        imgArr: ["/experience/cirql/web_3.png", "/experience/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal project, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
  {
    id: "inscript-hindi-typing",
    companyName: "Inscript Hindi Typing",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
    websiteLink: "https://hindityping.namanbarkiya.xyz", // You can fill this in later
    githubLink: "https://github.com/SwapnilMk/inscript-hindi-keyboard", // You can fill this in later
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-05-01"), // You can fill this in later
    companyLogoImg: "/experience/hindi-keyboard/logo.png",
    pagesInfoArr: [
      {
        title: "Typing Interface",
        description: "Minimal and user-friendly Inscript Hindi typing area",
        imgArr: ["/experience/hindi-keyboard/web_1.png"],
      },
      {
        title: "Copy and Download the file",
        description: "Minimal and user-friendly Inscript Hindi typing area",
        imgArr: [
          "/experience/hindi-keyboard/web_2.png",
          "/experience/hindi-keyboard/web_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
        "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
        "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
        "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
        "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
        "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
      ],
      bullets: [
        "Developed a user-friendly website for Inscript Hindi typing.",
        "Catered to the needs of Hindi writers in digital news and media.",
        "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
        "Mapped English and Hindi alphabets to provide a seamless typing experience.",
        "Utilized HTML and CSS to design a user-friendly UI.",
        "Implemented Local Storage to enable users to save and retrieve their work.",
        "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
        "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
