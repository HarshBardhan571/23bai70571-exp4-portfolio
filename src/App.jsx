import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports"; // NEW PAGE (Experiment 5)

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* NEW ROUTE FOR EXPERIMENT 5 */}
        <Route path="/reports" element={<Reports />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;