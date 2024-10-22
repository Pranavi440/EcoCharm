import React, { useState } from 'react';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import data_product from '../Components/Assets/data'; // Import your product data

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(data_product); // Initialize state with all products

  // Filter products based on search input
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredProducts = data_product.filter(product =>
      product.name.toLowerCase().includes(term)
    );
    setSearchResults(filteredProducts);
  };

  // Limit the displayed products to 10
  const limitedProducts = searchResults.slice(0, 10);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input" // You can style this class in your CSS
      />
      <Popular products={limitedProducts} /> {/* Pass the limited products */}
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
