import React from "react";
import styles from "./Contact.module.css";

import EmailIcon from "../../assets/contact/emailIcon.svg";
import GithubIcon from "../../assets/contact/githubIcon.svg";
import LinkedinIcon from "../../assets/contact/linkedinIcon.svg";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={StyleSheet.links}>
                <li className={styles.link}>
                    <img src={EmailIcon} alt="email-icon" />
                    <a href="mailto:flacerdaale@gmail.com">flacerdaale@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={GithubIcon} alt="github-icon" />
                    <a href="https://github.com/alelacerda">github.com/alelacerda</a>
                </li>
                <li className={styles.link}>
                    <img src={LinkedinIcon} alt="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/ale-lacerda">linkedin.com/in/ale-lacerda</a>
                </li>
            </ul>
        </footer>
    );
}; 