import React from 'react'
import Styles from '../../styles/Home.module.css'

const SingleSherpaImage = ({ img, title, description }) => (
    <li className="glide__slide">
        <div data-aos="fade-up" className={Styles.single_project}>
            <div className={Styles.project_content}>
                <img src={img} className={Styles.sherpa_image} />
                <div className={Styles.project_info}>
                    <h3>{ title }</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </li>
)

export default SingleSherpaImage
