import React from 'react';
import { Link } from 'react-router-dom';
import {
    content,
    heading,
    link
} from './donate.css';

const Donate = () => (
    <main role="main" className={content}>
        <article>
            <div>
                <h1>Donate</h1>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" /><input name="hosted_button_id" type="hidden" value="EXDPWNQFGWYEL" /><input alt="Donate to KFFP" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" type="image" /></form>
                <p>Freeform Portland is a 501(c)(3) organization gratefully accepting tax-deductible donations through PayPal (&#8220;Donate&#8221; link above) or by check. You can also keep an eye out for the donation jar at our events. Please make any checks out to “Freeform Portland” and mail to:</p>
                <p>Freeform Portland<br />
                    c/o Donations<br />
                    5511 N. Albina Ave.<br />
                    Portland OR 97217</p>
                <p>We also love donations of records, CDs and headphones in good working condition, plus office supplies, snacks, and more. If you’d like to make a donation like this, please email donate@freeformportland.org to get in touch. Our station runs on support from our friends and neighbors and we appreciate any and all contributions!</p>
                <p>Freeform Portland KFFP-LP 90.3 FM benefits our communities in the following ways:</p>
                <ul>
                    <li>Hosting free public broadcasting classes and music education opportunities</li>
                    <li>Featuring a vast and diverse mix of DJs with unique cultural perspectives and fresh voices</li>
                    <li>Providing exposure to local and touring musicians</li>
                    <li>Broadcasting experimental music and arts programming, which we believe are under-represented in Portland</li>
                </ul>
                <p>We’re proud to uphold community radio and freeform programming in ways that benefit and deeply resonate with our listeners.</p>
                <p>Can’t donate? <Link className={link} to="/volunteer">Help out!</Link></p>
                <p>Thanks so much!</p>
                <p>— KFFP Volunteers</p>
            </div>
        </article>
    </main>
);

export default Donate;
