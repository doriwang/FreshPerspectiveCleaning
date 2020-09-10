import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import M from "materialize-css"
import LogoutButton from "./LogoutButton"

class AdminNav extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div>
                <nav className="company-nav">
                    <div className="nav-wrapper">
                        <span className="brand-logo"><span className="companyNavName">Admin Portal</span></span>
                        <a href="#menu" data-target="mobile-admin" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/admin">View/Edit Jobs</NavLink></li>
                            <li><NavLink to="/createNewUser">Create New User</NavLink></li>
                            <li><NavLink to="/changePassword">Change Password</NavLink></li>
                            <LogoutButton />
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-admin">
                    <li><NavLink to="/admin">Home</NavLink></li>
                    <li><NavLink to="/createNewUser">Create New User</NavLink></li>
                    <li><NavLink to="/changePassword">Change Password</NavLink></li>
                    <LogoutButton />
                </ul>
            </div>
        )
    }
}

export default AdminNav