import React from 'react';
import Project from './Project';

const ProjectsContainer = (props) => {
  let projects = props.data.map((project) => {
    return <Project body={project.body} key={project.id} />
  }); 
  return (
    <div>
      <ul>
        {projects}    
      </ul>
    </div>
  );
}

export default ProjectsContainer;