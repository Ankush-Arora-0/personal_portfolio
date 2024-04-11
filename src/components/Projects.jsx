import React, { useState } from 'react';
import '../style/Projects.css';
import {data} from './ProjectData.js';
import { ProjectCard } from './ProjectCard.jsx';

export const Projects = () => {
  const [datas,setDatas] = useState(data);
  return (
    <div className='project-page'>
    
      {datas.map((val)=>{
        return(<ProjectCard name={val.name} link ={val.link} about={val.about}></ProjectCard>);
      })}
    </div>
  )
}
