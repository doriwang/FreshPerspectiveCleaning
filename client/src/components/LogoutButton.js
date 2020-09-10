import React from "react"

class LogoutButton extends React.Component {
	onClick = () => {
		localStorage.userLogin = "";
		localStorage.username = "";
	}

	render() {
		return <div className="col s12 row">
			<div className ="col s4"></div>
			<a href="/" className="btn col s4" onClick={this.onClick}>Log Out</a>
		</div> 

	}
}

export default LogoutButton;