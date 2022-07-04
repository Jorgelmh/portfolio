import Styles from '../../styles/Home.module.css'
import SingleSkill from './SingleSkill'
import { Icon } from '@iconify/react'

/* Data about my skills */
const skillsData = [
    {
        id: 1,
        logo: <Icon icon='icon-park-twotone:thinking-problem'/>,
        title: 'Problem-Solving',
        description: 'My main motivation while writing code is always to solve a problem, and the more complex they are the more interesting they become to me and as results the more focused and motivated I become 😆'
    },
    {
        id: 2,
        logo: <i aria-hidden className="fab fa-js-square" />,
        title: 'JavaScript',
        description: "My main skill definitely. Libraries: JQuery, ReactJS (Next too), ExpressJS, SocketIO, Jest and Node as a Runtime Environment."
    },
    {
        id: 3,
        logo: <Icon icon="cib:typescript" />,
        title: 'TypeScript',
        description: "I've used this language with popular frameworks such as Angular and React to effectively reduce the likelihood of runtime errors in the browser, and to improve modularity and bastraction in the codebase."
    },
    {
        id: 4,
        logo: <Icon icon='akar-icons:react-fill' />,
        title: 'React',
        description: "Definetely the library I'm most comfortable with. Been mastering it for at least 3 years with at least 1 year of professional experience. Learnt skills such as state management, customized hooks and scaling-up components"
    },
    {
        id: 5,
        logo: <i aria-hidden className="fas fa-tablet-alt" />,
        title: 'Automated UI Testing',
        description: 'Designed and Setup frontend test to be run automatically using libraries such as Cypress and Playwright. Without forgetting to add unit tests for components using Jest.'
    },
    {
        id: 6,
        logo: <i aria-hidden className="fas fa-cloud-upload-alt" />,
        title: 'Cloud computing',
        description: "I've used cloud computing services such as Heroku and AWS to deploy some of my projects and maintain complex architecture for other production environments."
    },
    {
        id: 7,
        logo: <Icon icon='ant-design:cloud-server-outlined'/>,
        title: 'Backend Technologies',
        description: 'Including Ruby (Rails), Python (Django), PHP (Laravel), NodeJS used to develop high performing server-side applications.'
    },
    {
        id: 8,
        logo: <i aria-hidden className="fab fa-python" />,
        title: 'Python',
        description: 'Mainly involved in data analysis exercises and machine vision models. Libraries such as TF, Pandas, Numpy and Matplotlib.'
    },
    {
        id: 9,
        logo: <i aria-hidden className="fab fa-java" />,
        title: 'Java',
        description: 'Taught in Uni, I managed to master most important features such as multi-threading, the Spring framework and general OOP principles.'
    }
]
const callback = ({id, logo, title, description}) => (
    <SingleSkill key={id} logo={logo} title={title} description={description} />
)

const row1 = skillsData.slice(0, 3).map(callback)
const row2 = skillsData.slice(3, 6).map(callback)
const row3 = skillsData.slice(6, 9).map(callback)

const Skills = () => (
    <section className="container" id="skills">
        <h2 className={Styles.subtitle}>My skills</h2>
        <div className={Styles.skill_list + ' text-light clearfix'}>
            <div className="row">
                {row1}
            </div>
            <div className="row">
                {row2}
            </div>
            <div className="row">
                { row3 }
            </div>
        </div>
        <p className={Styles.comment_style + ' text-center'} style={{margin: '30px'}}>//Use of git and github for version control</p>
    </section>
)

export default Skills