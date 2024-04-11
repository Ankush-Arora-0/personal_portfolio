import React from 'react';
import { NavLink} from 'react-router-dom';
import '../style/Navbar.css';

export const Navbar = () => {
  const handleChange =()=>{
    if( document.getElementById('small').style.left =='0px'){
      document.getElementById('small').style.left = '-150px';
    }
    else{
      document.getElementById('small').style.left = '0px';
    }
  }
  return (
    <div className='navbar'>
    <div className="icon-box" onClick={handleChange}>
    <div className="icons"></div>
    <div className="icons"></div>
    <div className="icons"></div>
    </div>
    <NavLink to='/' className='navlinks' activeClassName='active'>Home</NavLink>
    <NavLink to='/about' className='navlinks' activeClassName='active'>About Me</NavLink>
    <NavLink to='/projects' className='navlinks' activeClassName='active'>Projects</NavLink>
    <NavLink to='/contact' className='navlinks' activeClassName='active'>Contact Me</NavLink>
    <div className="small-links" id='small' style={{left:'-150px'}}>
    <NavLink to='/' className='navlinks1' activeClassName='active' onClick={handleChange}>Home</NavLink>
    <NavLink to='/about' className='navlinks1' activeClassName='active' onClick={handleChange}>About Me</NavLink>
    <NavLink to='/projects' className='navlinks1' activeClassName='active' onClick={handleChange}>Projects</NavLink>
    <NavLink to='/contact' className='navlinks1' activeClassName='active' onClick={handleChange}>Contact Me</NavLink>

    </div>
    </div>
  )
}
