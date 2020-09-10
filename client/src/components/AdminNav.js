import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import M from "materialize-css"

class AdminNav extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div>
                <nav >
                    <div className="nav-wrapper">
                        <span className="brand-logo"><span id="adminLogoName">Admin Homepage</span></span>
                        <a href="#menu" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/admin">Edit/View Jobs</NavLink></li>
                            <li><NavLink to="/createnewuser">Create User</NavLink></li>
                            <li><NavLink to="/changepassword">Change Password</NavLink></li>
                            <li><NavLink to="/logout">LogOut</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><NavLink to="/adminhome">Home</NavLink></li>
                    <li><NavLink to="/creatnewUser">Creat NewUser</NavLink></li>
                    <li><NavLink to="/changepassword">Change Password</NavLink></li>
                    <li><NavLink to="/logout">LogOut</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default AdminNav