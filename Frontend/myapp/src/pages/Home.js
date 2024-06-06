// import React from 'react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../Styles/home.css";
import "../Styles/about.css";
import '../Styles/contact.css';
import Navbar from "../components/Navbar";
import board from "../Images/schl-board1.png";
import slider1 from "../Images/home-img-slider1.jpg";
import slider2 from "../Images/home-img-slider2.jpg";
import slider3 from "../Images/home-img-slider3.jpg";
import slider4 from "../Images/home-img-slider4.jpg";
import slider5 from "../Images/home-img-slider5.jpg";
import slider6 from "../Images/home-img-slider6.jpg";
import slider7 from "../Images/home-img-slider7.jpg";
import slider8 from "../Images/home-img-slider8.jpg";
import slider9 from "../Images/home-img-slider9.jpg";
import { NavLink } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Slider from "./Slider";

const Home = () => {
  function showContent(id) {
    // Hide all content containers
    var contentContainers = document.querySelectorAll('.content-container');
    contentContainers.forEach(function (container) {
      container.classList.remove('active');
    });

    // Show the selected content container
    var selectedContainer = document.getElementById(id);
    selectedContainer.classList.add('active');
  }
  return (
    <>
      <div className="sub-nav-container">

      </div>

      <div className="nav-container">
        <p>Do you want to Translate ?</p>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-white text-black"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Translate
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Marathi
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Hindi
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                English
              </a>
            </li>
          </ul>
        </div>
        <Navbar1 />
      </div>
      <Slider />

      {/* About */}
      <div className='about_container' id="about_container">
        <div className="about_header">
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <div className="buttons-container">
            <button className="button" onClick={() => showContent('Overview')}>Overview</button>
            <button className="button" onClick={() => showContent('History')}>History</button>
            <button className="button" onClick={() => showContent('Staff')}>Staff</button>
          </div>
          <div id="Overview" className="content-container active">
            <h2>Overview</h2>
            <p>
              "Karmaveer Bhaurao Patil Vidyalaya," under the stewardship of Eklavya Shikshan Sadhana, commenced its journey in the educational realm in the academic year 1979-80. The inception saw the enrollment of 12 students in the Iyanta Pradiche and 15 in the Pvehche sections, culminating in a total of 37 budding learners. This marked the genesis of 37 Vidya-Ryawar schools, a testament to the school's commitment to educational excellence.

              Subsequently, in response to parental aspirations and societal demands, the primary department was inaugurated in 1994. This pivotal step laid the foundation for further growth and evolution. The English medium section was introduced in 2003-2004, broadening the scope of education and enhancing the school's reach and impact. The secondary department followed suit in 2005-09, completing the spectrum of educational offerings.

              The journey of Karmaveer Bhaurao Patil Vidyalaya has been marked by a steady rise in enrollment, with the Marathi medium currently boasting a robust 2230 students. This impressive figure is a testament to the school's commitment to providing quality education. Despite a slight numerical dip projected for the 2022-23 academic year, the institution's qualitative standards continue to soar. Both mediums, Marathi and English, have achieved a remarkable 100% pass rate, underscoring the school's unwavering dedication to academic excellence.
            </p>
          </div>
          <div id="History" className="content-container">
            <h2>History</h2>
            <p>History of Karmaveer Bhaurao Patil School-Sion
              SalesiansOn May 16, 1928, four Salesians – Fr. Joseph Hauber (the Rector), Fr. Austin Oehlert, Bro.
              William Haughey and Bro. Michael Devalle took over the management of the Educational Institution of the
              Immaculate Conception from Fr. J.S. Freitas S.J .. The school was housed in a rented building called
              “Tardeo Castle”. When the new school year commenced on June 6, 1928, there was complete change of staff
              and servants. On the rolls were one hundred and eight-nine day scholars and ninety-eight boarders. The
              staff was composed of nine masters and four lady teachers. Mr Roch Thomas was the Head Master officially
              from July 1, 1928. Two years later in June 1930, the institution changed its name to Don Bosco High
              School. In 1932 Fr. Adolf Tornquist succeeded Fr. Hauber, staying in office until his departure for
              Argentina in May 1936. The school then remained without a Rector for nine months.
              DB shrine oldIn 1937, Rev. Fr. Aurelius Maschio was appointed Superior. Gifted with rare foresight,
              dynamism and with penchant for materializing his plans, Fr. Aurelius made an assessment of the existing
              situation, laid our his plans and launched out in a massive way to obtain funds. He found at Matunga a
              spacious plot – a landscape of marsh, water filled pits and slimymud which he proposed to buy. In the
              meanwhile Rev. Frs. Beruruli and Candela of the Superior Council, during their brief stop in Bombay on
              their way back to Turin from the Far East, visited the proposed Matunga plot and gave their approval for
              its purchase.
              With notice to quit Tardeo Castle by October 1, 1940 the entire school was shifted to a place called
              ‘Hilltop’ on Carmichael Road at Cumbala Hill by the end of September 1940. In the meanwhile all
              attention was focused upon the new place bought at Matunga for a future Don Bosco Institution. And so it
              came to pass that March 19, 1941, the foundation stone of the new building in Matunga was blessed and
              laid by Archbishop Thomas Roberts S.J.
              By October 31, 1941, ” Hilltop” was vacated and the school moved into the partially completed building.
              On January 31 st, 1942, the premises were completed and solemnly inaugurated. It remains today as the
              secondary section of Don Bosco, Matunga.
              The foundation stone of the primary section building was blessed and laid on the feast of Don Bosco
              January 31, 1950. The building was completed in time for the new school year of June 1951.
              During the Rectorship of Fr. M. CasaroUi (1952-1958), the Shrine of Don Bosco’s Madonna was started and
              completed by Fr. Maschio. Fr. Hubert Roasario became the next Rector. He was elected Bishop of Dibrugarh
              at the end of his term. On November 28, 1958, during the sacred function of the consecration of the new
              Church, Bishop D’Rosario with seven other bishops also consecrated the eight beautiful altars of the
              Church and the Crypt.
              In January, 1965 Fr. John Giacomello, Rector and Rev. Fr. Ignatius Rubio, Administrator, built what is
              the preset boarding house..</p>
          </div>
          <div id="Staff" className="content-container">
            <h2>Staff</h2>
            <p>Principal<br />
              laxman sir<br />
              office boy<br />
              Saavli kaamgar<br />
              office boy<br />
              Rohit bhai
            </p></div>
        </div>
      </div>

      {/* Contact  */}
      <div className='contact_container' id="contact_container">
        <div className="contact_header">
          <h1>Contact Us</h1>
        </div>
        <div id="contact-container">
          <div id="left">
            <h1>Contact Us</h1><br />
            <p><i className="fa-solid fa-envelope" />info@collegesearch.in</p>
            <p>IN CASE YOU HAVE A QUERY, REACH US AT:</p>
            <p>For more enquiries </p>
            <i className="fa-brands fa-firefox-browser" />
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
  );
};

export default Home;
