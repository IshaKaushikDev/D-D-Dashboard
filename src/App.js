import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EquipmentPage from "./pages/EquipmentPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment/:index" element={<EquipmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
