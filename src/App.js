import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const fetchProductsByCollection = async (collection) => {
    try {
      const response = await axios.get(`https://vercel-web-psi.vercel.app/${collection}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products by collection:', error);
    }
  };

  const searchProducts = async (query) => {
    try {
      const response = await axios.get(`https://vercel-web-psi.vercel.app/products/search?q=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };




  // const fetchProductsByCollection = async (collection) => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${collection}`);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products by collection:', error);
  //   }
  // };
  
  // const searchProducts = async (query) => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/search?q=${query}`);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error searching products:', error);
  //   }
  // };




  const handleSearch = (event) => {
    event.preventDefault();
    searchProducts(query);
  };

  return (
    <div className="App">
      <nav>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search for products..."
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={() => fetchProductsByCollection('men')}>Men</button>
        <button onClick={() => fetchProductsByCollection('shirts')}>Shirts</button>
        <button onClick={() => fetchProductsByCollection('women')}>Women</button>
      </nav>
      <div className="products">
        {products.map(product => (
          <div key={product._id} className="product">
            <img src={product.image} alt={product.details} />
            <p>{product.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
