import React from 'react';

const Project = (props) => (
  <li className="trivium media group">
    <img className="trivium-img" src={props.img} alt="project" />
    <div>
      <h3>{props.title}</h3>
      <p className="triv-p">{props.excerpt}</p>
    </div>
  </li>
);

export default Project;