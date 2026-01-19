import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import { Button } from "../Buttons/Button.jsx";

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState((prev) => ({ clicked: !prev.clicked }));
    };

    render() {
        const { clicked } = this.state;

        return (
            <nav className="Navbar">
                <div className="Navbar-inner">
                    <div className="Navbar-brand">
                        <h1 className="Navbar-logo">
                            React
                            <span className="Navbar-logo-icon">
                <FontAwesomeIcon icon={faReact} />
              </span>
                        </h1>
                    </div>

                    <div className="Navbar-toggle" onClick={this.handleClick}>
                        <FontAwesomeIcon
                            icon={clicked ? faTimes : faBars}
                            className="Navbar-toggle-icon"
                        />
                    </div>

                    <ul className={clicked ? "Navbar-menu Navbar-menu--active" : "Navbar-menu"}>
                        {MenuItems.map((item, index) => {
                            if (item.cName === "nav-links-mobile") {
                                return (
                                    <li key={index} className="Navbar-item Navbar-item--mobile">
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            }

                            return (
                                <li key={index} className="Navbar-item">
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}

                        {/* Desktop CTA */}
                        <li className="Navbar-cta">
                            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                                Sign Up
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
