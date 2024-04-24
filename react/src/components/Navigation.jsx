import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="maDiv">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <br />
          <li>
            <Link to="/produits">Produits</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
