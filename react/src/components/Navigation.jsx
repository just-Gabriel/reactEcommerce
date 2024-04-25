import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <br />
          <li>
            <Link to="/produits">Produits</Link>
          </li>
          <br />
          <li>
            <Link to="/Détail Produit"> Détail Produits</Link>
          </li>
          <br />
          <li>
            <Link to="/catégorie">Catégorie</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
