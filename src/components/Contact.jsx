import React, { useState } from 'react';
import '../style/Contact.css';

export const Contact = () => {
  const [inpData ,setInpData] = useState({
    name:"",
    email:"",
    phone:""
  })
  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    if(name==='name'){
      setInpData((oldVal)=>{
        return{name:value,
        email:oldVal.email,
        phone:oldVal.phone}
      })
    }
    else if(name==='email'){
      setInpData((oldVal)=>{
        return{name:oldVal.name,
        email:value,
        phone:oldVal.phone}
      })
    }
    else{
      setInpData((oldVal)=>{
        return{name:oldVal.name,
        email:oldVal.email,
        phone:value}
      })
    }
  }



const handleSubmit=(e)=>{
  e.preventDefault();
 alert('I will contact you.');
 setInpData(()=>{
  return { name:"",
  email:"",
  phone:""}
 })
  }
  return (
    <div className='contact-page'>
      <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Name:</label>
        <input type="text"  placeholder='Enter your name' name='name' autoComplete='off'   onChange={handleChange} value={inpData.name}/>
      </div>
      
      <div>

      <label htmlFor="email">Email:</label>
        <input type="text"  placeholder='Enter your email' name='email' autoComplete='off'  onChange={handleChange} value={inpData.email}/>
      </div>
      
      <div>

      <label htmlFor="phone">Phone:</label>
        <input type="text"  placeholder='Enter your name' name='phone' autoComplete='off'  onChange={handleChange} value={inpData.phone}/>
      </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
