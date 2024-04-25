import "./index.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Produits from "./components/ProduitsList1";
import CategoriePage from "./CategoriePage";
import DetailProduitsPage from "./components/DetailProduit";
import ProduitListe1 from "./components/ProduitsList1";
// import ProduitListe from "./components/ProduitList";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produits" element={<ProduitListe1 />} />
          <Route path="/catégorie" element={<CategoriePage />} />
          <Route path="/Détail Produit" element={<DetailProduitsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
