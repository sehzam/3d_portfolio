import {
    expressjs,
    framer,
    chakra,
    emotion,
    nextjs,
    data,
    mobile,
    backend,
    frontend,
    trainervote,
    ddp,
    trix,
    ali,
    tml,
    datil,
    purely,
    github,
    bash,
    css,
    docker,
    git,
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
    oracle,
    spiced,
    we,
    about,
    contact,
    experience,
    feedback,
    technology,
    work,
    admin,
    threed,
    vrar,
    technician,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        icon: about,
        title: "About",
    },
    {
        id: "experiences",
        icon: experience,
        title: "Experiences",
    },
    {
        id: "technologies",
        icon: technology,
        title: "Technologies",
    },
    {
        id: "works",
        icon: work,
        title: "Works",
    },
    {
        id: "feedbacks",
        icon: feedback,
        title: "Feedbacks",
    },
    {
        id: "contact",
        icon: contact,
        title: "Contact",
    },
]
const science = [
    {
        skills: {
            1: "Descriptive Statistics",
            2: "Plotting with Python",
            3: "Long vs. Wide Format",
            4: "Data Wrangling",
            5: "Group By and Aggregation",
            6: "Logistic Regression",
            7: "The Loss Function in Logistic Regression",
            8: "Evaluating Classifiers",
            9: "Feature Engineering with ColumnTransformers",
            10: "Decision Trees",
            11: "Random Forests",
            12: "Support Vector Machines",
            13: "DateTime in Pandas",
            14: "Linear Regression",
            15: "Assumptions in Linear Regression",
            16: "Feature Expansion",
            17: "Feature Selection",
            18: "Regularization",
            19: "Gradient Descent",
            20: "Cross-Validation",
            21: "Hyperparameter Optimization",
            22: "Gradient Boosting",
            23: "Debugging Python code",
            24: "Web Scraping",
            25: "Regular Expressions",
            26: "Bag of Words",
            27: "Language Models",
            28: "Writing Python Functions",
            29: "Command-Line Interfaces",
            30: "Class Imbalance",
            31: "Naive Bayes",
            32: "Namespaces",
            33: "PostgreSQL",
            34: "Data Modeling",
            35: "SQL Queries",
            36: "Cloud Databases",
            37: "Cloud Computing",
            38: "Unix Administration",
            39: "Database Indexing",
            40: "Advanced SQL Queries",
            41: "Sentiment Analysis",
            42: "Application Programming Interfaces",
            43: "Analyzing Time Series",
            44: "Autoregressive Model (AR)",
            45: "Evaluating Forecasts",
            46: "Docker",
            47: "MongoDB",
            48: "ETL",
            49: "Logging",
            50: "Word Embeddings",
            51: "Autoregressive-Integrated-Moving-Average Model (ARIMA)",
            52: "Distribution Functions",
            53: "Statistics of Time Series",
            54: "Drawing Maps with Plotly",
            55: "Data Analysis",
            56: "Markov Chains",
            57: "Classes",
            58: "Composition and Inheritance",
            59: "Slicing NumPy Arrays",
            60: "Artificial Neural Networks",
            61: "Backpropagation",
            62: "Keras",
            63: "Training Strategies",
            64: "Convolutional Neural Networks",
            65: "Pretrained Networks",
            66: "Transfer Learning",
            67: "Deep Learning Papers",
            68: "Recurrent Neural Networks",
            69: "Unsupervised Learning",
            70: "Principal Component Analysis",
            71: "Collaborative Filtering with Matrix Factorization",
            72: "Neighborhood-based Collaborative Filtering",
            73: "Clustering",
            74: "Building Python Packages",
            75: "Automated Testing",
            76: "Continuous Integration",
            77: "Profiling Code",
            78: "Object-Relational-Mapping",
        },
        titles: [
            {
                id: 1,
                title: "Data Scientist",
                description: "Data scientists are responsible for extracting, analyzing, and interpreting data to develop insights and models that assist in decision-making and problem-solving.",
                specialization: "Machine Learning",
                skills: [1, 6, 8, 10, 11, 12, 21, 22, 23, 45]
            },
            {
                id: 2,
                title: "Data Analyst",
                description: "Data analysts focus on collecting, cleansing, and analyzing data to gain business insights. They create reports, dashboards, and visualizations to make data understandable for managers and decision-makers.",
                specialization: "Data Analysis",
                skills: [1, 2, 4, 5, 15, 25, 27, 28, 55]
            },
            {
                id: 3,
                title: "Machine Learning Engineer",
                description: "Machine learning engineers specialize in developing machine learning models and algorithms. They work closely with data scientists to create and implement models in production environments.",
                specialization: "Machine Learning",
                skills: [6, 10, 11, 12, 21, 22, 23, 60, 61]
            },
            {
                id: 4,
                title: "Big Data Engineer",
                description: "Big data engineers are responsible for managing and processing large volumes of data. They design and maintain data pipelines that enable data extraction, transformation, and loading (ETL) processes.",
                specialization: "Big Data",
                skills: [3, 4, 14, 38, 49]
            },
            {
                id: 5,
                title: "Data Engineer",
                description: "Data engineers work on designing and creating data architectures and systems. They are responsible for developing and managing databases and database management systems.",
                specialization: "Data Engineering",
                skills: [3, 4, 33, 39, 40]
            },
            {
                id: 6,
                title: "Business Intelligence (BI) Analyst",
                description: "BI analysts focus on analyzing corporate data to identify business trends and patterns. They use BI tools and platforms to create reports and visualizations.",
                specialization: "Business Intelligence",
                skills: [1, 2, 4, 5, 15, 18, 28, 55]
            },
            {
                id: 7,
                title: "Data Science Manager/Director",
                description: "Data science managers or directors are responsible for managing and leading data science teams. They set the strategy for data projects and collaborate closely with executives.",
                specialization: "Management",
                skills: [9, 21, 38, 50]
            },
            {
                id: 8,
                title: "Quantitative Analyst (Quant)",
                description: "Quants work in the financial industry and utilize quantitative methods to assess risks, develop trading strategies, and create financial models.",
                specialization: "Finance",
                skills: [1, 2, 14, 50, 52, 53]
            },
            {
                id: 9,
                title: "Data Consultant",
                description: "Data consultants provide consulting services in the field of data science. They often work as freelancers or for consulting firms, assisting clients with data projects and analyses.",
                specialization: "Consulting",
                skills: [1, 2, 4, 5, 6, 8, 13, 16, 21]
            },
            {
                id: 10,
                title: "Data Ethicist",
                description: "Data ethicists address ethical concerns related to data, privacy, and algorithms. They advocate for ethical standards and practices in data processing.",
                specialization: "Ethics",
                skills: [50]
            },
            {
                id: 11,
                title: "AI Researcher",
                description: "AI researchers specialize in the development of artificial intelligence and machine learning. They often work in academic or research institutions, focusing on creating new algorithms and models.",
                specialization: "Artificial Intelligence",
                skills: [1, 2, 6, 7, 16, 51, 67]
            },
            {
                id: 12,
                title: "Data Science Trainer und Dozent",
                description: "Trainers and instructors in the field of data science teach and educate others on the fundamentals and advanced concepts of data science. They may work in educational institutions or online platforms.",
                specialization: "Education",
                skills: [1, 2, 4, 5, 6, 14, 28, 55, 75]
            }
        ],
    }
]
const services = [
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Scientist",
        icon: data,
    },
    {
        title: "VR / AR Developer",
        icon: vrar,
    },
    {
        title: "Three JS Developer",
        icon: threed,
    },
    {
        title: "Administrator",
        icon: admin,
    },
    {
        title: "Technician",
        icon: technician,
    },
]
const technologies = {
    /* Languages */
    "JavaScript": {
        url: "https://www.javascript.com/",
        icon: javascript,
        color: 'yellow-text',
        desc: "JavaScript is a versatile programming language often used for web development to add interactivity and dynamic features to websites. It's a fundamental technology for creating modern web applications.",
    },
    "React JS": {
        url: "https://react.dev/",
        icon: reactjs,
        color: 'blue-text',
        desc: "React JS is a popular JavaScript library for building user interfaces. It allows developers to create interactive and responsive web applications with a component-based architecture.",
    },
    "Next JS": {
        url: "https://nextjs.org/",
        icon: nextjs,
        color: 'orange-text',
        desc: "Next JS is a framework for building server-rendered React applications. It provides tools for easy routing, server-side rendering, and optimized performance in React-based projects.",
    },
    "Three JS": {
        url: "https://threejs.org/",
        icon: threejs,
        color: 'green-text',
        desc: "Three JS is a JavaScript library used for 3D graphics and animations in web applications. It's commonly employed in virtual reality and gaming projects.",
    },
    "Python": {
        url: "https://www.python.org/",
        icon: python,
        color: 'yellow-text',
        desc: "Python is a high-level programming language known for its simplicity and readability. It's widely used in web development, data science, and automation.",
    },
    "TypeScript": {
        url: "https://www.typescriptlang.org/",
        icon: typescript,
        color: 'blue-text',
        desc: "TypeScript is a statically-typed superset of JavaScript. It adds type checking to JavaScript, making it a more robust and maintainable choice for large-scale projects.",
    },
    "Java": {
        url: "https://www.java.com/de/",
        icon: java,
        color: 'orange-text',
        desc: "Java is a versatile, object-oriented programming language used in a variety of applications, from web development to mobile app development.",
    },
    "PHP": {
        url: "https://www.php.net/",
        icon: php,
        color: 'blue-text',
        desc: "PHP is a server-side scripting language commonly used for web development. It's particularly well-suited for building dynamic web applications.",
    },
    /* Languages */
    /* Frontend */
    "HTML 5": {
        url: "https://www.w3schools.com/html/",
        icon: html,
        color: 'yellow-text',
        desc: "HTML 5 is the latest version of the Hypertext Markup Language used for structuring web content. It introduces new features for multimedia and interactivity.",
    },
    "CSS 3": {
        url: "https://www.w3.org/Style/CSS/Overview.en.html",
        icon: css,
        color: 'blue-text',
        desc: "CSS 3, or Cascading Style Sheets Level 3, is used for styling and layout of web pages. It enables sophisticated design and visual effects.",
    },
    "Tailwind CSS": {
        url: "https://tailwindcss.com/",
        icon: tailwind,
        color: 'cyan-text',
        desc: "Tailwind CSS is a utility-first CSS framework that simplifies web development by providing a set of utility classes for styling.",
    },
    "Framer Motion": {
        url: "https://www.framer.com/motion/",
        icon: framer,
        color: 'indigo-text',
        desc: "Framer Motion is a JavaScript animation library used for creating smooth, interactive animations in web applications.",
    },
    "Emotion": {
        url: "https://emotion.sh/docs/introduction",
        icon: emotion,
        color: 'red-text',
        desc: "Emotion is a popular CSS-in-JS library that allows developers to style components with CSS in a more maintainable and scoped manner.",
    },
    "Chakra UI": {
        url: "https://chakra-ui.com/",
        icon: chakra,
        color: 'cyan-text',
        desc: "Chakra UI is a set of accessible and customizable UI components for building responsive web applications with ease.",
    },
    /* Frontend */
    /* Backend */
    "Redux": {
        url: "https://redux.js.org/",
        icon: redux,
        color: 'indigo-text',
        desc: "Redux is a predictable state management library for JavaScript applications, commonly used with React to manage application state.",
    },
    "Node JS": {
        url: "https://www.nodejs.org/",
        icon: nodejs,
        color: 'green-text',
        desc: "Node.js is a runtime environment that allows server-side JavaScript execution, making it a versatile choice for building scalable web applications.",
    },
    "Docker": {
        url: "https://www.docker.com/",
        icon: docker,
        color: 'blue-text',
        desc: 'Docker is a platform for containerization, enabling developers to package applications and their dependencies for easy deployment and scaling.',
    },
    "Express JS": {
        url: "https://expressjs.com/",
        icon: expressjs,
        color: 'cyan-text',
        desc: 'Express.js is a minimal and flexible Node.js web application framework that simplifies the development of web and mobile applications.',
    },
    /* Backend */
    /* Database */
    "SQL": {
        url: "https://www.w3schools.com/sql/",
        icon: sql,
        color: 'red-text',
        desc: "SQL, or Structured Query Language, is used to manage and manipulate relational databases. It's essential for data storage and retrieval in many applications.",
    },
    "Mongo DB": {
        url: "https://www.mongodb.com/",
        icon: mongodb,
        color: 'green-text',
        desc: "MongoDB is a NoSQL database that stores data in a flexible, document-like format, making it suitable for a wide range of data storage needs.",
    },
    /* Database */
    /* Version Control */
    "Git": {
        url: "https://git-scm.com/",
        icon: git,
        color: 'orange-text',
        desc: "Git is a distributed version control system used for tracking changes in source code. It's essential for collaborative software development.",
    },
    "GitHub": {
        url: "https://github.com/",
        icon: github,
        color: 'orange-text',
        desc: "GitHub is a web-based platform for hosting and collaborating on Git repositories. It's widely used for open-source and private project management.",
    },
    /* Version Control */
    /* Data Science */
    "Matplotlib": {
        url: "https://matplotlib.org/",
        icon: matplotlib,
        color: 'blue-text',
        desc: "Matplotlib is a Python library for creating static, animated, and interactive visualizations in data science and scientific computing.",
    },
    "Numpy": {
        url: "https://www.numpy.org/",
        icon: numpy,
        color: 'indigo-text',
        desc: "NumPy is a Python library for numerical computations, providing support for arrays and matrices and a wide range of mathematical functions.",
    },
    "Pandas": {
        url: "https://pandas.pydata.org/",
        icon: pandas,
        color: 'orange-text',
        desc: "Pandas is a data manipulation library for Python, offering data structures and data analysis tools, making it useful for data cleaning and analysis.",
    },
    "Scikit learn": {
        url: "https://scikit-learn.org/stable/",
        icon: scikitlearn,
        color: 'blue-text',
        desc: "Scikit-learn is a machine learning library for Python, providing a wide range of tools for data analysis and predictive modeling.",
    },
    /* Data Science */
    /* Microsoft Services */
    "Windows": {
        url: "https://www.microsoft.com/en-us/windows",
        icon: windows,
        color: 'blue-text',
        desc: "Windows is a popular operating system for personal computers, widely used for various software applications and gaming.",
    },
    "Powershell": {
        url: "https://learn.microsoft.com/en-us/powershell/",
        icon: powershell,
        color: 'blue-text',
        desc: "PowerShell is a task automation framework and scripting language developed by Microsoft, primarily used for system administration and automation tasks.",
    },
    "Office": {
        url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web",
        icon: office,
        color: 'yellow-text',
        desc: "Microsoft Office is a suite of productivity software, including applications like Word, Excel, and PowerPoint, used for various office and business tasks.",
    },
    "VS Code": {
        url: "https://code.visualstudio.com/",
        icon: vscode,
        color: 'indigo-text',
        desc: "Visual Studio Code is a highly extensible and popular code editor developed by Microsoft, widely used by developers for a range of programming languages.",
    },
    /* Microsoft Services */
    /* UNIX Services */
    "BASH": {
        url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
        icon: bash,
        color: 'orange-text',
        desc: "Bash is a Unix shell and command language used for scripting and automation in Unix-based systems.",
    },
    "GIMP": {
        url: "https://gimp.org/",
        icon: gimp,
        color: 'orange-text',
        desc: "GIMP, or GNU Image Manipulation Program, is a free and open-source image editing software used for graphic design and image manipulation.",
    },
    "Kali": {
        url: "https://www.kali.org/",
        icon: kali,
        color: 'cyan-text',
        desc: "Kali Linux is a Debian-based distribution designed for digital forensics, penetration testing, and cybersecurity tasks, often used by security professionals and ethical hackers.",
    }
    /* UNIX Services */
}
const experiences = [
    {
        title: "Software Developer",
        company_name: "GFN",
        icon: gfn,
        url: "www.gfn.de",
        iconBg: "#ffffff",
        date: "Dec 2015 - Jun 2018",
        projects: [
            { name: "technology", desc: "Proficiency in HTML, CSS, JavaScript, and related web technologies" },
            { name: "responsive", desc: "Responsive web design principles and techniques" },
            { name: "access", desc: "Web accessibility and usability guidelines" },
            { name: "performance", desc: "Website performance optimization" },
            { name: "content", desc: "Knowledge of content management systems (CMS)" },
            { name: "seo", desc: "Search engine optimization (SEO) best practices" },
            { name: "security", desc: "Website security measures and practices" },
            { name: "commerce", desc: "E-commerce and online payment integration" },
            { name: "analysis", desc: "Web analytics and data-driven decision-making" },
            { name: "ethic", desc: "Legal and ethical considerations in web development and design" },
        ],
        points: [
            "A preparatory program in Germany aimed at helping individuals attain the IHK certification for Application Development Specialists.",
            "This intensive training equips participants with the skills and knowledge necessary to excel in software development, covering a range of relevant programming languages and concepts.",
        ],
    },
    {
        title: "Java Developer",
        company_name: "Oracle",
        icon: oracle,
        url: "www.oracle.com",
        iconBg: "#ffffff",
        date: "Jan 2016 - Jan 2017",
        projects: [
            { name: "prepare", desc: "Led the preparation for the Java 7SE OCA (Oracle Certified Associate) certification, a rigorous process to assess foundational Java programming skills." },
            { name: "instruct", desc: "Proficiently instructed aspiring candidates in essential core Java concepts, covering variables, data types, control structures, and object-oriented programming principles." },
            { name: "examine", desc: "Facilitated the Oracle-administered examination to evaluate candidates' comprehensive understanding of Java fundamentals, ensuring they were equipped with the knowledge necessary for developing Java applications." },
        ],
        points: [
            "The Java 7SE OCA (Oracle Certified Associate) certification preparation is a rigorous process designed to assess an individual's foundational skills in Java programming.",
            "Aspiring candidates typically study various core Java concepts, including variables, data types, control structures, and object-oriented programming principles.",
            "The examination, administered by Oracle, evaluates one's understanding of Java fundamentals, ensuring that certified professionals possess the knowledge needed to write Java applications.",
        ],

    },
    {
        title: "Frontend Developer",
        company_name: "Webmasters Europe",
        icon: we,
        url: "de.webmasters-europe.org",
        iconBg: "#ffffff",
        date: "Jun 2016 - Mar 2017",
        projects: [
            { name: "html", desc: "Hypertext Markup Language 5" },
            { name: "css", desc: "Cascade Style Sheet 3" },
            { name: "sass", desc: "Syntactically Awesome Style Sheet" },
            { name: "js", desc: "JavaScript" },
            { name: "php", desc: "Hypertext Preprocessor" },
            { name: "sql", desc: "Stuctured Query Language" }
        ],
        points: [
            "The Webmasters Europe Certification for Web Developer Grade 1 and 2, along with the Backend Developer 1 certification, is a highly regarded program that validates proficiency in a range of essential web development technologies.",
            "Participants can expect to gain expertise in HTML, CSS, JavaScript, Sass, PHP, and MySQL, encompassing the fundamental tools and languages necessary for creating dynamic and responsive web applications. ",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "IHK Berlin-Germany",
        icon: ihk,
        url: "www.ihk.de",
        iconBg: "#ffffff",
        date: "Jan 2020 - Jan 2021",
        projects: [
            { name: "fundament", desc: "Fundamentals of business administration and legal regulations" },
            { name: "concept", desc: "Conceptualization and development of software applications" },
            { name: "code", desc: "Programming in various languages such as Java, C++, or C#" },
            { name: "database", desc: "Database design and management, including SQL" },
            { name: "security", desc: "Implementation of security mechanisms in software applications" },
            { name: "integrate", desc: "System integration and configuration of IT infrastructures" },
            { name: "analysis", desc: "Error analysis and troubleshooting in software applications" },
            { name: "test", desc: "Testing and quality assurance of software solutions" },
            { name: "manage", desc: "Project management and documentation of development processes" },
            { name: "collaborate", desc: "Communication and collaboration in interdisciplinary teams" },
            { name: "ethic", desc: "Professional ethics and legal aspects in the IT field" },
            { name: "trend", desc: "Current trends and developments in software development." },
        ],
        points: [
            "A specialized vocational qualification in Germany, recognized by the Chamber of Commerce (IHK).",
            "It focuses on training individuals to become application development specialists, emphasizing the practical aspects of software development.",
            "This program equips participants with the necessary skills to design and implement software applications.",
        ],
    },
    {
        title: "Data Science - Bootcamp",
        company_name: "Spiced",
        icon: spiced,
        url: "www.spiced-academy.com",
        iconBg: "#ffffff",
        date: "Jan 2023 - Present",
        projects: [
            { name: "vda", desc: "Visual Data Analysis" },
            { name: "cls", desc: "Classification" },
            { name: "reg", desc: "Regression" },
            { name: "tcl", desc: "Text Classification" },
            { name: "das", desc: "Dashboard" },
            { name: "pip", desc: "Data Pipeline" },
            { name: "tsa", desc: "Time Series Analysis" },
            { name: "sim", desc: "Markov Simulation" },
            { name: "dpl", desc: "Deep Learning" },
            { name: "sys", desc: "Recommender Systems" }
        ],
        points: [
            "A comprehensive and immersive program designed to equip aspiring data scientists with the skills and knowledge needed to excel in this rapidly evolving field. ",
            "With a strong focus on practical, hands-on learning, the bootcamp covers a wide range of topics, including data analysis, machine learning, and data engineering. ",
            "Students benefit from a supportive and collaborative learning environment, experienced instructors, and real-world projects."
        ],
    },
]
const testimonials = [
    {
        "testimonial": "Kadir's web development expertise has greatly improved our site's performance. His optimizations have had a significant impact on user engagement.",
        "name": "John Smith",
        "designation": "Web Developer",
        "company": "XYZ Web Solutions",
        "image": "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        "testimonial": "Kadir is a web development genius. His work has transformed our website, making it more attractive to users and improving our online presence.",
        "name": "Emily Lewis",
        "designation": "Marketing Manager",
        "company": "Lewis Marketing Group",
        "image": "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
        "testimonial": "We are incredibly grateful for Kadir's expertise. His optimization efforts have made our website stand out and resulted in a significant increase in user traffic.",
        "name": "Mark Johnson",
        "designation": "IT Director",
        "company": "Tech Innovators Inc.",
        "image": "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
        "testimonial": "Kadir's skills have been a game-changer for our website. His improvements have boosted our site's performance, making our users happier than ever.",
        "name": "Sarah Clark",
        "designation": "Content Creator",
        "company": "Content Creations Co.",
        "image": "https://randomuser.me/api/portraits/women/49.jpg"
    },
    {
        "testimonial": "Kadir's web development expertise has significantly improved our online presence. His optimizations have led to higher user engagement and a better website overall.",
        "name": "Michael Roberts",
        "designation": "Chief Technology Officer",
        "company": "Innovate Technologies",
        "image": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
        "testimonial": "Working with Kadir has been a game-changer for our business. His web development skills have taken our website to new heights, attracting more users and boosting our online growth.",
        "name": "Laura Turner",
        "designation": "Marketing Director",
        "company": "Turner Marketing Solutions",
        "image": "https://randomuser.me/api/portraits/women/70.jpg"
    },
    {
        "testimonial": "We owe our website's success to Kadir's exceptional skills. His optimizations have catapulted our site's performance and user engagement.",
        "name": "James Baker",
        "designation": "Lead Developer",
        "company": "Baker Web Services",
        "image": "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        "testimonial": "Kadir's expertise in web development has been a game-changer for our online presence. His work has significantly improved our website's performance, attracting more users.",
        "name": "Emma White",
        "designation": "IT Manager",
        "company": "WhiteTech Solutions",
        "image": "https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
        "testimonial": "Kadir's web development skills have transformed our online presence. His optimizations have led to higher user engagement and a better website overall.",
        "name": "Daniel Harris",
        "designation": "Web Developer",
        "company": "Harris Web Solutions",
        "image": "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
        "testimonial": "We're grateful for Kadir's web development expertise. His work has significantly improved our website, resulting in a noticeable boost in user engagement.",
        "name": "Olivia Miller",
        "designation": "Marketing Specialist",
        "company": "Miller Marketing Group",
        "image": "https://randomuser.me/api/portraits/women/53.jpg"
    },
    {
        "testimonial": "Kadir's web development skills have been instrumental in our online success. Our website now stands out and attracts more users.",
        "name": "David Lee",
        "designation": "Software Engineer",
        "company": "Lee Software Solutions",
        "image": "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        "testimonial": "Kadir's expertise in web development has been a game-changer for our business. His optimizations have resulted in a significant increase in user engagement.",
        "name": "Sophia Martin",
        "designation": "Content Manager",
        "company": "Martin Content Creations",
        "image": "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        "testimonial": "Our web success is owed to Kadir's skills. His optimizations have catapulted our site's performance and user engagement.",
        "name": "Ethan Clark",
        "designation": "Lead Web Developer",
        "company": "Clark Web Solutions",
        "image": "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        "testimonial": "Kadir's web development expertise has significantly improved our website's performance. His optimizations have had a measurable impact on user engagement.",
        "name": "Aria Wilson",
        "designation": "Marketing Manager",
        "company": "Wilson Marketing Group",
        "image": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "testimonial": "We have seen a remarkable transformation in our website thanks to Kadir's web development skills. It's more engaging and user-friendly than ever.",
        "name": "William Turner",
        "designation": "Web Developer",
        "company": "Turner Web Creations",
        "image": "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
        "testimonial": "Kadir's expertise in web development has been a game-changer. His work has significantly improved our website's performance, resulting in a noticeable boost in user engagement.",
        "name": "Isabella Baker",
        "designation": "Digital Marketer",
        "company": "Baker Marketing Solutions",
        "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "testimonial": "Kadir's web development skills have made a huge difference for us. Our website's performance has soared, and user engagement is at an all-time high.",
        "name": "Liam Davis",
        "designation": "Chief Technology Officer",
        "company": "Davis Tech Innovations",
        "image": "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
        "testimonial": "Our website's success is thanks to Kadir's exceptional web development skills. His optimizations have resulted in a remarkable improvement in user engagement.",
        "name": "Olivia White",
        "designation": "Web Developer",
        "company": "White Web Innovations",
        "image": "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
        "testimonial": "Kadir is a web development genius. His expertise has significantly improved our online presence, making our website more engaging to users.",
        "name": "Benjamin Martin",
        "designation": "Marketing Director",
        "company": "Martin Marketing Strategies",
        "image": "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
        "testimonial": "Working with Kadir has been transformative. His web development skills have significantly improved our website's performance and user engagement.",
        "name": "Amelia Lee",
        "designation": "Content Manager",
        "company": "Lee Content Creations",
        "image": "https://randomuser.me/api/portraits/women/80.jpg"
    }
]
const projects = [
    {
        name: "3D Portfolio",
        initial: "3DP",
        active: true,
        description:
            "A impressive modern 3D portfolio website, that introduce my progress of software management.",
        tech: [
            {
                name: 'React JS',
                url: technologies["React JS"].url,
                icon: technologies["React JS"].icon,
                color: technologies["React JS"].color,
                desc: technologies["React JS"].desc,
            },
            {
                name: 'Tailwind CSS',
                url: technologies["Tailwind CSS"].url,
                icon: technologies["Tailwind CSS"].icon,
                color: technologies["Tailwind CSS"].color,
                desc: technologies["Tailwind CSS"].desc,
            },
            {
                name: 'Framer Motion',
                url: technologies["Framer Motion"].url,
                icon: technologies["Framer Motion"].icon,
                color: technologies["Framer Motion"].color,
                desc: technologies["Framer Motion"].desc,
            },
            {
                name: 'Three JS',
                url: technologies["Three JS"].url,
                icon: technologies["Three JS"].icon,
                color: technologies["Three JS"].color,
                desc: technologies["Three JS"].desc,
            },
        ],
        image: ddp,
        source_code_link: "https://github.com/sehzam/3d_portfolio",
    },
    {
        name: "Responsive Personal Portfolio",
        initial: "PURELY",
        active: true,
        description:
            "A purely responsive portfolio website.",
        tech: [
            {
                name: "HTML 5",
                url: technologies["HTML 5"].url,
                icon: technologies["HTML 5"].icon,
                color: technologies["HTML 5"].color,
                desc: technologies["HTML 5"].desc,
            },
            {
                name: "CSS 3",
                url: technologies["CSS 3"].url,
                icon: technologies["CSS 3"].icon,
                color: technologies["CSS 3"].color,
                desc: technologies["CSS 3"].desc,
            },
            {
                name: "JavaScript",
                url: technologies["JavaScript"].url,
                icon: technologies["JavaScript"].icon,
                color: technologies["JavaScript"].color,
                desc: technologies["JavaScript"].desc,
            },
        ],
        image: purely,
        source_code_link: "https://github.com/sehzam/portfolio",
    },
    {
        name: "Alias Listing System",
        initial: "ALI",
        active: true,
        description:
            "Bash-based alias listing system that allows useful UNIX-like short-access commands.",
        tech: [
            {
                name: "BASH",
                url: technologies["BASH"].url,
                icon: technologies["BASH"].icon,
                color: technologies["BASH"].color,
                desc: technologies["BASH"].desc,
            },
            {
                name: 'Git',
                url: technologies["Git"].url,
                icon: technologies["Git"].icon,
                color: technologies["Git"].color,
                desc: technologies["Git"].desc,
            },
            {
                name: 'GitHub',
                url: technologies["GitHub"].url,
                icon: technologies["GitHub"].icon,
                color: technologies["GitHub"].color,
                desc: technologies["GitHub"].desc,
            },
        ],
        image: ali,
        source_code_link: "https://github.com/sehzam/ali",
    },
    {
        name: "Trainer Vote",
        initial: "VOTEX",
        active: false,
        description:
            "Web-based platform that allows users to vote trainer in passed courses, comparison possibilities with data analysis and visualization.",
        tech: [
            {
                name: 'React JS',
                url: technologies["React JS"].url,
                icon: technologies["React JS"].icon,
                color: technologies["React JS"].color,
                desc: technologies["React JS"].desc,
            },
            {
                name: 'Node JS',
                url: technologies["Node JS"].url,
                icon: technologies["Node JS"].icon,
                color: technologies["Node JS"].color,
                desc: technologies["Node JS"].desc,
            },
            {
                name: 'Express JS',
                url: technologies["Express JS"].url,
                icon: technologies["Express JS"].icon,
                color: technologies["Express JS"].color,
                desc: technologies["Express JS"].desc,
            },
            {
                name: 'Mongo DB',
                url: technologies["Mongo DB"].url,
                icon: technologies["Mongo DB"].icon,
                color: technologies["Mongo DB"].color,
                desc: technologies["Mongo DB"].desc,
            },
        ],
        image: trainervote,
        source_code_link: "https://github.com/sehzam/trainer_vote",
    },
    {
        name: "Threads - Dashboard",
        initial: "TRIX",
        active: false,
        description:
            "A threads dashboard website, nearly full productive.",
        tech: [
            {
                name: 'Next JS',
                url: technologies["Next JS"].url,
                icon: technologies["Next JS"].icon,
                color: technologies["Next JS"].color,
                desc: technologies["Next JS"].desc,
            },
            {
                name: 'Tailwind CSS',
                url: technologies["Tailwind CSS"].url,
                icon: technologies["Tailwind CSS"].icon,
                color: technologies["Tailwind CSS"].color,
                desc: technologies["Tailwind CSS"].desc,
            },
            {
                name: 'Framer Motion',
                url: technologies["Framer Motion"].url,
                icon: technologies["Framer Motion"].icon,
                color: technologies["Framer Motion"].color,
                desc: technologies["Framer Motion"].desc,
            },

        ],
        image: trix,
        source_code_link: "https://github.com/sehzam/threads",
    },
    {
        name: "Data Science Interactive Learning",
        initial: "DATIL",
        active: false,
        description:
            "Web application that enables users to learn data science in a interactive way. With a bunch of features like direct output view(like jupyter notebook).",
        tech: [
            {
                name: 'Next JS',
                url: technologies["Next JS"].url,
                icon: technologies["Next JS"].icon,
                color: technologies["Next JS"].color,
                desc: technologies["Next JS"].desc,
            },
            {
                name: 'React JS',
                url: technologies["React JS"].url,
                icon: technologies["React JS"].icon,
                color: technologies["React JS"].color,
                desc: technologies["React JS"].desc,
            },
            {
                name: 'Python',
                url: technologies["Python"].url,
                icon: technologies["Python"].icon,
                color: technologies["Python"].color,
                desc: technologies["Python"].desc,
            },
            {
                name: 'TypeScript',
                url: technologies["TypeScript"].url,
                icon: technologies["TypeScript"].icon,
                color: technologies["TypeScript"].color,
                desc: technologies["TypeScript"].desc,
            },
        ],
        image: datil,
        source_code_link: "https://github.com/sehzam/datil",
    },
    {
        name: "Real Estate Library",
        initial: "BESTATE",
        active: false,
        description:
            "A real estate platform that allows direct interactions with models into a web-based 3D world.",
        tech: [
            {
                name: 'Next JS',
                url: technologies["Next JS"].url,
                icon: technologies["Next JS"].icon,
                color: technologies["Next JS"].color,
                desc: technologies["Next JS"].desc,
            },
            {
                name: 'Framer Motion',
                url: technologies["Framer Motion"].url,
                icon: technologies["Framer Motion"].icon,
                color: technologies["Framer Motion"].color,
                desc: technologies["Framer Motion"].desc,
            },
            {
                name: 'Emotion',
                url: technologies["Emotion"].url,
                icon: technologies["Emotion"].icon,
                color: technologies["Emotion"].color,
                desc: technologies["Emotion"].desc,
            },
            {
                name: 'Chakra UI',
                url: technologies["Chakra UI"].url,
                icon: technologies["Chakra UI"].icon,
                color: technologies["Chakra UI"].color,
                desc: technologies["Chakra UI"].desc,
            },
        ],
        image: tml,
        source_code_link: "https://github.com/sehzam/bestate",
    },
    {
        name: "ThreeJS Models Library",
        initial: "TML",
        active: false,
        description:
            "A filterable models comparison platform that allows direct interactions with models into a web-based 3D world, with a one ecosystem that allows trade and transaction of game-money.",
        tech: [
            {
                name: 'Next JS',
                url: technologies["Next JS"].url,
                icon: technologies["Next JS"].icon,
                color: technologies["Next JS"].color,
                desc: technologies["Next JS"].desc,
            },
            {
                name: 'Mongo DB',
                url: technologies["Mongo DB"].url,
                icon: technologies["Mongo DB"].icon,
                color: technologies["Mongo DB"].color,
                desc: technologies["Mongo DB"].desc,
            },
            {
                name: 'Three JS',
                url: technologies["Three JS"].url,
                icon: technologies["Three JS"].icon,
                color: technologies["Three JS"].color,
                desc: technologies["Three JS"].desc,
            },
        ],
        image: tml,
        source_code_link: "https://github.com/sehzam/tml",
    },
]
export { services, technologies, experiences, testimonials, projects, science }