import React, { useEffect } from 'react'
import Styles from '../../styles/Home.module.css'
import { Icon } from '@iconify/react'
import IncidentsImage from '../../public/images/incidents-map.png'
import SingleSherpaImage from './SingleSherpaImage'
import AlertStateMap from '../../public/images/alert-states-map.png'
import RestrictionBox from '../../public/images/restriction-box.png'
import Glide from '@glidejs/glide'

const experienceImage = [
    {
        img: IncidentsImage,
        title: 'Incidents',
        description: 'Report incidents in a specific geolocation and display them on a Map (Mapbox).'
    },
    {
        img: AlertStateMap,
        title: 'Alert States',
        description: 'Display alert states for the regions and counties of a country.'
    },
    {
        img: RestrictionBox,
        title: 'Restriction Boxes',
        description: 'Draw polygons that define an out of bands geospatial area.'
    }
]

const Experience = () => {
    useEffect(() => {
        new Glide('.glide-experience', {
            perView: 1
        }).mount()
    }, [])
    return (
        <section className='container' style={{ height: '100vh' }}>
            <h2 className={Styles.subtitle}> My Professional Experience </h2>
            <div className='row'>
                <div data-aos="fade-up" className={Styles.experience_details + ' col-md'}>
                    <h2 style={{ margin: '10px 0', textAlign: 'left' }} className={Styles.experience_title}>Junior Software Developer</h2>
                    <h3 className={Styles.comment_style}>Jun 2021 - Present</h3>
                    <h4 className={Styles.company}><Icon icon='bx:building' /> Trubshaw Cumberlege, Ltd.</h4>
                    <p className={Styles.job_description}>
                        Our goal has been to create a new integrated social risk management platform to improve social performance
                        in the most complex areas of the planet. To do this, we started the project from scratch last summer and it has been evolving
                        over time in regards to complexity, software architecture and libraries employed.
                        In terms of my responsabilities, I've been mainly focused on the development of the frontend features of a React
                        application that allows users to evaluate risks for key assets,
                        set alert states and report incidents using a browser map library (MapBox).
                        Similarly, I've taken an active role proposing solutions for some backend issues as well as writing them myself
                        when required. On the side you can see some of the most interesting features I've developed so far.
                    </p>
                </div>
                <div className={Styles.experience_image + ' col-md'}>
                    <div>
                        <div className="glide-experience">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {
                                        experienceImage.map((data) => <SingleSherpaImage key={data.title} {...data} />)
                                    }
                                </ul>
                            </div>
                            <div className="glide__arrows" data-glide-el="controls">
                                <button style={{ top: '40%' }} className="glide__arrow glide__arrow--left text-dark" data-glide-dir="<"><i aria-hidden className="fas fa-arrow-circle-left" /></button>
                                <button style={{ top: '40%' }} className="glide__arrow glide__arrow--right text-dark" data-glide-dir=">"><i aria-hidden className="fas fa-arrow-circle-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
