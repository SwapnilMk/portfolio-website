import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FilePen } from "lucide-react";

export const DATA = {
    name: "Swapnil Kishor Mahadik",
    personalBrand: 'Portfolio',
    initials: "Portfolio",
    url: "https://swapnil-portfolioweb.netlify.app/",
    location: "Navi Mumbai, Maharashtra, India",
    locationLink: "https://www.google.com/maps/place/Navi+Mumbai",
    description:
        "24-year-old full-stack developer who loves designing and building innovative solutions.",
    summary:
        "I'm Swapnil Mahadik, a 24-year-old [full-stack developer](https://github.com/SwapnilMk), and [student](https://phcasc.ac.in/) from India. I've been building websites and apps since I was young. I love turning ideas into reality through code. I've already shipped over 20 projects. I'm actively looking to collaborate on projects, as well as on my blog.",
    avatarUrl: "/me.jpeg",
    skills: [
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "AWS",
        "Git",
        "GitHub",
        "Tailwind CSS",
        "Bootstrap",
        "Shadcn/UI",
        "GSAP",
        "jQuery",
        "Canva",
        "Adobe Photoshop",
        "Notion",
        "Figma",
        "Bitbucket",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    cs50_images: [
        "/certificates/CSS_basic_certificate_HackerRank.png",
        "/certificates/git and github from scratch_Udemy.jpg",
        "/certificates/HTML_CSS_Js_coursera.jpg",
        "/certificates/javascript_intermediate certificate_HackerRank.jpg",
        "/certificates/nodejs_intermediate certificate_HackerRank.jpg",
        "/certificates/react_basic certificate_HackerRank.jpg",
        "/certificates/TechFryDay.jpg",
    ],
    fcc_images: [
        "/certificates/FrontendDevLibararies_FreeCodeCamp.png",
        "/certificates/FrontendDevLibararies_FreeCodeCamp.png",

    ],
    contact: {
        email: "mswapnil218@gmail.com",
        tel: "+91 7057332679",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/SwapnilMk",
                icon: Icons.github,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/Swapy_mk",
                icon: Icons.x,

                navbar: true,
            },
            // Linktree: {
            //     name: "Linktree",
            //     url: "https://linktr.ee/swapnil",
            //     icon: Icons.linktree,

            //     navbar: true,
            // },
            Email: {
                name: "Send Email",
                url: "mailto:mswapnil218@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },
    work: [
        {
            company: "Asian Exporters' Chamber Of Commerce & Industry",
            href: "https://aecci.org.in",
            badges: [""],
            location: "Belapur CBD, Navi Mumbai",
            title: "Software Developer",
            logoUrl: "/companyLogo/aecci logo.jpeg",
            start: "Feb 2024",
            end: "Present",
            description:
                "I have profound skills in Full-Stack Web Application Development and a little bit in design too. I have built projects ranging from simple games and mini implementations of data tools to more complex applications like social media platforms, e-commerce stores, and popular app clones. I'm learning new things all the time, so it's a mix of good and bad code on my GitHub.",
        },
        {
            company: "Zencommerce India",
            href: "https://zencommerce.in/",
            badges: ["on-site", "internship"],
            location: "Nerul, Navi Mumbai",
            title: "Web Developer Intern",
            logoUrl: "/companyLogo/zencommerce logo.jpeg",
            start: "Aug 2023",
            end: "Nov 2023",
            description:
                "Developed responsive e-commerce websites using HTML, CSS, JavaScript, jQuery, and Bootstrap, ensuring seamless user experiences.I collaborated as a full- time intern at Zencommerce India, actively learning and problem - solving to enhance my development skills.",
        },
    ],
    education: [
        {
            school: "Pillai Hoc College of Arts commerce and science",
            href: "https://phcasc.ac.in/",
            degree: "Bachelor Of computer science",
            logoUrl: "/companyLogo/phcasc.jpg",
            start: "2017",
            end: "2020",
        },
        {
            school: "Janata Junior college",
            href: "/",
            degree: "PCM",
            logoUrl: "",
            start: "2015",
            end: "2017",
        }
    ],
    projects: [
        {
            title: "News Hunt",
            href: "https://news-huntweb.netlify.app/",
            dates: "January, 2023",
            active: true,
            description:
                "Welcome to my news website, where you can find the latest updates on current events and important issues. I strive to bring you accurate and unbiased coverage of the stories that matter most. Whether you're interested in politics, sports, entertainment, or something else entirely, you'll find something of interest on my site. Thank you for visiting, and I hope you enjoy your stay!",
            technologies: [
                "React.js",
                "React Bootstrap",
                "Javascript",
                "netlify",
            ],
            links: [
                {
                    type: "Live Website",
                    href: "https://news-huntweb.netlify.app/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
        },
        {
            title: "Text Utils",
            href: "https://text-utilsweb.netlify.app/",
            dates: "June 2023 - july 2023",
            active: true,
            description:
                "Welcome to my text utilities website, where you can find a range of tools to help you manipulate and analyze text data. Whether you're a researcher, writer, or just someone who works with a lot of text, you'll find something useful here. Some of the tools you'll find on my site include a word count tool, Convert to uppercase lowercase, and a text diff tool to help you compare changes between different versions of a document. Thank you for visiting, and I hope you find my text utilities website helpful!",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "Vercel",
                "NextAuth",
            ],
            links: [
                {
                    type: "Text Utils",
                    href: "https://text-utilsweb.netlify.app/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
        },
     
    ],
    personalAchievements: [
        {
            title: "Learnt Full Stack Dev at 14",
            dates: "2024",
            description: "Self-taught full-stack development, mastering tech like MERN stack w/ Next.js at the age of 14.",
        },
        {
            title: "Made 20+ Projects",
            dates: "2020 - Present",
            description: "Developed over 20 projects using code, using a variety of different kinds of languages, frameworks and libraries.",
        },
        {
            title: "Hit 30K+ Followers on Blog",
            dates: "2024",
            description: "Built a blog with a following of over 30,000, sharing insights and tips on coding and development.",
        },
        {
            title: "Listed as the Top Writer on DEV.to",
            dates: "2024",
            description: "Recognized as a top writer on DEV.to for engaging and informative content on technology and programming.",
        },
        {
            title: "CS50 Achievements",
            dates: "2023 - 2024",
            description: "Completed CS50T and CS50x, two of Harvard's top computer science courses. Competed in Ready Player 50 in 2023 and Puzzle Day in 2024, successfully completing all levels of difficulty and earning gold certificates."
        }
    ],
    personalityTraits: [
        {
            title: "Self-motivated",
            description: "Driven to achieve my goals, always pushing myself to reach new heights in both personal and professional life.",
        },
        {
            title: "Curious",
            description: "Always eager to learn new things, constantly exploring new technologies and concepts to expand my knowledge.",
        },
        {
            title: "Anti-Social",
            description: "Doesn't enjoy working with others, preferring to focus on individual tasks and projects.",
        },
        {
            title: "Small-circle",
            description: "Prefers a small group of like-minded people, valuing quality over quantity in personal connections.",
        },
        {
            title: "Open-minded",
            description: "Enjoys hearing different opinions, open to diverse perspectives and ideas for personal and professional growth.",
        },
        {
            title: "Detail-oriented",
            description: "Pays attention to the little things, ensuring accuracy and thoroughness in all tasks and projects.",
        }
    ],
    hobbiesInterests: [
        {
            title: "Enthusiastic Reader",
            description: "Reading non-fiction and self-help books to gain insights and improve knowledge.",
        },
        {
            title: "Love Coding",
            description: "Building stuff out of code, turning ideas into functional applications and tools.",
        },
        {
            title: "Consistent Writer",
            description: "Writing general knowledge, practical tips, and development-related content to share insights and help others.",
        },
        {
            title: "Music Lover and Aspiring Producer",
            description: "Compiling and sharing underrated hip-hop songs. Just started out in music production, exploring beats and sound design.",
        }
    ],
} as const;