// src/components/NatureLoverStories.js
import React from 'react';
import './styles.css' ;
import Slider from 'react-slick';
import image2 from '../../assets/image2.png';


const NatureLoverStories = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <>
      <section className="nature-lover-stories">
        <h2>Nature Lover Stories</h2>
        <Slider {...settings} className="stories-slider">
          <div className="story-card">
            <img src="path/to/image1.jpg" alt="A walk for our better healthy environment" />
            <h3>A walk for our better healthy environment</h3>
            <p>
              Personalities mathematicians expenses have found most of simply.
              Antiquity both of as your children.
            </p>
          </div>
          <div className="story-card">
            <img src="path/to/image2.jpg" alt="Plants for saving life and providing fresh" />
            <h3>Plants for saving life and providing fresh</h3>
            <p>
              Personalities mathematicians expenses have found most of simply.
              Antiquity both of as your children.
            </p>
          </div>
          <div className="story-card">
            <img src="path/to/image3.jpg" alt="Planning trees from our hand to hands" />
            <h3>Planning trees from our hand to hands</h3>
            <p>
              Personalities mathematicians expenses have found most of simply.
              Antiquity both of as your children.
            </p>
          </div>
          {/* Add more story cards as needed */}
        </Slider>
      </section>
      <section className='image2'>
        <img  src={image2} alt="" />
        <div className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati tempora unde consequatur facere ad voluptatem expedita earum ratione ipsa rerum mollitia, at nemo fugit velit nulla? Quos, aperiam nobis.</div>
        </section>
      </>
    );
  };
  

export default NatureLoverStories;
