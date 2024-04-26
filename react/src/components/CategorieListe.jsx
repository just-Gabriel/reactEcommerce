import React, { useState, useEffect } from "react";
import axios from "axios";

const CategorieListe = () => {
  const [Cathegories, setCathegories] = useState([]);
  useEffect(() => {
    console.log(Cathegories);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );

        console.log(response.data);
        setCathegories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {Cathegories.map((Cathegorie) => (
        <hy>{Cathegorie}</hy>
      ))}
    </div>
  );
};
export default CategorieListe;
