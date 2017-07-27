import React from 'react';

const Project = (props) => (
  <li className="trivium media group">
    <div>
      <p className="triv-p">
        {props.body}
        {props.image}
        {props.video}
      </p>
      <br/>
      
      <p className="triv-p">
        Check out the live app <a href={props.url}><strong className='resume-link'> HERE</strong></a> 
      </p>
    </div>
  </li>
);

export default Project;