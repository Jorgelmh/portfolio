import Styles from '../../styles/Home.module.css'
import ReactPlayer from 'react-player'
import { useState } from 'react'

/* Single project display */
const SingleProject = ({Data}) => {

    const [isPlaying, setPlaying] = useState(false)
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

    if(Data){
        return(
            <li className="glide__slide">
                <div className={Styles.single_project}  onMouseOver={() => setPlaying(true)} onMouseLeave={() => setPlaying(false)}>
                    <div className={Styles.project_content}>
                        <ReactPlayer playbackRate={Data.speed} className={Styles.project_video} url={prefix + Data.video} playing={isPlaying} loop={true} volume={0}/>
                        <div className={Styles.project_info}>
                            <a href={Data.link} target="_blank" className={Styles.live_version}>{Data.name}</a>
                            <p>{Data.description}</p>
                            <p><span className={Styles.comment_style}>Technologies:</span> {Data.technologies}</p>
                            <p><span className={Styles.comment_style}>Source code:</span><a target="_blank" href={Data.source} className="text-light" style={{fontSize: '1.5rem', marginLeft: '20px'}}><i aria-hidden className="fab fa-github" /></a></p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }else
        return <p>Error</p>

    
}

export default SingleProject