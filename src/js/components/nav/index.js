import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class NavBar extends Component {
    constructor () {
        super();
        this.state = { displayMenu: false };
    }

    render () {
        return (<header role="banner">
            <div className="site-branding">
                <Link to="/">
                    <img
                        alt="Freeform Portland"
                        src="http://www.freeformportland.org/wp-content/themes/graphy/images/freeform-portland.svg"
                    />

                </Link>
            </div>
            <div>
                <nav role="navigation">
                    <a className="listen" href="http://74.63.72.20:8950/live">Listen Now</a>
                    <h1 onClick={() => this.setState({ displayMenu: !this.state.displayMenu })}>Menu</h1>
                    <ul className={`menu${this.state.displayMenu ? ' toggle-menu' : ''}`}>
                        <li className="about">
                            <Link to="/about">About</Link>
                            <ul className="sub-menu">
                                <li><a href="http://www.freeformportland.org/about/volunteer/">Volunteer</a></li>
                                <li><a href="http://www.freeformportland.org/about/underwriting/">Underwriting</a></li>
                                <li><a href="http://www.freeformportland.org/about/faq/">FAQ</a></li>
                            </ul>
                        </li>
                        <li><a href="/schedule/">Schedule</a></li>
                        <li><a href="http://www.freeformportland.org/donate/">Donate</a></li>
                    </ul>
                    <ul className={`social${this.state.displayMenu ? ' toggle-menu' : ''}`}>
                        <li>
                            <a href="http://www.facebook.com/freeformpdx"><i className="fa fa-facebook-square" /></a>
                        </li>
                        <li>
                            <a href="http://twitter.com/freeformpdx"><i className="fa fa-twitter-square" /></a>
                        </li>
                        <li>
                            <a href="http://www.instagram.com/freeformpdx"><i className="fa fa-instagram" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>);
    }
}

export default NavBar;
