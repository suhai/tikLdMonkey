import React from 'react';

const Project = (props) => (
  <li className="trivium media group">
    <div>
      <p className="triv-p">{props.body}</p>
    </div>
  </li>
);

export default Project;