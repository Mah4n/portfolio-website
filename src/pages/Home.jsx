import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <header className="navbar">
        <nav>
          <a href="mailto:YOUR_EMAIL">Email</a>

          <a
            href="https://linkedin.com/in/mah4n"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Mah4n"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">COMPUTER SCIENCE · SOFTWARE · DATA</p>

          <h1>Hi, I'm Mah Noor.</h1>

          <p className="hero-description">
            Computer Science student with experience across software development,
            data analysis and interactive application design. I enjoy solving
            technical problems, working with real-world data and building
            practical, user-focused applications.
          </p>

          <div className="skills-row">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>Git</span>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2>Projects</h2>

          <div className="projects-grid">
            <article className="project-card">
              <p className="project-number">01</p>

              <h3>PrepSprint</h3>

              <p>
                Full-stack interview preparation platform generating
                role-specific questions, AI feedback and performance analytics.
              </p>

              <p className="tech-stack">
                React · FastAPI · PostgreSQL · Python
              </p>

              <a href="#" className="project-link">
                View live project ↗
              </a>
            </article>

            <article className="project-card">
              <p className="project-number">02</p>

              <h3>London Pollution Visualisation</h3>

              <p>
                JavaFX data visualisation application for analysing London
                air-pollution trends across multiple pollutants, years and
                locations using interactive filtering and statistical analysis.
              </p>

              <p className="tech-stack">
                Java · JavaFX · Data Analysis
              </p>

              <Link
                to="/projects/london-pollution"
                className="project-link"
              >
                View case study →
              </Link>
            </article>

            <article className="project-card">
              <p className="project-number">03</p>

              <h3>Safari Simulation</h3>

              <p>
                Java ecosystem simulation modelling seven interacting species
                using object-oriented design, inheritance and dynamic
                environmental systems.
              </p>

              <p className="tech-stack">
                Java · OOP · Inheritance 
              </p>

              <Link
                to="/projects/safari-simulation"
                className="project-link"
              >
                View case study →
              </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;