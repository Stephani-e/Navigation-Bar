import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './NavBar.css'
import { Button } from '../Button'

class NavBar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className='NavbarItems'>
                <div className='navbar-container'>
                    <h1 className='navbar-logo'>React <FontAwesomeIcon icon={faReact} size='1x'/> </h1>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} className='menu-toggle-icon' />
                    </div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   {MenuItems.map((item, index) => {
                      if (item.cName === 'nav-links-mobile'){
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        );
                        }else{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>{item.title}</a>
                                </li>
                            );
                        }
                    })}
                    {/** Desktop Button */} 
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium">Sign Up</Button>
                </ul>
            </nav>
        )
    }
}

export default NavBar