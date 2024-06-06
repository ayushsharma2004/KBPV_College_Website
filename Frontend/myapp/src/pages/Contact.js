import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/contact.css';

const Contact = () => {
    return (
        <>
            <div className='contact_container' id='contact_container'>
                <header>
                    <h1>Contact Us</h1>
                </header>
                <div id="container">
                    <div id="left">
                        <h1>Contact Us</h1><br />
                        <p><i className="fa-solid fa-envelope" />info@collegesearch.in</p>
                        <p>IN CASE YOU HAVE A QUERY, REACH US AT:</p>
                        <p>For more enquiries </p>
                        <i className="fa-brands fa-firefox-browser" /> <a href="#"> https://www.collegesearch.in/careers</a>
                        <NavLink to='https://www.collegesearch.in/careers'> https://www.collegesearch.in/careers</NavLink>
                        <p>Get in touch on social media</p>
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-linkedin" />
                        <i className="fa-brands fa-google-plus" />
                        <i className="fa-brands fa-pinterest" />
                    </div>
                    <form action="/submit" method="post">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" name="message" rows={4} required defaultValue={""} />
                        <center>
                            <button type="submit">Submit</button>
                        </center>
                    </form>
                </div>
                <div className="map-container">
                    <p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.004830294952!2d72.86652384815784!3d19.041635582407388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8cbb60efabf%3A0x110a092be6e0d6f!2sKarmaveer%20Bhaurao%20Patil%20Vidyalaya(KBPV).!5e0!3m2!1sen!2sin!4v1706702517852!5m2!1sen!2sin" width="100%" height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </p>
                </div>
            </div>


        </>
    )
}

export default Contact