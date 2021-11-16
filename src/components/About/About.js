import React from 'react'
import './About.css'

function About() {
    return (
        <div>
            <div className="Aboutparent">
                <h1>About</h1>
                <div className="maincontent">
                    <div className="contact">
                        <h2>Contact</h2>
                        <p>Fr.Thomas Pezhumkattill (Director): <a href="tel:1234567890">9645917306</a></p>
                        <p>Name (President 1): <a href="tel:1234567890">1234567890</a></p>
                        <p>Name2 (President 2): <a href="tel:1234567890">7894561230</a></p>
                        <p>Name (Secretary): <a href="tel:1234567890">6549873210</a></p>
                    </div>
                    <div className="presentation">
                        <p>SMYM Plassanal</p>
                        <p>Pala Diocese</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
