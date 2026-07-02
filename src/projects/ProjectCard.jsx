import { useState } from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className='inner-project-card'>
        <div className="project-card-title">
          <h3>{project.name}</h3>
        </div>
        <div className='project-card-image'>
          <img src={project.image} alt={project.name} />
        </div>
        <div className='project-card-skills'>
          <p>{project.skills.join(', ')}</p>
        </div>
        <div className='project-card-ai'>
          <p>{project.AI ? "AI-Powered" : "Non-AI"}</p>
        </div>
        <div className='project-card-description'>
          <p>{project.description}</p>
        </div>
        <div className='project-card-link'>
          <a href={project.link}>View Project</a>
          <a href={project.github}>GitHub</a>
        </div>
      </div>
    </div>
  );
} 

export default ProjectCard;