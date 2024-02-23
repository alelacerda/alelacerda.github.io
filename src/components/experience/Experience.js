import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";

export const Experience = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {experience.map((experienceItem, id) => 
                <li key={id} className={styles.experienceItem}>
                    <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                    <p className={styles.experienceItemDate}>
                        {`${experienceItem.startDate} - ${experienceItem.endDate}`}
                    </p>
                    <p className={styles.experienceItemDescription} >
                        {experienceItem.description}
                    </p>
                </li>
                )}
            </div>
        </section>
    );
}