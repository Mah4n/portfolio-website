import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LondonPollution from "./pages/LondonPollution";
import SafariSimulation from "./pages/SafariSimulation";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/london-pollution" element={<LondonPollution />}/>
      <Route path="/projects/safari-simulation" element={<SafariSimulation />}/>
    </Routes>
  );
}

export default App;