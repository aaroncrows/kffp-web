import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    about,
    instagram,
    facebook,
    listen,
    menu,
    menuLink,
    navLink,
    siteBanner,
    siteBranding,
    social,
    subMenu,
    toggleMenu,
    twitter
} from './nav.css';

class NavBar extends Component {
    constructor () {
        super();
        this.state = { displayMenu: false };
    }

    render () {
        return (<header className={siteBanner}role="banner">
            <div className={siteBranding}>
                <Link to="/">
                    <img
                        alt="Freeform Portland"
                        src="http://www.freeformportland.org/wp-content/themes/graphy/images/freeform-portland.svg"
                    />

                </Link>
            </div>
            <div>
                <nav role="navigation">
                    <a className={listen} href="http://74.63.72.20:8950/live">Listen Now</a>
                    <h1 className={menuLink} onClick={() => this.setState({ displayMenu: !this.state.displayMenu })}>Menu</h1>
                    <ul className={`${menu} ${navLink} ${this.state.displayMenu ? toggleMenu : ''}`}>
                        <li className={about}>
                            <Link className={navLink} to="/about">About</Link>
                            <ul className={subMenu}>
                                <li><Link className={navLink} to="/volunteer">Volunteer</Link></li>
                                <li><Link className={navLink} to="/underwriting">Underwriting</Link></li>
                                <li><Link className={navLink} to="/faq">FAQ</Link></li>
                            </ul>
                        </li>
                        <li><Link className={navLink} to="/schedule">Schedule</Link></li>
                        <li><Link className={navLink} to="/donate">Donate</Link></li>
                    </ul>
                    <ul className={`${social} ${this.state.displayMenu ? toggleMenu : ''}`}>
                        <li>
                            <a className={navLink} href="http://www.facebook.com/freeformpdx"><i className={facebook} /></a>
                        </li>
                        <li>
                            <a className={navLink} href="http://twitter.com/freeformpdx"><i className={twitter} /></a>
                        </li>
                        <li>
                            <a className={navLink} href="http://www.instagram.com/freeformpdx"><i className={instagram} /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>);
    }
}

export default NavBar;
