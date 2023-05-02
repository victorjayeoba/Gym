import React from 'react';
import "./Home.css";
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Coaches/Coaches';
import Coaches from '../../components/Gallery/Gallery';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import Contact from "../../components/Contact/contact";

const Home = () => {
  return (
    <div>
        <Hero/>
        <Gallery/>
        <Coaches/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home