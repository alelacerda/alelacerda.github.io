import React, { useState } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Education } from './components/education/Education';
import { Awards } from './components/awards/Awards';
import { Projects } from './components/projects/Projects';
import { ProjectDetails } from './components/projectDetails/ProjectDetails';
import { Contact } from './components/contact/Contact';
import projects from "./data/projects.json";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowPopup(true);
        document.body.style.overflow = "hidden";
    };
    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Awards />
            <Education />
            <Projects projects={projects} onProjectClick={handleProjectClick} />
            <Contact />
            {showPopup && (
                <ProjectDetails project={selectedProject} onClose={handleClosePopup} />
            )}
        
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    );
}

export default App;