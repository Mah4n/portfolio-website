import statsPage from "../assets/london-pollution/statisticsPage.png";
import homePage from "../assets/london-pollution/homePage.png";
import filter1 from "../assets/london-pollution/filtering1.png";
import filter2 from "../assets/london-pollution/filtering2.png";
import statsVideo from "../assets/london-pollution/statisticsVideo.mp4"

import "./Projects.css"
import { Link } from "react-router-dom";

function LondonPollution() {
  return (
    <main className="case-study">
      <Link to="/" className="back-link">
        ← Back to portfolio
      </Link>

      <h1>London Pollution Visualisation</h1>

      <p className="tech-stack">
        Java · JavaFX · JUnit · Data Visualisation · Git
      </p>

      <section>
        <h2>Overview</h2>

        <p>
          A four-person JavaFX application for exploring London air-pollution data
          across three pollutants and six years of historical data. The system
          combines interactive maps, statistical analysis, configurable filtering and
          multiple visualisation modes to help users compare pollution patterns across
          locations and time periods.
        </p>

        <img 
        src={homePage}
        alt="London air pollution application home page"
        className="case-study-image"/>
      </section>

      <section>
        <h2>My Role</h2>

        <p>
          I owned the statistics and analytics functionality, including the
          Statistics, StatisticsGUI and MainWindow classes. I implemented summary
          statistics, dynamic filtering and five chart types to support analysis across
          pollutants, locations and time periods.
        </p>

        <img 
        src={statsPage}
        alt="London air pollution application statistics page"
        className="case-study-image"/>
      </section>

      <section>
        <h2>Key features</h2>

        <ul>
          <li>
            Visualised NO₂, PM10 and PM2.5 pollution data across six years.
          </li>

          <li>
            Calculated summary metrics including average, highest and lowest pollution
            values.
          </li>

          <li>
            Implemented five chart types: line, bar, scatter, pie and area charts.
          </li>

          <li>
            Added filtering by location, pollutant, year range and pollution-value
            range.
          </li>

          <li>
            Validated statistics calculations with JUnit tests against expected dataset
            values.
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical highlights</h2>

        <p>
          I designed the statistics interface around dynamic user-selected filters,
          allowing datasets to be recalculated and visualisations updated from
          configurable location, pollutant and range inputs. Dependent selections were
          constrained to prevent invalid year and pollution-value ranges.
        </p>

        <p>
          JavaFX chart components were used to provide multiple views of the same
          dataset, including trend analysis, distribution visualisation and comparisons
          between pollutant types.
        </p>

        <div className="image-row">
          <img 
          src={filter1}
          alt="Shows Pollutant Type, City and Year filters from Statistics Page"
          className="case-study-image"/>

          <img 
          src={filter2}
          alt="Shows advanced filters from Statistics Page"
          className="case-study-image"/>
        </div>
      </section>

      <section>
        <h2>Project Video</h2>

        <p>
          A demonstration of the statistics workflow, including dataset selection,
          custom filtering and multiple graph-based visualisations.
        </p>

        <video className="case-study-video" controls muted playsInline>
          <source src={statsVideo} type="video/mp4"/>
          Your browser does not support video playback.
        </video>
      </section>

      <section>
        <h2>What I learned</h2>

        <p>
          This project strengthened my experience with Java, JavaFX, data processing,
          testing and collaborative development with Git. It also gave me practical
          experience designing interactive analytics software where user-selected
          inputs dynamically drive calculations and visualisations.
        </p>
      </section>
    </main>
  );
}

export default LondonPollution;