import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Education } from './components/education/Education';
import { Awards } from './components/awards/Awards';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Awards />
      <Education />
      <Contact />
      
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </div>
  );
}

export default App;
