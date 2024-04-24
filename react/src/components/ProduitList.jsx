import React, { useState, useEffect } from "react";
import axios from "axios";

const ProduitListe = () => {
  // Utiliser le state pour stocker les données récupérées de l'API
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Utiliser useEffect pour effectuer la requête API une fois le composant monté
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setProduits(response.data.results); // Mettre à jour le state avec les produits récupérés
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Appeler la fonction fetchData au chargement du composant
  }, []); // Le tableau vide [] indique que ce useEffect ne dépend d'aucune variable

  return (
    <div>
      {/* <h2>Liste des personnages</h2> */}
      <p>
        {loading && (
          <div className="span">
            {/* <h1 className="h1">CHARGEMENT...</h1> */}
            <p className="cligno">
              <span data-letter="C">C</span>
              <span data-letter="H">H</span>
              <span data-letter="A">A</span>
              <span data-letter="R">R</span>
              <span data-letter="G">G</span>
              <span data-letter="E">E</span>
              <span data-letter="M">M</span>
              <span data-letter="E">E</span>
              <span data-letter="N">N</span>
              <span data-letter="T">T</span>
            </p>
          </div>
        )}
      </p>

      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            <div className="maDiv">
              <ul>{produit.title}</ul>
              <ul>{produit.price}</ul>
              <img src={produit.images} alt="imgProduit"></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduitListe;
