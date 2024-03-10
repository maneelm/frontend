import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./Navbar";
import "../components1/Books1.css";

function Books1() {
  const [cart, setCart] = useState([]); // State to manage cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to manage total price

  // Function to add a book to the cart
  const addToCart = (book) => {
    setCart([...cart, book]);
    setTotalPrice(totalPrice + book.price);
  };
  const buyNow = (book) => {
    setCart([...cart, book]);
    setTotalPrice(totalPrice + book.price);
    // Here you can add logic to navigate to a checkout page or perform other actions related to buying
  };

  // Book data with prices
  const books = [
    {
      id: 1,
      title: "Wings of Fire",
      imageUrl: require("../assests/bgbook14.jpg"),
      description: "This is the description of Wings of Fire.",
      price: 200, // Example price for book 1
    },
    {
      id: 2,
      title: "A Song of Fire and Ice",
      imageUrl: require("../assests/bgbook8.jpg"),
      description: "This is the description of A Song of Fire and Ice.",
      price: 125, // Example price for book 2
    },
    {
      id: 3,
      title: "The Lord of Rings",
      imageUrl: require("../assests/bgbook17.jpg"),
      description: "This is the description of The Lord of Rings.",
      price: 100, // Example price for book 3
    },
    {
      id:4,
      title:"Girl Lost In The Story Book",
      imageUrl:require("../assests/bgbook20.jpg"),
      description:"Story Book",
      price:90,
    },
    
    {
      id:6,
      title:"The Lost World",
      imageUrl:require("../assests/bgbook22.jpg"),
      description:"Fictional",
      price:150,
    },
    {
      id:7,
      title:"Thrilling Adventures",
      imageUrl:require("../assests/bgbook23.jpg"),
      description:"Fictional",
      price:100,
    },
    
  ];

  return (
    <div>
      <ResponsiveAppBar />
      <div className="banner">
        <div className="books-container">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <Link to={'/bookpro'}>
                <img
                  src={book.imageUrl}
                  alt={`Book Cover ${book.id}`}
                  className="book-cover"
                />
              </Link>
              <div className="book-info">
                <Link to={`/book${book.id}`} className="book-title">
                  <strong>{book.title}</strong>
                </Link>
                <div className="book-price"><strong color="red">Price: Rs{book.price}</strong></div>
                <button onClick={() => addToCart(book)}>Add to Cart</button>
                <button onClick={() => buyNow(book)}>BUY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Display cart items and total price */}
      <div className="cart-container">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title} - Rs{item.price}</li>
          ))}
        </ul>
        <p>Total Price: Rs{totalPrice}</p>
      </div>
    </div>
  );
}

export default Books1;
