import Styles from '../../styles/Home.module.css'
import SingleSkill from './SingleSkill'

/* Data about my skills */
const skillsData = [
    {
        id: 1,
        logo: <i aria-hidden className="fab fa-js-square" />,
        title: 'JavaScript',
        description: "My main skill definitely. Libraries: JQuery, ReactJS (Next too), ExpressJS, SocketIO, Jest and Node as a Runtime Environment."
    },
    {
        id: 2,
        logo: <i aria-hidden className="fab fa-java" />,
        title: 'Java',
        description: "This was my first programming language. Skills: multi-threading, inheritance, encapsulation, abstraction, algorithms and modelling."
    },
    {
        id: 3,
        logo: <i aria-hidden className="fas fa-cloud-upload-alt" />,
        title: 'Cloud computing',
        description: "I've used cloud computing services such as Heroku and AWS to deploy and analize remote performance of some of my projects."
    },
    {
        id: 4,
        logo: <i aria-hidden className="fab fa-php" />,
        title: 'PHP',
        description: 'Experience with Laravel and MySQL to develop APIs and web apps using the MVC framework.'
    },
    {
        id: 5,
        logo: <i aria-hidden className="fas fa-tablet-alt" />,
        title: 'UX design',
        description: 'Product analysis, development of personas and scenarios, interface design and prototype implementation.'
    },
    {
        id: 6,
        logo: <i aria-hidden className="fab fa-python" />,
        title: 'Python',
        description: 'Currently learning Python with the aim of using it for Machine learning and Data Analysis purposes using Scikit-learn, Pandas and NumPy.'
    },
]
const callback = ({id, logo, title, description}) => (
    <SingleSkill key={id} logo={logo} title={title} description={description} />
)

const row1 = skillsData.slice(0, 3).map(callback)
const row2 = skillsData.slice(3, 6).map(callback)

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
        </div>
        <p className={Styles.comment_style + ' text-center'} style={{margin: '30px'}}>//Use of git and github for version control</p>
    </section>
)

export default Skills