import * as React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef } from 'react'
import './nav.css'
export default function Navbar() {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>Becca</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Portfolio</a>
                <a href="/#">Art</a>
                <a href="/#">Resume</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}