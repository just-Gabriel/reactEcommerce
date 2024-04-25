import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "./Card";

// function ProduitsPage() {

const ProduitListe1 = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setProducts(response.data.results); // Mettre à jour le state avec les produits récupérés
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <p className="p">produits</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <ul>{product.title}</ul>
              <ul>{product.price}</ul>
              <img src={product.thumbnail} alt="imgProduit"></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
    /* <div className="flex">
        <div className="h2ListeProduit">
          <hy>{products}</hy>
          <hy>coucou</hy>
          <hy>coucou</hy>
          <hy>coucou</hy>
          <hy>coucou</hy>
          <hy>coucou</hy>
        </div>

        <Card />
        <Card />
        <Card />
      </div>
    </div> */
  );
};

export default ProduitListe1;
