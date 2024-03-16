import React from 'react';
import styles from './ProjectDetails.module.css';
import CloseIcon from "../../assets/nav/closeIcon.svg";

export const ProjectDetails = ({ project, onClose }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <nav className={styles.navbar}>
                    <img 
                        src={CloseIcon}
                        alt="close" 
                        onClick={onClose}
                    />
                </nav>

                <div className={styles.popupContent}>
                    <div className={styles.title}>
                        {
                            project.icon !== "" && 
                            <img 
                                src={require(`../../assets/projects/icons/${project.icon}`)} 
                                alt={project.icon}
                                className={styles.icon}
                            />
                        }
                        <h2>{project.name}</h2>
                    </div>

                    <div className={styles.dates}>
                        <p>{project.startDate} - {project.endDate}</p>
                    </div>

                    <ul className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                        <li key={index} className={styles.technology}>{tech}</li>
                        ))}
                    </ul>
                    
                    <div className={styles.aboutContainer}>
                        <h3>About</h3>
                        <div className={styles.aboutContent}>
                            <p>{project.about}</p>
                            {
                                project.aboutPicture !== "" &&
                                <img src={require(`../../assets/projects/about/${project.aboutPicture}`)} 
                                    alt={project.aboutPicture}
                                    className={styles.aboutPicture}
                                />
                            }
                        </div>
                        
                    </div>
                    
                    <ul className={styles.tags}>
                        {project.tags.map((tag, index) => (
                        <li key={index} className={styles.tag}>{tag}</li>
                        ))}
                    </ul>

                    <div className={styles.development}>
                        <h3>Development</h3>
                        <p>{project.development}</p>
                    </div>

                    <div className={styles.linksContainer}>
                        <h3>Links</h3>
                        <div className={styles.linksContent}>
                            {project.demoVideo !== "" && <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">Video</a>}
                            {project.github !== "" && <a href={project.github}  target="_blank" rel="noopener noreferrer">Github</a>}
                            {project.website !== "" && <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>}
                        </div>
                    </div>

                    {
                        project.team.length !== 0 &&
                        <div className={styles.teamContainer}>
                            <h3>Team</h3>
                            <ul className={styles.teamContent}>
                                {project.team.map((member, index) => (
                                    <li key={index} className={styles.teamMember}>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }  
                </div>
            </div>
        </div>
    );
}