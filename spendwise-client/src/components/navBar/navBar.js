import React, { Component } from "react";
import { Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/spendwise-logo2.png';
import { Link } from "react-router-dom";

export default class DashNav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="logo" className="logo-home" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Nav className="mr-auto">
                                        <NavDropdown title="Reports" id="collasible-nav-dropdown">
                                            <NavDropdown.Item>
                                                <Link to={"/lastweek"}>Last 7 days</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link to={"/lastmonth"}>Previous Month</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link to={"/custom"}>Custom</Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}