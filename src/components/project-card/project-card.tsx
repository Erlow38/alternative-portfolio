import React from 'react';
import './project-card.css';

interface ProjectCardProps {
    imgSrc: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="project-card">
        <img src={imgSrc} alt="" />
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard;