import React from "react"

class LogoutButton extends React.Component {
	onClick = () => {
		localStorage.userLogin = "";
		localStorage.username = "";
	}

	render() {
		return <li>
			<a href="/" onClick={this.onClick}>Log Out</a>
		</li> 

	}
}

export default LogoutButton;