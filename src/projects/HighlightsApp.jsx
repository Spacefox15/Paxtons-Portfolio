import { useState } from 'react';
import projects from './project-data.js';
import ProjectCard from './ProjectCard.jsx';

function HighlightsApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='project-list'>
        {projects.slice(0,3).map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </div>
  );
}

export default HighlightsApp;