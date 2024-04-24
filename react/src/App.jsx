import "./index.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProduitsPage from "./components/ProduitsPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProduitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
