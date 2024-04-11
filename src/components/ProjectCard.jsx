import React from 'react';
import '../style/ProjectCard.css';

export const ProjectCard = (props) => {
  return (
    <div className='card'>
        Name : {props.name} <br />
        Link : <a href={props.link} target='_blank'>{props.link}</a> <br />
        About : {props.about}
    </div>
  )
}
