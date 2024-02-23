import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                {skills.map((skill, id) => 
                <li key={id} className={styles.skillItem}>
                    <h3>{skill.name}</h3>
                </li>
                )}
            </div>
        </section>
    );
}