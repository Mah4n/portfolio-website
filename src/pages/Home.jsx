import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Mah Noor
        </a>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Computer Science Student</p>

          <h1>Hi, I'm Mah Noor.</h1>

          <p className="hero-description">
            Computer Science student at King's College London interested in
            software engineering and building practical, user-focused
            applications.
          </p>

          <div className="hero-links">
            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a
              href="https://github.com/Mah4n"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">Selected Work</p>
          <h2>Projects</h2>

          <div className="projects-grid">
            <article className="project-card">
              <p className="project-number">01</p>
              <h3>AI Interview Preparation Platform</h3>
              <p>
                Full-stack platform for practising role-specific interview
                questions, receiving AI-generated feedback and tracking
                performance over time.
              </p>
              <p className="tech-stack">
                React · FastAPI · PostgreSQL · Python
              </p>
              <a href="#" className="project-link">View live project ↗</a>
            </article>

            <article className="project-card">
              <p className="project-number">02</p>
              <h3>London Pollution Visualisation</h3>
              <p>
                University team project for exploring London pollution data
                through interactive visualisations and statistical analysis.
              </p>
              <p className="tech-stack">Java · JavaFX · Data Analysis</p>
              <Link to="/projects/london-pollution" className="project-link">
                View case study →
              </Link>
            </article>

            <article className="project-card">
              <p className="project-number">03</p>
              <h3>Safari Simulation</h3>
              <p>
                Object-oriented Java simulation developed as part of university
                coursework.
              </p>
              <p className="tech-stack">Java · OOP</p>
              <Link to="/projects/safari-simulation" className="project-link">
                View case study →
              </Link>
            </article>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">About</p>
          <h2>A little about me</h2>

          <p className="about-text">
            I'm a Computer Science student at King's College London with an
            interest in software engineering, full-stack development and
            problem solving. I enjoy turning ideas into practical applications
            and continuously developing my technical skills through personal
            and university projects.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-label">Contact</p>
          <h2>Get in touch</h2>

          <div className="contact-links">
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
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;