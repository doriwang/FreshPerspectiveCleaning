import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import M from "materialize-css"
import LogoutButton from "./LogoutButton"

class EmployeeNav extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
			<div>
				<nav className="company-nav">
					<div className="nav-wrapper">
						<span className="brand-logo"><span className="companyNavName">Employee Portal</span></span>
						<a href="#menu" data-target="mobile-employee" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><NavLink to="/employee">View Jobs</NavLink></li>
							<li><NavLink to="/changePassword">Change Password</NavLink></li>
							<LogoutButton />
						</ul>
					</div>
				</nav>
				<ul className="sidenav" id="mobile-employee">
					<li><NavLink to="/employee">View Jobs</NavLink></li>
					<li><NavLink to="/changePassword">Change Password</NavLink></li>
					<LogoutButton />
				</ul>
			</div>
        )
    }
}

export default EmployeeNav