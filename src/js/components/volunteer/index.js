import React from 'react';
import {
    content,
    bodyText,
    bodyTextStyle,
    heading,
    subHeading,
    link
} from './volunteer.css';

const Volunteer = () => (
    <main className={content} role="main">
        <article className={[bodyText, bodyTextStyle].join(' ')}>
            <div>
                <h2 className={heading}>Become a Freeform Portland Volunteer!</h2>
                <p>Freeform Portland, KFFP-LP 90.30 FM, is a nonprofit, volunteer-run community radio station providing a number of public resources. Interested in becoming a Freeform Portland volunteer? Our volunteers gain job skills, learn about music, and meet new people all while giving back to their communities. It’s a great opportunity for people with a little bit of free time and a lot to gain. Our volunteer committees power the station in the following ways:</p>
                <ul>
                    <li>Broadcasting Operations</li>
                    <li>Grant Writing</li>
                    <li>Fundraising/Events</li>
                    <li>Marketing</li>
                    <li>Music Library</li>
                    <li>Volunteer</li>
                    <li>Website</li>
                    <li>Zine</li>
                </ul>
                <p>Read more about each committee below, and fill out our <a className={link} href="https://docs.google.com/forms/d/e/1FAIpQLSeMMp97qi8aU429o-u_zS51cR15UrYUI7bIXFb5t9ZtLr7g6g/viewform?c=0&amp;w=1" target="_blank" rel="noopener">KFFP Volunteer Contact Form</a> to be contacted by a member of our Volunteer Committee.</p>
                <h3 className={subHeading}>Broadcasting Operations</h3>
                <p>Responsibilities include maintaining the station&#8217;s transmitter, turntables, microphones, wiring, and everything else that counts as broadcasting equipment. Members also collect and organize supplies for KFFP office operations.</p>
                <h3 className={subHeading}>Grant Writing</h3>
                <p>Grant writers obtain the vast majority of Freeform Portland&#8217;s financial support by soliciting grants from donor organizations. Good letter-writers should apply!</p>
                <h3 className={subHeading}>Fundraising/Events</h3>
                <p>This group plans and puts on shows, parties, DJ nights, and other events that help bring much-needed funds to KFFP. Members also help develop and distribute merch like t-shirts, pins, koozies, and more.</p>
                <h3 className={subHeading}>Marketing</h3>
                <p>Help raise community awareness of our station to bring in new listeners.</p>
                <h3 className={subHeading}>Music Library</h3>
                <p>This group keeps the music library stocked, organized, and in good working condition. Music Library Committee volunteers send music requests to record labels and tag new additions to help the KFFP community find what we&#8217;re looking for.</p>
                <h3 className={subHeading}>Volunteer</h3>
                <p>We always need new volunteers! This committee finds fresh meat and places people where they can be the most comfortable and effective at helping us out.</p>
                <h3 className={subHeading}>Website</h3>
                <p>Volunteers with website development skills (coding, project planning, etc.) should consider joining this committee. This is the crew that designs the site, writes the content, and develops the features like our streaming music player.</p>
                <h3 className={subHeading}>Zine</h3>
                <p>The Zine Committee solicits and creates art and copy, for our lovely Freeform Portland zine, and then publishes and distributes it four times per year for 25 cents an issue.</p>
                <hr />
                <p>Volunteering with us is a requirement for all of our on-air DJs. Don’t want to be on the air? No problem! Not everyone does, and we can still use your help. To learn more about volunteering with us, fill out the <a className={link} href="https://docs.google.com/forms/d/118lWyMgnMCVz3_xNOwMkUqXjYDnjq3wJPpVorB3BaBk/viewform?c=0&amp;w=1">KFFP Volunteer Contact Form</a> or email <a className={link} href="mailto:volunteer@freeformportland.org">volunteer@freeformportland.org</a>. Freeform Portland also accepts <a className={link} href="http://www.freeformportland.org/donate/" target="_blank">donations</a>!</p>
            </div>
        </article>
    </main>
);

export default Volunteer;
