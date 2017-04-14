import React from 'react';
import { Link } from 'react-router-dom';
import {
    content,
    heading,
    subHeading,
    link
} from './faq.css';

const Faq = () => (
    <main role="main" className={content}>
        <article>
            <h1 className={heading}>FAQ</h1>
            <h3 className={subHeading}>How can I donate? Are donations tax deductible?</h3>
            <ul>
                <li>Yes, donations are tax deductible. Our station has 501(c)(3) status, which means the IRS classifies us as a charitable organization. Freeform Portland gratefully accepts donations through <Link className={link} to="/donate">PayPal</Link> or by check. We also love donations of records, CDs and headphones in good and working condition. Our station runs on support from our friends and neighbors and we are grateful for any and all contributions! Please visit our <Link to="/donate" className={link}>Donate page</Link> for more information.</li>
            </ul>
            <h3 className={subHeading}>What&#8217;s the Frequency, Kenneth? How old is the station?</h3>
            <ul>
                <li>Freeform Portland went on the air at 90.3 FM in north Portland in April 2016. Our full call sign is KFFP-LP 90.3 FM. (The &#8220;LP&#8221; stands for &#8220;low power.&#8221;)</li>
            </ul>
            <h3 className={subHeading}>Where can I get the best signal for Freeform Portland?</h3>
            <ul>
                <li>Our transmitter is located in the NE Alberta neighborhood in Portland, OR. We&#8217;re a low-power FM station, which means our range has an approximate 5-mile radius. Your reception will vary depending on your equipment, distance from the transmitter, and the height of the buildings in between. We also stream online at <a className={link}href="http://www.freeformportland.org/listen">www.freeformportland.org/listen</a>.</li>
            </ul>
            <h3 className={subHeading}>Can I have a show?</h3>
            <ul>
                <li>Yes! All on-air DJs must first complete at least 5 volunteer hours each month, and complete DJ training with Freeform Portland.</li>
                <li>Freeform Portland changes our schedule every 6 months and the new cycle starts April 1st. Follow <a className={link} href="https://docs.google.com/forms/d/e/1FAIpQLSfw_PiWa1IXdUZN0wHUGq9JHysHWJrEE4u-6Y-7kw0CdvbcLw/viewform" target="_blank">this link</a> for more information and to apply for a show. If you are interested in having a show in the new cycle, you will need to apply by February 18th, 2017.</li>
            </ul>
            <h3 className={subHeading}>What about volunteer opportunities? How can I help?</h3>
            <ul>
                <li>Yes, we have <Link className={link} to="/volunteer">many volunteer opportunities</Link>. To find out more, please fill out our <a className={link} href="https://docs.google.com/forms/d/118lWyMgnMCVz3_xNOwMkUqXjYDnjq3wJPpVorB3BaBk/viewform?c=0&amp;w=1" target="_blank">KFFP Volunteer Contact Form</a>.</li>
            </ul>
            <h3 className={subHeading}>Will you play my band&#8217;s album?</h3>
            <ul>
                <li>Most likely! Music adhering to FCC regulations is eligible to be played on our station. Send music to:</li>
            </ul>
            <p>Freeform Portland<br />
                c/o Music Library<br />
                5511 N Albina Ave.<br />
                Portland OR 97217</p>
            <h3 className={subHeading}>Are there commercials?</h3>
            <ul>
                <li>No! Freeform Portland is a nonprofit, commercial-free radio station. We&#8217;re using the same engineering team that created KZME and XRAY and working alongside other non-commercial radio stations in Portland.</li>
            </ul>
            <h3 className={subHeading}>Where&#8217;s the studio located?</h3>
            <ul>
                <li>We&#8217;re at 5511 N Albina Ave. in Portland, Oregon. (Our cross street is Killingsworth.)</li>
            </ul>
            <h3 className={subHeading}>Are you selling merch?</h3>
            <ul>
                <li>Yes, we have a variety of things in stock — normally we have t-shirts, koozies, bottle opener key chains, stickers, and more. Keep an eye out for our merch table at KFFP-sponsored events.</li>
            </ul>
        </article>
    </main>
);

export default Faq;
