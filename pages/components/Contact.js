import SingleContact from './SingleContact'
import Styles from '../../styles/Home.module.css'

const contacts = [
    {
        id: 1,
        message: "See something that interests you? Don't hesitate to mail me :)",
        img:<i aria-hidden className="fas fa-envelope" />,
        url: 'mailto: jorgelmh_01@hotmail.com'
    },
    {
        id: 2,
        message: 'Follow me on LinkedIn',
        img: <i aria-hidden className="fab fa-linkedin" />,
        url: 'https://www.linkedin.com/in/jorgelmh'
    },
    {
        id: 3,
        message: 'Check out my other projects on GitHub',
        img: <i aria-hidden className="fab fa-github" />,
        url: 'https://github.com/Jorgelmh'
    }
]

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

/* Site contact me */
const Contact = () => (
    <section data-aos="fade-up" className="container" id="contact">
        <h2 className={Styles.subtitle}>Contact me!</h2>
        <div className="row">
            {
                contacts.map(({id, message, img, url}) => <SingleContact key={id}  message={message} img={img} url={url} />)
            }
        </div>
        <a className={Styles.download_btn + ' btn btn-primary'} href={prefix + '/Resume.docx'}><i aria-hidden className="fa fa-download" /> Download CV</a>
    </section>
)

export default Contact