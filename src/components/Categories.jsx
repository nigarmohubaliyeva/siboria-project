import "../styles/Categories.scss";

const Categories = () => {
  const topCategories = [
    { name: "Skull", stock: 120, type: "Worefall" },
    { name: "Furniture", stock: 80, type: "Worefall" },
    { name: "Statue", stock: 200, type: "Worefall" },
    { name: "Skull", stock: 150, type: "Worefall" },
    { name: "Furniture", stock: 20, type: "Worefall" },
    { name: "Keep", stock: 89, type: "Worefall" },
  ];
  return (
    <div className="top-categories-container">
      <div className="top-categories-header">
        <h1>Top Categories</h1>
        <p>Explore our top categories and find what you need</p>
      </div>
      <div className="top-categories-cards">
        {topCategories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-info">
              <h2>{category.name}</h2>
              <h3>{category.type}</h3>
            </div>
            <div className="stock-badge">{category.stock}</div>
            <img
              src={`/images/${category.name.toLowerCase()}.png`}
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
