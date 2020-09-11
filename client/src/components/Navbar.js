// dependencies
import React, { Component } from "react"
import { NavLink } from "react-router-dom"

// css
import logo from "../images/cleaningLogo.png"
// import "../css/Navbar.css"
import M from "materialize-css"

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <div className="nav-wrapper container ">
                        <span className="brand-logo"><img id="logo" src={ logo } alt="cleaning-logo"></img><span id="logoName">Fresh Perspective</span></span>
                        <a href="#menu" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/checklist">CleaningChecklist</NavLink></li>
                            <li><NavLink to="/booking">Booking</NavLink></li>
                            <li><NavLink to="/login">CompanyPortal</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/checklist">CleaningChecklist</NavLink></li>
                    <li><NavLink to="/booking">Booking</NavLink></li>
                    <li><NavLink to="/login">CompanyPortal</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navbar