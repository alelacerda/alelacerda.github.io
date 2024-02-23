import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                {education.map((edu, id) => 
                <li key={id} className={styles.educationItem}>
                    <h3>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.date}>{edu.date}</p>
                </li>
                )}
            </div>
        </section>
    );
}