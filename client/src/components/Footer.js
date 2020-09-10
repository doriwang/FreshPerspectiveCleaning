import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const areas = ["Aurora,", " Denver,", " Castle Rock,", " Centennial,", " Englewood,", " Greenwood Village,", " Highlands Ranch,", " Lone Tree,", " Littleton,", " Parker",]

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Areas We Server:</h5>
                        <p className="grey-text text-lighten-4">{ areas }</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Contact Us:</h5>
                        <ul>
                            <li><strong>Call: </strong>333.333.3333</li>
                            <li><strong>Email: </strong>cleaning@example.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    { `© Copyright ${new Date().getFullYear()} Made with ` }
                    <FontAwesomeIcon icon={ faHeart } /> by Brandon Gart, Dori Wang, and Simon Xu
                </div>
            </div>
        </footer>
    )
}

export default Footer