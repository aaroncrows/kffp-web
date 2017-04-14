import React from 'react';
import { Link } from 'react-router-dom';
import {
    link,
    content
} from './underwriting.css'

const Underwriting = () => (
    <main className={content}>
        <article>
            <p>Freeform Portland is excited to have the opportunity to support local businesses on air! Your business can receive on-air mentions where we will highlight your goods and services and include your name on our website.  If this interests you, contact <a>underwriting@freeformportland.org</a>.</p>
            <p>Below are general examples of packages that Freeform Portland is offering. The value of Underwriting spots are measured by the time of day that they are shared. The minimum underwriting agreement is 6 months, and we offer extra spots for businesses that sign up for 12 months or longer. We are also able to adjust the number of spots to fit any budget.</p>
            <table>
                <thead>
                    <tr>
                        <td colSpan="3"><strong>Basic Underwriting On-Air Mentions Per Month</strong></td>
                    </tr>
                    <tr>
                        <td><b>$100 per month</b></td>
                        <td><b>$200 per month</b></td>
                        <td><b>$300 per month</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Two spots per week</td>
                        <td>Four spots per week</td>
                        <td>Eight spots per week</td>
                    </tr>
                    <tr>
                        <td>1 Early Morning</td>
                        <td>2 Early morning</td>
                        <td>3 Early Morning</td>
                    </tr>
                    <tr>
                        <td>1 Afternoon</td>
                        <td>2 Afternoon</td>
                        <td>2 Afternoon</td>
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td>3 Evening</td>
                    </tr>
                </tbody>
            </table>
            <p>Or if you want to make a tax-deductible, individual donation, you can do so by clicking <Link className={link} to="/donate">here</Link>.</p>
        </article>
    </main>
);

export default Underwriting;
