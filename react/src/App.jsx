import "./index.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProduitsPage from "./components/ProduitsPage";
import CategoriePage from "./CategoriePage";
import DetailProduitsPage from "./components/DetailProduit";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProduitsPage />} />
          <Route path="/catégorie" element={<CategoriePage />} />
          <Route path="/Détail Produit" element={<DetailProduitsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
