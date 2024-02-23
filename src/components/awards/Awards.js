import React from "react";
import styles from "./Awards.module.css";
import awards from "../../data/awards.json";

export const Awards = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Awards</h2>
            <div className={styles.content}>
                {awards.map((awardsItem, id) => 
                <li key={id} className={styles.awardsItem}>
                    <h3>{`${awardsItem.name}`}</h3>
                    <p className={styles.awardsItemDate}>
                        {`${awardsItem.year}`}
                    </p>
                    <p className={styles.awardsItemDescription} >
                        {awardsItem.description}
                    </p>
                </li>
                )}
            </div>
        </section>
    );
}