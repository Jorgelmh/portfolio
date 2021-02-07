import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Styles from '../../styles/Home.module.css'

/**
 *  ========================
 *          HEADER
 *  ========================
 */
const prefix = '/portfolio'

const Header = () => (
    <header className={Styles.site_header}>
        <Navbar className={Styles.site_nav + ' wide-container' + ' navbar-dark'} expand="md">
            <Navbar.Brand href="/"><span className={Styles.html_color}>&#60;Jorge </span> Mendez <span className={Styles.html_color}>/&#62;</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className={Styles.site_info_logo + ' container clearfix'}>
            <div className={Styles.site_info}>
                <p>Hi, I am <span className={Styles.html_color}>Jorge</span></p>
                <h1>Software Engineer Student</h1>
                <p className={Styles.comment_style}>//3rd year student at University of Stirling</p>
                <div className={Styles.social + ' d-flex'}>
                    <a href="/"><i aria-hidden className="fab fa-github" /></a>
                    <a href="/"><i aria-hidden className="fab fa-linkedin" /></a>
                </div>
            </div>
            <div className={Styles.site_logo}>
                <img src={prefix + '/images/coding-image.svg'} />
            </div>
        </div>
    </ header>
)

export default Header