import {
    logo,
    bash,
    css,
    docker,
    git,
    github,
    gimp,
    html,
    java,
    javascript,
    kali,
    matplotlib,
    mongodb,
    nodejs,
    numpy,
    office,
    pandas,
    php,
    powershell,
    python,
    reactjs,
    redux,
    scikitlearn,
    sql,
    tailwind,
    threejs,
    typescript,
    vscode,
    windows,
    gfn,
    ihk,
    next,
    oracle,
    spiced,
    we
} from "../assets"

const companies = [
    {
        title: "Oracle",
        icon: oracle,
    },
    {
        title: "GFN",
        icon: gfn,
    },
    {
        title: "IHK Germany",
        icon: ihk,
    },
    {
        title: "SPICED",
        icon: spiced,
    },
    {
        title: "Webmasters Europe",
        icon: we,
    },
    {
        title: "SEHNET",
        icon: logo,
    },
    {
        title: "Next Job",
        icon: next,
    },
]
const information = {

    name: "Kadir Duran",
    address: "Berlin-Germany",
    email: "sehzam@gmail.com",
    phone: "00 (49) 175 xx xx 769",
    stack: [
        html,
        css,
        javascript,
        php,
        java,
        sql,
        python,
        matplotlib,
        scikitlearn,
        pandas,
        numpy
    ],
    tech: [
        threejs,
        reactjs,
        typescript,
        python,
        docker,
        mongodb,
        tailwind,
        redux,
        kali,
        gimp,
        bash,
        git,
        windows,
        office,
        powershell,
        vscode
    ],


}
const languages = [
    {
        title: "English",
        percentage: "76%",
    },
    {
        title: "German",
        percentage: "93%",
    },
    {
        title: "Turkish",
        percentage: "88%",
    },
    {
        title: "Greek",
        percentage: "19%",
    },

]
const technologies = [
    {
        name: "Bourne Again Shell",
        icon: bash,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
    {
        name: "Gimp",
        icon: gimp,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Kali Linux",
        icon: kali,
    },
    {
        name: "Matplotlib",
        icon: matplotlib,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Numpy",
        icon: numpy,
    },
    {
        name: "Microsoft Office",
        icon: office,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Microsoft Powershell",
        icon: powershell,
    },
    {
        name: "Python",
        icon: python,
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
        name: "Scikit learn",
        icon: scikitlearn,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Visual Studio Code",
        icon: vscode,
    },
    {
        name: "Microsoft Windows",
        icon: windows,
    },
]
const education = [
    {
        title: "Full Stack Developer",
        company_name: "IHK Germany",
        icon: ihk,
        date: "Dec 2015 - Jun 2017",
        type: "Certified technologies",
        points: [
            "IHK Germany Certification",
        ],
        techs: [
            ihk
        ]
    },
    {
        title: "Frontend Developer",
        company_name: "Webmasters Europe",
        icon: we,
        date: "Juni 2016 - Mar 2017",
        type: "Certified technologies",
        points: [
            "Supported by GFN AG",
        ],
        techs: [
            javascript,
            php,
            html,
            css,
            sql,
        ],
    },
    {
        title: "Java Developer",
        company_name: "Oracle",
        icon: oracle,
        date: "Jan 2017 - Juni 2017",
        type: "Certified technologies",
        points: [
            "Oracle Certified Associate",
        ],
        techs: [
            java,
        ],
    },
    {
        title: "Data Scientist",
        company_name: "SPICED",
        icon: spiced,
        date: "Jan 2023 - Present",
        type: "Certified technologies",
        points: [
            "Supported by SPICED",
        ],
        techs: [
            python,
            matplotlib,
            scikitlearn,
            pandas,
            numpy,
        ],
    },

]
const statements = [
    {
        title: "Professional Summary",
        url: "github.com/sehzam",
        github_url: "https://www.github.com/sehzam",
        statement: "Let's work together to bring your ideas to life!",
        sentences: [
            "I'm a skilled software developer with experience in TypeScript and JavaScript.",
            "Also expertised in frameworks like React.JS, Node.JS, and Three.JS .",
            "To create efficient, scalable, and user-friendly solutions.",
            "I'm a quick learner and collaborate closely with clients that solve real-world problems."
        ],
    },
]
const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Sehnet",
        icon: logo,
        date: "Jan 2018 - Present",
        type: "Projects",
        points: [
            "Developing a bunch of projects",
            "Explore & apply newest technologies",
        ],
    },
    {
        title: "Data Engineer",
        company_name: "My Next Team",
        icon: next,
        date: "Present - a long time",
        type: "Work",
        points: [
            "Lead a team of developers",
            "Progressing to a Senior Developer",
        ],
    },
]

export { companies, languages, technologies, education, statements, experiences, information }