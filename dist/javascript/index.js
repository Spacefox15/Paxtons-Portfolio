import { createRoot } from "react-dom/client";

function ProjectCard() {
    // Placeholder for project card component
    return (
        <div className="project-card">
            <h3>Project Title</h3>
            <p>Brief description of the project goes here.</p>
            <a href="#">View Project</a>
            <p>Type</p>
            <a href="#">Documentation</a>
            <p>Skills Used</p>
        </div>
    );
}

const domNode = document.getElementById("project_cards");
const root = createRoot(domNode);
root.render(<ProjectCard />);
