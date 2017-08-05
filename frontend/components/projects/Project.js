import React from 'react';

const Project = (props) => (
  <div>
    <p className="triv-p">
      {props.body}
    </p>
    <br/>
    
    <p className="triv-p">
      Check out the live app <a href={props.url}><strong className='resume-link'> HERE</strong></a> 
    </p>
    <br/>

    <p className='screencast-header'>A 2min screencast of the app is shown below.</p>
    <div className='iframe3'>
      <iframe src={props.video} width="840" height="460" frameBorder="35" allowFullScreen>
      </iframe>
    </div>
  </div>

);

export default Project;