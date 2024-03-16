import "../styles/SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        {/* Location */}
        <div className="search-option">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location">
            <option value="norway">Norway</option>
            <option value="country1">Country 1</option>
            <option value="country2">Country 2</option>
            <option value="country3">Country 3</option>
          </select>
        </div>

        {/* Religion */}
        <div className="search-option">
          <label htmlFor="religion">Religion:</label>
          <select id="religion" name="religion">
            <option value="asatro">Asatro</option>
            <option value="country1">Religion 1</option>
            <option value="country2">Religion 2</option>
            <option value="country3">Religion 3</option>
          </select>
        </div>

        {/* Year */}
        <div className="search-option">
          <label htmlFor="year">Year:</label>
          <select id="year" name="year">
            <option value="793AD">793 AD</option>
            <option value="793AD">Year 1</option>
            <option value="793AD">Year 2</option>
            <option value="793AD">Year 3</option>
          </select>
        </div>

        {/* Type */}
        <div className="search-option">
          <label htmlFor="type">Type:</label>
          <select id="type" name="type">
            <option value="weapons">Weapons</option>
            <option value="793AD">Type 1</option>
            <option value="793AD">Type 2</option>
            <option value="793AD">Type 3</option>
          </select>
        </div>
        <button className="search-btn">
          <img src="/images/search-normal.png" alt="search-icon" />
          <span> Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
