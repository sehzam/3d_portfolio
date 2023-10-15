import {
    Page,
    Text,
    View,
    Document,
    Image,
    PDFViewer
} from '@react-pdf/renderer'

import CodeEditor from '@uiw/react-textarea-code-editor'
import { avatar } from '/src/assets/'

import stylesCv from '/src/styles/stylesCv'

import {
    information,
    languages,
    education,
    statements,
    experiences
} from '/src/constantsCv/'
import { useState } from 'react'

export const Resume = () => (


    <PDFViewer className="h-screen w-full">
        <Document >
            <Page size='A4' style={stylesCv.page}>
                {/* Left Column */}
                <View style={stylesCv.leftColumn}>
                    {/* Image */}
                    <Image src={avatar} style={stylesCv.image} />
                    {/* Information */}
                    <Text style={stylesCv.subheader}>Name</Text>
                    <Text style={stylesCv.text}>{information.name}</Text>
                    <Text style={stylesCv.subheader}>Address</Text>
                    <Text style={stylesCv.text}>{information.address}</Text>
                    <Text style={stylesCv.subheader}>Email</Text>
                    <Text style={stylesCv.text}>{information.email}</Text>
                    <Text style={stylesCv.subheader}>Phone</Text>
                    <Text style={stylesCv.text}>{information.phone}</Text>
                    {/* Skills */}
                    <Text style={stylesCv.subheader}>Skills</Text>
                    <View style={stylesCv.tech}>
                        {information.tech.map((tech) => (
                            <Image src={tech} style={stylesCv.techImage} />
                        ))}
                    </View>
                    {/* Languages */}
                    <Text style={stylesCv.subheader}>Languages</Text>
                    {languages.map((lang, index) => (
                        <>
                            <View key={index} style={stylesCv.progressBar}>
                                <View style={{ ...stylesCv.progressBarFill, width: lang.percentage }} />
                            </View>
                            <Text key={index} style={stylesCv.progressText}>{lang.title}</Text>
                        </>
                    ))}
                </View>
                {/* Right Column */}
                {/* Summary */}
                <View style={stylesCv.rightColumn}>
                    {statements.map((s, index) => (
                        <>
                            <Text key={index} style={stylesCv.headerRight}>{s.title}</Text>
                            <View key={index} style={stylesCv.statement}>
                                {s.sentences.map((sent, innerIndex) => (
                                    <Text key={innerIndex} style={stylesCv.statementRight}>{sent}</Text>
                                ))}
                                <Text key={index} style={stylesCv.url}>{s.url}</Text>
                                <Text key={index} style={stylesCv.letsWork}>{s.statement}</Text>
                            </View>
                        </>
                    ))}
                    {/* Education */}
                    <View style={stylesCv.education}>
                        <Text style={stylesCv.headerRight}>Education</Text>
                        <View style={stylesCv.cardContainer}>
                            {education.map((edu, index) => (
                                <View key={index} style={stylesCv.card}>
                                    <Text key={index} style={stylesCv.subheaderRight}>{edu.title}</Text>
                                    <View key={index} style={stylesCv.logo}>
                                        <Image key={index} src={edu.icon} style={stylesCv.techImage} />
                                        <Text key={index} style={stylesCv.textCompany}>{edu.company_name}</Text>
                                    </View>
                                    <Text key={index} style={stylesCv.textDate}>{edu.date}</Text>
                                    <Text key={index} style={stylesCv.textCardInfo}>{edu.type}</Text>
                                    {edu.points.map((point, innerIndex) => (
                                        <Text key={innerIndex} style={stylesCv.textCard}>· {point}</Text>
                                    ))}
                                    <View key={index} style={stylesCv.tech}>
                                        {edu.techs.map((t, innerIndex) => (
                                            <Image key={innerIndex} src={t} style={stylesCv.techImage} />
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    {/* Experience */}
                    <View style={stylesCv.experience}>
                        <Text style={stylesCv.headerRight}>Work Experience</Text>
                        <View style={stylesCv.cardContainer}>
                            {experiences.map((ex, index) => (
                                <View key={index} style={stylesCv.card}>
                                    <Text style={stylesCv.subheaderRight}>{ex.title}</Text>
                                    <View key={index} style={stylesCv.logo}>
                                        <Image key={index} src={ex.icon} style={stylesCv.techImage} />
                                        <Text style={stylesCv.textCompany}>{ex.company_name}</Text>
                                    </View>
                                    <Text style={stylesCv.textDate}>{ex.date}</Text>
                                    {ex.points.map((point, innerIndex) => (
                                        <Text key={innerIndex} style={stylesCv.textCard}>· {point}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>


)

export const Code = () => {
    const [codeCSS, setCodeCSS] = useState(
        `
import { Font, StyleSheet } from '@react-pdf/renderer'
import Lato from "/fonts/Lato-Regular.ttf"
Font.register({ family: 'Lato', src: Lato })

const styles = StyleSheet.create({

    page: {
        fontFamily: 'Lato',
        fontSize: 11,
        flexDirection: 'row',
        backgroundColor: '#212529',
    },
    leftColumn: {
        flex: 1,
        justifyContent: 'space-around',
        width: '30%',
        backgroundColor: '#212529',
        paddingHorizontal: 15,
    },
    rightColumn: {
        width: '70%',
        backgroundColor: '#343a40',
        borderRadius: 20,
        borderTop: '1px solid #ADB5BD',
        borderBottom: '2px solid #ADB5BD',
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    header: {
        textAlign: 'center',
        color: '#000000',
    },

    headerRight: {
        fontSize: 18,
        fontFamily: 'Lato',
        backgroundColor: '#212529',
        borderBottom: '1px solid white',
        textAlign: 'center',
        alignSelf: "center",
        color: '#00fa9a',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 6,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 1,
    },
    subheader: {
        fontSize: 18,
        fontFamily: 'Lato',
        alignSelf: "center",
        borderBottom: '2px solid #ADB5BD',

        color: '#00fa9a',
    },
    subheaderRight: {
        fontFamily: 'Lato',
        fontSize: 14,
        borderBottom: '1px solid gold',
        borderRadius: '50%',
        alignSelf: "center",
        color: 'white',
        backgroundColor: '#343a40',
        marginVertical: 7,
        paddingVertical: 3,
        paddingRight: 5,
        paddingLeft: 10,
    },
    text: {
        fontSize: 14,
        color: 'black',
        alignSelf: "center",
        borderRadius: 7,
        backgroundColor: 'white',
        paddingLeft: 5,
        paddingRight: 6,
        paddingVertical: 3,
    },
    textCard: {
        color: '#f8f9fa',
        alignSelf: 'start',
        borderRadius: '50%',
        marginHorizontal: 10,
        marginVertical: 3,
        fontSize: 9.5
    },
    textCardInfo: {
        textDecoration: 'underline',
        color: '#f8f9fa',
        borderRadius: '50%',
        alignSelf: 'center',
        paddingVertical: 3,
    },
    logo: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 3,
    },
    textCompany: {
        alignSelf: "center",
        color: 'white',
        fontFamily: 'Lato',
        marginLeft: 5,
    },
    textDate: {
        color: '#00ccff',
        alignSelf: "center",
        paddingVertical: 3,
    },
    statement: {
        textAlign: "center",
        alignSelf: "center",
        color: 'white',
        borderTop: '2px solid #00ccff',
        borderBottom: '2px solid #00ccff',
        backgroundColor: "#212529",
        borderRadius: '10px',
        padding: 6,
    },
    statementRight: {
        alignSelf: "center",
        color: 'white',
        margin: "0px 5px",
    },
    letsWork: {
        fontFamily: 'Lato',
        alignSelf: 'center',
        fontSize: 16,

    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tech: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 'auto',
        paddingVertical: 3,
    },
    url: {
        fontFamily: 'Lato',
        borderBottom: '1px solid gold',
        backgroundColor: '#343a40',
        color: '#00ccff',
        borderRadius: '50%',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 3,
    },
    cardBox: {
        backgroundColor: "white",
    },
    card: {
        borderTop: '0.5px solid #ADB5BD',
        borderRight: '0.5px solid #ADB5BD',
        borderLeft: '2px solid #ADB5BD',
        borderBottom: '2px solid #ADB5BD',
        borderRadius: "10px",
        backgroundColor: '#212529',
        width: '45%',
        paddingVertical: 10,
        marginVertical: 2
    },
    experience: {
    },
    education: {
    },
    techImage: {
        height: 28,
        width: 28,
        borderRadius: "50%",
        border: '0.4px solid white',
        backgroundColor: 'white',
        margin: 1,
    },
    image: {
        border: '3.5px solid #ADB5BD',
        borderRadius: "50%",
        backgroundColor: '#343a40',
        padding: 1
    },
    progressBar: {
        height: 8,
        backgroundColor: 'white',
        border: '0.5px solid black',
        borderRadius: 10,
        marginVertical: 2
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00CCFF',
        borderRadius: 4,
        margin: 0.5,
    },
    progressText: {
        fontFamily: 'Lato',
        color: 'white',
        alignSelf: "center",
        borderTop: '2px solid #ADB5BD',
        paddingVertical: 1,
        paddingTop: 5,
        marginBottom: 2,
    },
})
        `
    )
    const [codeHTML, setCodeHTML] = useState(`
import { 
    Page, Text, View, Document, Image, PDFViewer 
} from '@react-pdf/renderer'

import { 
        information, languages, education, statements, experiences 
} from '/src/constantsCv/'

export const Resume = ( ) = > (
<Document >
 <Page 
    size=' A4 ' 
    style={ stylesCv.page }>
  {/* Left Column */}
  <View style={ stylesCv.leftColumn }>
   {/* Image */}
   <Image 
        src=' /logo.png ' 
        style={ stylesCv.image } />
   {/* Information */}
    <Text style={ stylesCv.subheader }>
        Name
    </Text>
    <Text style={ stylesCv.text }>
        { information.name }
    </Text>
    <Text style={ stylesCv.subheader }>
        Address
    </Text>
    <Text style={ stylesCv.text }>
        { information.address }
    </Text>
    <Text style={ stylesCv.subheader }>
        Email
    </Text>
    <Text style={ stylesCv.text }>
        { information.email }
    </Text>
    <Text style={ stylesCv.subheader }>
        Phone
    </Text>
    <Text style={ stylesCv.text }>
        { information.phone }
    </Text>
   {/* Skills */}
    <Text style={ stylesCv.subheader }>
        Skills
    </Text>
    <View style={ stylesCv.tech }>
     { information.tech.map( ( tech ) => (
      <Image 
            src={ tech } 
            style={ stylesCv.techImage } />
     ))}
    </View>
   {/* Languages */}
    <Text style={ stylesCv.subheader }>
        Languages
    </Text>
   { languages.map( ( lang, index ) => (
    <>
     <View 
        key={ index } 
        style={ stylesCv.progressBar }>
      <View style={ { 
            ...stylesCv.progressBarFill, 
            width: lang.percentage 
            } } />
     </View>
     <Text 
        key={ index } 
        style={ stylesCv.progressText }>
            { lang.title }
     </Text>
    </>
   ))}
  </View>
  {/* Right Column */}
  {/* Summary */}
  <View style={ stylesCv.rightColumn }>
   { statements.map( ( s, index ) => (
    <>
     <Text style={ stylesCv.headerRight }>
        { s.title }
     </Text>
     <View 
        key={ index } 
        style={ stylesCv.statement }>
      { s.sentences.map( ( sent, innerIndex ) => (
        <Text 
            key={ innerIndex } 
            style={ stylesCv.statementRight }>
                { sent }
        </Text>
      ))}
      <Text 
        key={ index } 
        style={ stylesCv.url }>
            { s.url }
      </Text>
        <Text 
            key={ index } 
            style={ stylesCv.letsWork }>
                { s.statement }
        </Text>
     </View>
    </>
   ))}
   {/* Education */}
   <View style={ stylesCv.education }>
    <Text style={ stylesCv.headerRight }>
        Education
    </Text>
    <View style={ stylesCv.cardContainer }>
     { education.map( ( edu, index ) = > (
      <View 
        key={ index } 
        style={ stylesCv.card }>
        <Text 
            key={ index } 
            style={ stylesCv.subheaderRight }>
                { edu.title }
        </Text>
       <View 
            key={ index } 
            style={ stylesCv.logo }>
        <Image 
            key={ index } 
            src={ edu.icon } 
            style={ stylesCv.techImage } />
        <Text 
            key={ index } 
            style={ stylesCv.textCompany }>
                { edu.company_name }
        </Text>
       </View>
        <Text 
            key={ index } 
            style={ stylesCv.textDate }>
                { edu.date }
        </Text>
        <Text 
            key={ index } 
            style={ stylesCv.textCardInfo }>
                { edu.type }
        </Text>
       { edu.points.map( ( point, innerIndex ) = > (
        <Text 
            key={ innerIndex } 
            style={ stylesCv.textCard }>
                { point }
        </Text>
       ))}
       <View 
            key={ index } 
            style={ stylesCv.tech }>
            { edu.techs.map( ( t, innerIndex ) = > (
            <Image 
                key={ innerIndex } 
                src={ t } 
                style={ stylesCv.techImage } />
        ))
       </View>
      </View>
     ))}
    </View>
   </View>
   {/* Experience */}
   <View style={ stylesCv.experience }>
    <Text style={ stylesCv.headerRight }>
        Work Experience
    </Text>
    <View style={ stylesCv.cardContainer }>
     { experiences.map( ( ex, index ) = > (
      <View 
        key={ index } 
        style={ stylesCv.card }>
            <Text style={ stylesCv.subheaderRight }>
                { ex.title }
            </Text>
       <View 
            key={ index } 
            style={ stylesCv.logo }>
        <Image 
            key={ index } 
            src={ ex.icon } 
            style={ stylesCv.techImage } />
        <Text style={ stylesCv.textCompany }>
            { ex.company_name }
        </Text>
       </View>
        <Text style={ stylesCv.textDate }>
            { ex.date }
        </Text>
       { ex.points.map( ( point, innerIndex ) = > (
        <Text 
            key={ innerIndex } 
            style={ stylesCv.textCard }>
                { point }
        </Text>
       ))}
      </View>
     ))}
    </View>
   </View>
  </View>
 </Page>
</Document>
)
            `
    )
    const [codeConstant, setCodeConstant] = useState(

        `
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
    email: "kadurcey@gmail.com",
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
            "I'm a skilled software developer 
            with experience in TypeScript and JavaScript.",
            "Also expertised in frameworks like 
            React, Node.JS, and Three.js.",
            "To create efficient, scalable, 
            and user-friendly solutions.",
            "I'm a quick learner and collaborate closely 
            with clients that solve real-world problems."
        ],
    },
]
const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "SEHNET",
        icon: logo,
        date: "Jan 2018 - Present",
        type: "Projects",
        points: [
            "Developing a bunch of projects",
            "Exploration and applying technologies",
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
        `
    )

    return (
        <div className="rounded-xl bg-indigo-900/10  items-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="skyBorder rounded-xl m-1">
                <CodeEditor
                    value={codeHTML}
                    language="js"
                    disabled
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#010101",
                        borderRadius: "12px",
                        margin: 0.1,
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />

            </div>
            <div className="blueBorder rounded-xl m-1">

                <CodeEditor
                    value={codeCSS}
                    language="css"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        borderRadius: "12px",
                        margin: 0.1,
                        backgroundColor: "#010101",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </div>
            <div className="oceanBorder rounded-xl m-1">
                <CodeEditor
                    value={codeConstant}
                    language="js"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#010101",
                        borderRadius: "12px",
                        margin: 0.1,
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
            </div>
        </div>
    )
}