import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.content}>
                <img 
                    src={require("../../assets/about/aboutImage.png")} 
                    alt="about" 
                    className={styles.aboutImage} 
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                            src={require("../../assets/about/cursorIcon.png")}
                            alt="cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Computer Engineer</h3>
                            <p>
                                I'm currently finishing my degree in Computer Engineering at the Technological Federal University of Paraná (UTFPR).
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={require("../../assets/about/mobileIcon.png")}
                            alt="mobile"                        
                        />
                        <div className={styles.aboutItemText}>
                            <h3>iOS Developer</h3>
                            <p>
                                I was a part of the Apple Developer Academy in 2021 and 2022, where I started specializing in iOS development.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                            src={require("../../assets/about/swiftIcon.png")}
                            alt="swift"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Swift Student Challenge Winner</h3>
                            <p>
                                I am proud to have been recognized as a winner of the Swift Student Challenge in both 2021 and 2022.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}