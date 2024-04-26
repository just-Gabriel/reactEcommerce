import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CategorieListe from "./CategorieListe";

const ProduitListe1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <p>
        {loading && (
          <div className="span">
            <p className="cligno">
              <span data-letter="A">A</span>
              <span data-letter="C">C</span>
              <span data-letter="H">H</span>
              <span data-letter="E">E</span>
              <span data-letter="T">T</span>
              <span data-letter="E">E</span>
            </p>
          </div>
        )}
      </p>

      {products.map((product) => (
        <Card product={product} />
      ))}
      <div className="container">
        <CategorieListe />
      </div>
    </div>
  );
};

export default ProduitListe1;
