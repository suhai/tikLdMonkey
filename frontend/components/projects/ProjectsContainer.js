import React from 'react';
import Project from './Project';

const ProjectsContainer = (props) => {
  let projects = props.data.map((project) => {
    return <Project key={project.id} body={project.body} url={project.url} image={project.image} video={project.video} />
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