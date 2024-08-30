import React from 'react';
import './home.css';
import image1 from '../../assets/image1.jpg';
import {motion} from 'framer-motion'
import Footer from '../footer/footer';
import NatureLoverStories from '../middle-section/NatureLoverStories';


const Home = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        {/* <h1 className="hero-title">Waste Recycle</h1> */}
        <motion.h1
        className='hero-title'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      WE LOVE NATURE DEEPLY.
    </motion.h1>
    
    <motion.p
    className='hero-subtitle'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      We’re on a mission to protect and preserve nature for future generations.
    </motion.p>
    <motion.button
      className='motion-button'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      READ MORE
    </motion.button>
      </div>
      <div className="hero-image">
        <img src={image1} alt="Recycling Illustration" />
      </div>
    </section>
    <section>
    <NatureLoverStories/>
    <Footer/>
    </section>
    </>
  );
};


export default Home;
