import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alessandra</h1>
            <p className={styles.description}>
                I'm a passionate Software Engineer specializing in crafting amazing experiences for iOS and other Apple platforms.
            </p>
            <a 
                href="mailto:flacerdaale@gmail.com" 
                className={styles.contactBtn}>
                    Get In Touch!
            </a>
        </div>
        <img src={
            require("../../assets/hero/heroImage.png")} 
            alt="hero" 
            className={styles.heroImage}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
}
