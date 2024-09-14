import React, { useState } from "react";
import countriesData from './countries.json';
import './searchbar.css'; // Import custom CSS for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = countriesData.filter(
      (item) =>
        item.country.toLowerCase().includes(value) ||
        item.capital.toLowerCase().includes(value)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <i className="fas fa-search search-icon"></i> {/* FontAwesome search icon */}
        <input
          type="text"
          placeholder="Search countries or capitals..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
      {searchTerm && filteredCountries.length > 0 && (
        <ul className="suggestions-list">
          {filteredCountries.map((item, index) => (
            <li key={index} className="suggestion-item">
              {item.country} - {item.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
