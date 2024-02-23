import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={StyleSheet.links}>
                <li className={styles.link}>
                    <img src={require("../../assets/contact/emailIcon.png")} alt="email-icon" />
                    <a href="mailto:flacerdaale@gmail.com">flacerdaale@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={require("../../assets/contact/githubIcon.png")} alt="github-icon" />
                    <a href="https://github.com/alelacerda">github.com/alelacerda</a>
                </li>
                <li className={styles.link}>
                    <img src={require("../../assets/contact/linkedinIcon.png")} alt="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/ale-lacerda">linkedin.com/in/ale-lacerda</a>
                </li>
            </ul>
        </footer>
    );
}; 