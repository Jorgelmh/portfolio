import Styles from '../../styles/Home.module.css'
import Glide from '@glidejs/glide'
import SingleProject from './SingleProject'
import { useEffect, useState } from 'react'

const projectsData = [
    {
        id: 1,
        name: 'Spunchers.io',
        link: 'https://spunchers.herokuapp.com/',
        description: 'A Multiplayer Online Game developed fully in JavaScript. Includes 3 game modes and 5 characters with different guns. It is hosted on Heroku and uses AWS Route 53 for DNS networking.',
        source: 'https://github.com/Jorgelmh/JS-TILE-GAME',
        technologies: 'NodeJS, Socket.io, ExpressJS, Webpack, HBS and Jest (for testing purposes)',
        video: '/videos/spunchers.mp4',
        speed: .6
    },
    {
        id: 2,
        name: 'PokeAPI UI',
        link: 'https://jorgelmh.github.io/PokeApiExercise/',
        description: "A simple UI developed in Angular that displays data (including images) about all the pokemons stored in the API's database",
        source: 'https://github.com/Jorgelmh/PokeApiExercise',
        technologies: 'Angular, TypeScript and Bootstrap.',
        video: '/videos/pokeapi.mp4',
        speed: .8
    },
    {
        id: 3,
        name: 'Cyber Run',
        link: 'https://github.com/Jorgelmh/Cyber-Run',
        description: '2D Platformer game fully written using Java, some basic game development principles are followed to achieve things like collisions and sprite animations.',
        source: 'https://github.com/Jorgelmh/Cyber-Run',
        technologies: 'Java',
        video: '/videos/cyber-run.mp4',
        speed: 1,
    },
    {
        id: 4,
        name: 'DragJoystick UX',
        link:'https://jorgelmh.github.io/dragjoystick/',
        description: 'Prototype interface for DragJoystick, a package I developed that provides support for games running on mobile devices.',
        source: 'https://github.com/Jorgelmh/dragjoystick',
        technologies: 'Bootstrap, ReactJS, GlideJS and AOS',
        video: '/videos/dragjoystick.mp4',
        speed: .7
    },
    {
        id: 5,
        name: 'Land Page',
        link: 'https://jorgelmh.github.io/react-landpage/',
        description: 'Landing page developed with React for a PHP project.',
        source: 'https://github.com/Jorgelmh/react-landpage',
        technologies: 'ReactJS and Glide',
        video: '/videos/landpage.mp4',
        speed: .3
    },
    {
        id: 6,
        name: 'E-commerce Data Exercise',
        link: 'https://github.com/Jorgelmh/E-commerce-DM',
        description: 'Data Science exercise for an e-commerce dataset with 10,999 entries. Includes an exploratory data analysis, data processing and the implementation of 2 ML models.',
        source: 'https://github.com/Jorgelmh/E-commerce-DM',
        technologies: 'Scikit-learn, Pandas, Seaborn and Numpy',
        video: '/videos/ecommerce-DM.mp4',
        speed: 1
    },
    {
        id: 7,
        name: 'Heart-Attack predictions',
        link: 'https://github.com/Jorgelmh/Heart-attack-ML',
        description: 'The aim of this exercise was to implement an accurate model that can predict whether an individual will have a heart attack based on previous records',
        source: 'https://github.com/Jorgelmh/Heart-attack-ML',
        technologies: 'Scikit-learn, Pandas, Seaborn and Numpy',
        video: '/videos/heart-attack-DM.mp4',
        speed: 1
    }
]

/* Display my projects */
const Projects = () => {

    const [videosLoaded, setVideosLoaded] = useState(0)
    const [glide, setGlide] = useState(false)

    useEffect(() => {

        if(videosLoaded >= projectsData.length && !glide){
            setGlide(true)
            new Glide('.glide', {
                perView: 1
            }).mount()
        }

    })

    return (
        <section className="container" id="projects">
            <h2 className={Styles.subtitle}>My projects</h2>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                            projectsData.map(({id, ...Data}) => <SingleProject key={id} Data={Data} onloaded={() => setVideosLoaded(videosLoaded+1)} /> )
                        }
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left text-dark" data-glide-dir="<"><i aria-hidden className="fas fa-arrow-circle-left" /></button>
                    <button className="glide__arrow glide__arrow--right text-dark" data-glide-dir=">"><i aria-hidden className="fas fa-arrow-circle-right" /></button>
                </div>
            </div>
            <p className={Styles.comment_style} style={{textAlign: 'center'}}>//Hover to read more details about the project</p>
        </section>
    )
    
}

export default Projects