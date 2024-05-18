import ProjectCard from '../project-card/project-card.tsx';
import './projects-section.css';
import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
        <h1>Projects</h1>
        <div className='projects-container'>
            <ProjectCard imgSrc='img/projects/erlos/erlos-2.png' title='ErlOS' description="ErlOS est un gestionnaire de raccourcis prenant l'apparence d'un OS. Il permet de créer des icones qui redirigent vers les liens souhaités. Un démineur est également disponible ainsi qu'une barre de recherche permettant de naviguer sur le web. Il est également possible de personnaliser l'interface à l'aide de différents thèmes, les icones et les thèmes sont entierement stockés dans le local storage. Ce projet est un projet personnel." />
            <ProjectCard imgSrc='img/projects/intemporal/intemporal-1.png' title='Intemporal' description="J'ai eu l'occasion de développer au cours de l'année 2023 un site de vente aux enchères de montres nommé Intemporal au sein d'une équipe de 6 personnes. Ce projet a été réalisé à l'IUT 2 de Grenoble. J'ai été en charge du maquettage ainsi que de la réalisation HTML, CSS et JavaScript de notre site. J'ai donc réalisé le design du site ainsi que celui du dossier de conception. " />
        </div>
    </section>
  )
}

export default ProjectsSection;