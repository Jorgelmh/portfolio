import Styles from '../../styles/Home.module.css'
import Glide from '@glidejs/glide'
import SingleProject from './SingleProject'
import { useEffect } from 'react'

const projectsData = [
    {
        id: 1,
        name: 'Spunchers.io',
        link: 'https://spunchers.io',
        description: 'A Multiplayer Online Game developed fully in JavaScript. Includes 3 game modes and 5 characters with different guns. It is hosted on Heroku and uses AWS Route 53 for DNS networking.',
        source: 'https://github.com/Jorgelmh/JS-TILE-GAME',
        technologies: 'NodeJS, Socket.io, ExpressJS, Webpack, HBS and Jest (for testing purposes)',
        video: '/videos/spunchers.mp4',
        speed: .6
    },
    {
        id: 2,
        name: 'DragJoystick UX',
        link:'https://jorgelmh.github.io/dragjoystick/',
        description: 'Prototype interface for DragJoystick, a package I developed that provides support for games running on mobile devices.',
        source: 'https://github.com/Jorgelmh/dragjoystick',
        technologies: 'Bootstrap, ReactJS, GlideJS and AOS',
        video: '/videos/dragjoystick.mp4',
        speed: .7
    },
    {
        id: 3,
        name: 'Land Page',
        link: 'https://jorgelmh.github.io/react-landpage/',
        description: 'Landing page developed with React for a PHP project.',
        source: 'https://github.com/Jorgelmh/react-landpage',
        technologies: 'ReactJS and Glide',
        video: '/videos/landpage.mp4',
        speed: .3
    },
    {
        id: 4,
        name: 'Shirt-customizer',
        link: 'https://jorgelmh.github.io/t-shirts-customizer/',
        description: 'Shirt-customizer website, with cart system and payment amounts included depending on the characteristics of the new shirt.',
        source: 'https://github.com/Jorgelmh/t-shirts-customizer',
        technologies: 'CSS, HTML and JS',
        video: '/videos/t-shirt-customizer.mp4',
        speed: 1
    }   
]

/* Display my projects */
const Projects = () => {

    useEffect(() => {
        new Glide('.glide', {
            startAt: 0,
            perView: 1,
        }).mount()
    })

    return (
        <section className="container" id="projects">
            <h2 className={Styles.subtitle}>My projects</h2>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                            projectsData.map(({id, ...Data}) => <SingleProject key={id} Data={Data} /> )
                        }
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left text-dark" data-glide-dir="<"><i aria-hidden className="fas fa-arrow-circle-left" /></button>
                    <button className="glide__arrow glide__arrow--right text-dark" data-glide-dir=">"><i aria-hidden className="fas fa-arrow-circle-right" /></button>
                </div>
            </div>
        </section>
    )
    
}

export default Projects