import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import M from "materialize-css"

class EmployeeNav extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <nav className="company-nav">
                <div className="nav-wrapper">
                    <span className="brand-logo"><span className="companyNavName">Employee Portal</span></span>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/employee">View Jobs</NavLink></li>
                        <li><NavLink to="/changepassword">Change Password</NavLink></li>
                        <li><NavLink to="/logout">Log Out</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default EmployeeNav