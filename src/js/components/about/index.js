import React from 'react';
import { Link } from 'react-router-dom';
import {
    content,
    heading,
    link
} from './about.css';

const About = () => (
    <main className={content} role="main">
        <article>
            <p>
                <img src="http://www.freeformportland.org/wp-content/uploads/2016/01/thought-crime.jpg" alt="thought-crime" />
            </p>
            <h2 className={heading}>About Freeform Portland</h2>
            <p>Freeform Portland is a nonprofit, independent, community-driven radio station broadcasting live at KFFP-LP
                90.3 FM in North Portland, and streaming online at <Link className={link} to="/listen">freeformportland.org/listen</Link>.
                Our purpose is to foster independent, local, experimental, and underground music alongside arts and public
                affairs programming that authentically reflects our communities. Freeform Portland is a 501(c)(3) entity,
                classified by the IRS as a charitable organization, and gratefully accepting tax-deductible <Link className={link}to="/donate">donations</Link>.</p>
            <h2 className={heading}>Community-Driven</h2>
            <p>We need more community radio. For a city with a metro area of over two million creative people, Portland
                has a surprisingly small number of non-commercial, independent radio stations on the air. Three companies
                control the majority of FM radio stations broadcasting in our city. Community radio provides an invaluable
                venue for more voices to be heard and more perspectives to be represented in public media. We love local
                stations like KBOO, KMHD, and XRAY. Freeform Portland is proud to join them in taking back the airwaves
                from corporate control.</p>
            <h2 className={heading}>Freeform Radio</h2>
            <p>What is freeform radio? Freeform radio is a programming format in which the DJ is given total control over
                what to play, regardless of music genre or commercial interests. Freeform radio stands in contrast to
                most commercial radio stations where DJs have little or no influence over programming structure or playlists.
                Ken Freedman from WFMU (the longest-running freeform radio station in the United States) explains the
                importance of freeform radio and what Freeform Portland is up to <a className={link}
                    href="https://www.youtube.com/watch?v=Z-qEUkYWnck"
                    target="_blank"
                >here</a>.</p>

        </article>
    </main>
);

export default About;
