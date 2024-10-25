import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Maintenance } from "./pages/Maintenance";
import { Tools } from "./pages/Tools";
import { AboutUs } from "./pages/AboutUs";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Maintenance />} />
      <Route path="/herramientas" element={<Tools />} />
      <Route path="/nosotros" element={<AboutUs />} />
    </Routes>
  );
};
