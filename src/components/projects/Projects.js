import React from 'react';
import styles from './Projects.module.css';

export const Projects = ({ projects, onProjectClick }) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.content}>
            {projects.slice().reverse().map((project, index) => (
                <div key={index} className={styles.projectCard} onClick={() => onProjectClick(project)}>
                    <img src={require(`../../assets/projects/${project.cardPicture}`)} 
                        alt={project.cardPicture}
                        className={styles.cardPicture}
                    />
                    <h3>{project.name}</h3>
                    <p>{project.cardDescription}</p>
                    <ul className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                        <li className={styles.technology} key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  );
}