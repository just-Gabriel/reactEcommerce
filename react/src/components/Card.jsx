function Card({ product = {} }) {
  return (
    <div className="Card">
      <img className="Card2" src={product.thumbnail} alt="imgProduit" />

      <p>{product.brand}</p>
      <br />
      <h2>{product.title}</h2>
      <br />
      <h2>{product.description}</h2>

      <p className="p2">{product.price}$</p>
    </div>
  );
}

export default Card;
