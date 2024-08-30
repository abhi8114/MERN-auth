// src/components/About.js
import React from 'react';
import './about.css'; // Import the stylesheet for the About page

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are dedicated to promoting a deeper connection with nature and fostering a healthier environment for all.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and empower people to make a positive impact on the environment. We believe in the importance of conserving nature and the role it plays in our lives.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="path/to/member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="path/to/member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="path/to/member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Environmental Conservation</li>
          <li>Community Engagement</li>
          <li>Sustainability</li>
          <li>Education and Awareness</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
