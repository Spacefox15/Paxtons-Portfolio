import { useState } from 'react';
import projects from './project-data.js';
import ProjectCard from './ProjectCard.jsx';
import {Search, Sort} from './Search-Sort.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='title'>Projects</h1>
      {/*<Search/>*/}
      {/*<Sort/>*/}
      <div className='project-list'>
        {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </div>
  );
}

export default App;