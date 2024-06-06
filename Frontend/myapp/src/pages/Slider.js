import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "../Images/images/img1.jpg";
import img2 from "../Images/images/img2.jpg";
import img3 from "../Images/images/img3.jpg";
import img4 from "../Images/images/img4.jpg";

import slider1 from "../Images/home-img-slider1.jpg";
import slider2 from "../Images/home-img-slider2.jpg";
import slider3 from "../Images/home-img-slider3.jpg";
import slider4 from "../Images/home-img-slider4.jpg";
import slider5 from "../Images/home-img-slider5.jpg";
import slider6 from "../Images/home-img-slider6.jpg";
import slider7 from "../Images/home-img-slider7.jpg";
import slider8 from "../Images/home-img-slider8.jpg";
import slider9 from "../Images/home-img-slider9.jpg";
import Home from './Home';
import Contact from './Contact';
import AboutPage from './AboutPage';
import "../Styles/slider.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: slider1,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider2,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider3,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider4,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider5,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider6,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider7,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
        {
            img: slider8,
            author: "Karmveer",
            title: "Bhaorav Patil",
            topic: "School",
            des: "",
        },
    ];


    useEffect(() => {
        const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        };
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            {/* carousel */}
            <div className="carousel">
                {/* list item */}
                <div className="list">
                    <div className={`item ${currentSlide ? 'active' : ''}`}>
                        <img src={slides[currentSlide].img} alt={`Img ${currentSlide}`} />
                        <div className="content">
                            <div className="author">{slides[currentSlide].author}</div>
                            <div className="title">{slides[currentSlide].title}</div>
                            <div className="topic">{slides[currentSlide].topic}</div>
                            <div className="des">{slides[currentSlide].des}</div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* list thumbnail */}
                <div className="thumbnail">
                    {slides.map((slide, index) => (
                        <div className={`item ${index === currentSlide ? 'active' : ''}`} key={index}>
                            <img src={slide.img} alt={`Img ${index + 1}`} />
                            <div className="content">
                                <div className="title">{slide.title}</div>
                                <div className="description">Description</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* next prev */}
                <div className="arrows">
                    <button id="prev" onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}>&lt;</button>
                    <button id="next" onClick={() => goToSlide((currentSlide + 1) % slides.length)}>&gt;</button>
                </div>
                {/* time running */}
                <div className="time" />
            </div>
        </>
    )
}

export default Slider;
