import {
    ali,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experiences",
        title: "Experiences",
    },
    {
        id: "tech",
        title: "Technologies",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Three.JS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Analyst",
        icon: creator,
    }
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
]


const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Data Science - Bootcamp",
        company_name: "Spiced",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]

const testimonials = [
    {
        testimonial: "Kadir's expertise in web development is unmatched. His contributions significantly enhanced our digital presence and user experience.",
        name: "Isabella White",
        designation: "UX/UI Designer",
        company: "WhiteDesigns",
        image: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
        testimonial: "We can't thank Kadir enough for his exceptional work. His website optimization efforts have opened up new horizons for our business.",
        name: "David Turner",
        designation: "COO",
        company: "TechHorizon Solutions",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        testimonial: "Kadir's attention to detail and commitment to excellence shine through in his work. He transformed our website into a top-notch platform.",
        name: "Sophia Walker",
        designation: "Marketing Manager",
        company: "Walker Marketing",
        image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
        testimonial: "We owe our web success to Kadir's skills. His optimizations have catapulted our site's performance and user engagement.",
        name: "Ava Nelson",
        designation: "Lead Developer",
        company: "Nelson Web Solutions",
        image: "https://randomuser.me/api/portraits/women/70.jpg",
    },
    {
        testimonial: "Kadir's web development expertise has been instrumental in our online growth. Our website now stands out and attracts more users.",
        name: "Oliver Parker",
        designation: "Digital Strategist",
        company: "Parker Digital",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        testimonial: "Working with Kadir was a game-changer. He optimized our website's performance, resulting in a noticeable boost in user engagement.",
        name: "Mia Davis",
        designation: "Content Manager",
        company: "ContentCrafters",
        image: "https://randomuser.me/api/portraits/women/85.jpg",
    }
]

const projects = [
    {
        name: "ALI - Alias Listing System",
        description:
            "Bash-based alias listing system that allows useful UNIX-like short-access commands",
        tags: [
            {
                name: "bash",
                color: "blue-text-gradient",
            },
            {
                name: "github",
                color: "green-text-gradient",
            },
            {
                name: "git",
                color: "pink-text-gradient",
            },
        ],
        image: ali,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trainer Vote",
        description:
            "Web-based platform that allows users to vote trainer in passed courses, comparison possibilities with data analysis and visualization.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "DATIL - Data Science Interactive Learning",
        description:
            "Web application that enables users to learn data science in a interactive way. With a bunch of features like direct output view(like jupyter notebook).",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "TML - ThreeJS Models Library",
        description:
            "A filterable models comparison platform that allows direct interactions with models into a Web-based 3d world, with a one ecosystem that allows trade and transaction of game-money.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "threejs",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
]

export { services, technologies, experiences, testimonials, projects }