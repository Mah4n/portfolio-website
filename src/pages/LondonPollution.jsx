import { Link } from "react-router-dom";

function LondonPollution() {
  return (
    <main className="case-study">
      <Link to="/" className="back-link">
        ← Back to portfolio
      </Link>

      <p className="section-label">Project Case Study</p>

      <h1>London Pollution Visualisation</h1>

      <p className="tech-stack">
        Java · JavaFX · JUnit · Data Visualisation · Git
      </p>

      <section>
        <h2>Overview</h2>

        <p>
          A four-person university software project focused on building an
          interactive Java application for exploring air pollution across
          London. The application allowed users to visualise pollution data,
          compare trends across years and pollutants, filter datasets and
          inspect individual locations.
        </p>
      </section>

      <section>
        <h2>My contribution</h2>

        <p>
          I was responsible for the statistics and analytics functionality,
          including the Statistics, StatisticsGUI and MainWindow classes. I
          implemented summary statistics, configurable data filters and
          multiple graph-based visualisations to help users analyse pollution
          trends across locations, pollutants and time periods.
        </p>
      </section>

      <section>
        <h2>Key features</h2>

        <ul>
          <li>
            Interactive visualisation of NO₂, PM10 and PM2.5 pollution data.
          </li>

          <li>
            Statistical analysis including average, highest and lowest
            pollution values.
          </li>

          <li>
            Line, bar, scatter, pie and area charts for exploring pollution
            trends.
          </li>

          <li>
            Filtering by location, pollutant, time period and pollution range.
          </li>

          <li>
            JUnit testing of statistics calculations against expected values.
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical highlights</h2>

        <p>
          I designed the statistics interface so users could dynamically change
          filters and compare different datasets without selecting invalid
          ranges. I also implemented several chart types and pollutant
          comparison views using JavaFX chart components.
        </p>
      </section>

      <section>
        <h2>What I learned</h2>

        <p>
          This project strengthened my experience with object-oriented Java,
          JavaFX, data processing and collaborative development with Git. It
          also gave me experience designing software around user-driven data
          exploration rather than simply displaying static results.
        </p>
      </section>

      <section>
        <h2>Project images</h2>

        <p>Project screenshots will be added here.</p>
      </section>
    </main>
  );
}

export default LondonPollution;