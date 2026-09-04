import safariOverview from "../assets/safari/overview.png";
import fogSafariOverview from "../assets/safari/fogOverview.png";
import headerOverview from "../assets/safari/navBar.png";
import oopStructure from "../assets/safari/structure.png";
import safariVideo from "../assets/safari/simulation.mp4"

import "./Projects.css"
import { Link } from "react-router-dom";

function SafariSimulation() {
  return (
    <main className="case-study">
      <Link to="/" className="back-link">
        ← Back to portfolio
      </Link>

      <h1>Safari Simulation</h1>

      <p className="tech-stack">
        Java · JavaFX · Object-Oriented Programming · Inheritance · Simulation
      </p>

      <section>
        <h2>Overview</h2>

        <p>
          A Java-based ecosystem simulation modelling seven interacting animal species
          across land and aquatic environments. The system combines three food chains,
          day/night cycles, breeding, resource consumption, weather and disease to
          simulate population changes over hundreds of time steps.
        </p>

        <img 
        src={safariOverview}
        alt="Safari simulation showing land and aquatic species represented as pixels"
        className="case-study-image"/>
      </section>

      <section>
        <h2>What I built</h2>

        <p>
          I designed the simulation around seven species with distinct behaviours,
          movement rules and survival constraints. Animal state is influenced by
          hunger, thirst, age, gender, activity cycle, nearby species and environmental
          conditions, creating different behaviours for predators, herbivores and
          aquatic animals.
        </p>
      </section>

      <section>
        <h2>Key features</h2>

        <ul>
          <li>
            Modelled seven species across three interconnected food chains.
          </li>

          <li>
            Implemented hunting, movement, breeding, ageing, hunger and hydration logic.
          </li>

          <li>
            Added day/night activity cycles with species-specific active and resting behaviour.
          </li>

          <li>
            Simulated four weather states: clear, rain, fog and drought.
          </li>

          <li>
            Implemented two disease types affecting survival, breeding and hunting success.
          </li>

          <li>
            Added renewable plant and lake resources to support herbivore and aquatic food chains.
          </li>
        </ul>

        <div className="image-row">
          <img 
          src={fogSafariOverview}
          alt="Safari simulation showing land and aquatic species during foggy weather"
          className="case-study-image"/>

          <img 
          src={headerOverview}
          alt= "Header showing information about the simulation"
          className="case-study-image"/>
        </div>
      </section>

      <section>
        <h2>Technical highlights</h2>

        <p>
          I structured the simulation using object-oriented design and inheritance,
          with shared behaviour defined in abstract animal classes and specialised
          logic implemented for predators, herbivores and aquatic species. This reduced
          duplication while allowing each species to define its own movement, diet,
          breeding and survival rules.
        </p>

        <p>
          Environmental systems were designed to interact rather than operate
          independently. For example, fog reduces hunting success, drought increases
          dehydration and slows plant growth, while disease affects both breeding and
          predator performance.
        </p>

        <img 
        src={oopStructure}
        alt="Shows OOP structure of animal classes"
        className="case-study-image"/>
      </section>

      <section>
        <h2>Simulation design</h2>

        <p>
          The ecosystem contains several connected food chains, with predators
          competing for prey and animals responding to limited resources.
          Parameters such as breeding probability, hunting success and lifespan
          were balanced to produce changing populations while keeping the
          simulation stable over time.
        </p>
      </section>

      <section>
        <h2>Project video</h2>

        <p>
          A live simulation run showing population changes, time-of-day transitions,
          weather conditions and disease levels updating dynamically.
        </p>

        <video className="case-study-video" controls muted playsInline>
          <source src={safariVideo} type="video/mp4"/>
          Your browser does not support video playback.
        </video>
      </section>

      <section>
        <h2>What I learned</h2>

        <p>
          This project strengthened my understanding of inheritance, abstraction and
          state-driven system design in Java. It also gave me experience debugging
          emergent behaviour, where small changes to probabilities or shared rules
          could significantly affect population stability across the entire simulation.

        </p>
      </section>
    </main>
  );
}

export default SafariSimulation;