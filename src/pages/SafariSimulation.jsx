import { Link } from "react-router-dom";

function SafariSimulation() {
  return (
    <main className="case-study">
      <Link to="/" className="back-link">
        ← Back to portfolio
      </Link>

      <p className="section-label">Project Case Study</p>

      <h1>Safari Simulation</h1>

      <p className="tech-stack">
        Java · Object-Oriented Programming · Inheritance · Simulation
      </p>

      <section>
        <h2>Overview</h2>

        <p>
          A Java-based ecosystem simulation modelling interactions between
          multiple predator and prey species in an African safari environment.
          The simulation combines animal behaviour, food chains, breeding,
          environmental conditions and resource management to create a dynamic
          population over time.
        </p>
      </section>

      <section>
        <h2>What I built</h2>

        <p>
          I developed the simulation around seven animal species across both
          land and aquatic environments, with behaviour driven by factors such
          as hunger, thirst, age, gender, time of day and surrounding species.
          Predators hunt competing prey while herbivores and aquatic species
          depend on renewable environmental resources.
        </p>
      </section>

      <section>
        <h2>Key features</h2>

        <ul>
          <li>
            Seven interacting species across predator, prey and aquatic
            ecosystems.
          </li>

          <li>
            Behaviour systems for hunting, movement, breeding, ageing, hunger
            and hydration.
          </li>

          <li>
            Day and night cycles affecting species activity.
          </li>

          <li>
            Dynamic weather including clear conditions, rain, fog and drought.
          </li>

          <li>
            Disease system affecting survival, breeding and hunting success.
          </li>

          <li>
            Growing plants and lake resources that form part of the simulation's
            food chains.
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical highlights</h2>

        <p>
          I used object-oriented design and inheritance to share common animal
          behaviour while allowing individual species to define their own
          movement, diet and survival rules. Environmental systems were designed
          to interact with one another, so changes such as drought, fog or
          disease could influence multiple parts of the simulation at once.
        </p>
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
        <h2>What I learned</h2>

        <p>
          This project strengthened my understanding of object-oriented design,
          inheritance and modelling complex systems in Java. It also taught me
          how small changes in shared rules and probabilities can create
          unexpected behaviour across an entire software system.
        </p>
      </section>

      <section>
        <h2>Project images</h2>

        <p>Project screenshots will be added here.</p>
      </section>
    </main>
  );
}

export default SafariSimulation;