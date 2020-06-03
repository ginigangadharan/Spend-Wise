import React, { Component } from "react";
import Logo from '../../images/spendwise-logo2.png';

export default class DashNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="logo" className="logo-home" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {/* <a>Logout</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}