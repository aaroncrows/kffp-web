import React from 'react';
import { Link } from 'react-router-dom';
import {
    content,
    heading,
    link
} from './landing.css';

const Landing = () => (
    <main role="main" className={content}>
        <article>
            <div>
                <p><img src="http://www.freeformportland.org/wp-content/uploads/2016/01/Zach-Stricker-KFFP-Image.jpg" alt="KFFP Image by Zach Stricker" /></p>
                <h1 className={heading}>Liberate the Local Airwaves</h1>
                <p>Freeform Portland KFFP-LP 90.3 FM is run by a dedicated group of music enthusiasts and DJs from Portland, Oregon. We&#8217;re local volunteers who want to reclaim some portion of our airwaves from corporate control.</p>
                <p>We offer:</p>
                <ul>
                    <li>Public broadcasting classes and music education opportunities</li>
                    <li>DJs with unique cultural perspectives and fresh voices from the local community</li>
                    <li>Exposure to local and touring musicians</li>
                    <li>Experimental music and arts programming, under-represented in Portland</li>
                </ul>
                <p>Let&#8217;s uphold community radio and freeform programming that truly reflects and celebrates our local communities.</p>
                <p><Link className={link} to="/donate">Donate to KFFP!</Link></p>
                <p>Can&#8217;t donate? <Link to="/volunteer" className={link}>Help out!</Link></p>
                <p>&nbsp;</p>
            </div>
        </article>
    </main>
);

export default Landing;
