import React from 'react';
import '../style/About.css';

export const About = () => {
  return (
    <div className='about-page'>
      <em>
       As a MERN stack developer, I specialize in crafting dynamic web applications using MongoDB, Express.js, React.js, and Node.js. With a passion for clean code and user-centric design, I thrive on turning ideas into functional and visually appealing solutions. Collaborative by nature, I enjoy working in teams to tackle complex challenges and deliver exceptional results. Committed to continuous learning, I'm dedicated to staying at the forefront of technology to drive innovation and create meaningful experiences for users.
      </em> 
      <div className="footerline"></div>
      <div className="skillbox">
      <h4>My Skills</h4>
      <i>HTML <span className='yellow'></span></i>
      <i>CSS <span className="yellow"></span></i>
      <i>JAVASCRIPT <span className="yellow"></span></i>
      <i>REACT <span className="green"></span></i>
      <i>NODE <span className="yellow"></span></i>
      <i>MONGODB <span className="red"></span></i>
      </div>
      <div className="instruction-box">
        * Green line refers to good command on the skill <br />
        * Yellow line refers to medium command on the skill <br />
        * Red line refers to less command on the skill <br />
      </div>
    </div>
  )
}
