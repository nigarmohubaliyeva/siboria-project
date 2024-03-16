import "../styles/Header.scss";
import { useState } from "react";
const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <header className="header">
      <div className="logo">
        Siboria<span className="highlight">.</span>
      </div>
      <nav className="nav">
        <ul>
          <li
            className={selectedCategory === "Home" ? "selected" : ""}
            onClick={() => handleCategoryChange("Home")}
          >
            Home
          </li>
          <li
            className={selectedCategory === "Collections" ? "selected" : ""}
            onClick={() => handleCategoryChange("Collections")}
          >
            Collections
          </li>
          <li
            className={selectedCategory === "HowWeCollect" ? "selected" : ""}
            onClick={() => handleCategoryChange("HowWeCollect")}
          >
            How We Collect
          </li>
          <li
            className={selectedCategory === "SellAndAntique" ? "selected" : ""}
            onClick={() => handleCategoryChange("SellAndAntique")}
          >
            Sell and Antique
          </li>
          <li
            className={selectedCategory === "Blog" ? "selected" : ""}
            onClick={() => handleCategoryChange("Blog")}
          >
            Blog
          </li>
        </ul>
      </nav>
      <button className="collections-btn">Our Collections</button>
    </header>
  );
};

export default Header;
