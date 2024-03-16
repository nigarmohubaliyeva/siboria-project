import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./styles/main.scss";
import SearchBar from "./components/SearchBar";
import Newsletter from "./components/Newsletter";
import BuyersFeedback from "./components/BuyersFeedback";
import Categories from "./components/Categories";
import RecentlyAdded from "./components/RecentlyAdded";

function App() {
  return (
    <div className="app">
      <Header />
      <Product />
      <SearchBar />
      <RecentlyAdded />
      <Categories />
      <BuyersFeedback />
      <Newsletter />

      <Footer />
    </div>
  );
}

export default App;
