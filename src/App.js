import React from "react";
import './App.css';
import SearchBar from './searchbar'; // Import the SearchBar component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

function App() {
  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;

