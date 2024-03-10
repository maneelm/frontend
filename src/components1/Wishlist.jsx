// Wishlist.jsx
import React from "react";
import ResponsiveAppBar from "./Navbar";

function Wishlist({ cart }) {
  // Check if cart is undefined or null
  if (!cart || cart.length === 0) {
    return (
      <div>
        <ResponsiveAppBar />
        <div>No items in the cart</div>
      </div>
    );
  }

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <ResponsiveAppBar />
      {/* Render cart items */}
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div>Total Amount: {totalAmount}</div>
    </div>
  );
}

export default Wishlist;
