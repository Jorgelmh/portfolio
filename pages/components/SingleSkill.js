import Styles from '../../styles/Home.module.css'

/* Component that displays a single skill */
const SingleSkill = ({logo, title, description}) => {

    /* On hover activate selector */
    const mouseover = (e) => document.getElementById(`hover-${title}`).style.display = 'block'
    const mouseout = (e) => document.getElementById(`hover-${title}`).style.display = 'none'

    return(
        <>
            <div id={title} data-aos="fade-up" onMouseOver={mouseover} onMouseOut={mouseout} className={Styles.single_skill + ' col-md'}>
                <div className={Styles.skillLogo}>{logo}</div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div id={'hover-' + title} className={Styles.selector}></div>
            </div>
        </>
    )
    
}

export default SingleSkill