// dependencies
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NewUserForm from "./components/NewUserForm"
import ChangePasswordControl from "./components/ChangePasswordControl"
import LogoutButton from "./components/LogoutButton"

// page components
import Home from "./pages/Home"
import Checklist from "./pages/Checklist"
import Booking from "./pages/Booking"
import NotFound from "./pages/NotFound"
import EmployeePortal from "./pages/CompanyPortal"
import EmployeeControls from './pages/EmployeeControls'
import AdminControls from './pages/AdminControls'

// styling css
import 'materialize-css/dist/css/materialize.min.css'
import "./css/Navbar.css"
import "./css/Footer.css"
import './css/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/checklist" component={ Checklist } />
        <Route exact path="/booking" component={ Booking } />
        <Route exact path="/login" component={ EmployeePortal } />
        <Route exact path="/employee" component={ EmployeeControls } />
        <Route exact path="/admin" component={ AdminControls } />

        {/* <Route exact path="/test" component={ AdminControls } /> */ }
        <Route exact path="/creatnewuser" component={ NewUserForm } />
        <Route exact path="/changepassword" component={ ChangePasswordControl } />
        <Route exact path="/logout" component={ LogoutButton } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
