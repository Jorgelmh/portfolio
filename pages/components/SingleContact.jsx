import Styles from '../../styles/Home.module.css'

/* Single contact component (Github, Linkedin and mail) */
const SingleContact = ({message, img, url}) => (
    <div className={`${Styles.single_skill} ${Styles.contact_link} col-md`}>
        <a href={url} target="_blank" style={{textDecoration: 'none'}}>
            <div className={Styles.skillLogo}>{img}</div>
            <p className="text-light text-center">{message}</p>
        </a>
    </div>
)

export default SingleContact