import React from 'react';
import '../style/Home.css';
import ME from '../images/m4.jpg'
export const Home = () => {
  return (
    <div className='home-page'>
      <div className="leftHbox">
        <p className='box-top'>Hi! it's</p>
        <h3 className='name'><strong>A</strong>nkush Arora</h3>
        <p>Welcome to my digital heaven, where creativity meets functionality</p><br />
        <p>Elevating your online presence with innovative design solutions.</p>
      </div>
      <div className="rightHbox">
        <img src={ME} alt="#" />
      </div>
    </div>
  )
}
