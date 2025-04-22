import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import "./Home.css";
import video1 from "../Assets/Shree Nagari III.mp4"; // Path to your uploaded video
import About from "./About";
import Yogabenefit from "./Amenities";
import ServicesPage from "./Services";
import MedicalYogaTherapy from "./MedicalYogaTherapy";
import ContactUs from "./Contact";
import Footer from "../Components/Footer";
import ContactIcons from "../Components/ContactIcon";
import Gallery from "./Gallary";
import Projects from "./Projects";
import Amenities from './Amenities';

function Home() {
  const slides = [
    {
      media: video1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatically transition slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div id="home">
        <Header />
        <ContactIcons />
        <div className="slider">
          
          <div className="slide" key={currentIndex}>
            <video
              src={slides[currentIndex].media}
              controls={false}
              autoPlay
              loop
              
              className="slider-video"
            />
            
          </div>
         
        </div>
        <About />
        <ServicesPage />
        <Projects />
        <Amenities/>
        <Gallery />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
