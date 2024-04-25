import Card from "./components/Card";

function CategoriePage() {
  return (
    <div className="container">
      <p className="p"> catégories</p>
      <div className="flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default CategoriePage;
