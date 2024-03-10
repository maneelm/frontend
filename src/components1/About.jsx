// About.jsx
import React from "react";
import ResponsiveAppBar from "./Navbar";
import "./About.css"; // Import CSS file for styling

function About() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our online bookstore!</p>
        <p>
          We are passionate about books and committed to providing our
          customers with a wide selection of books across various genres. Our
          goal is to create a seamless shopping experience where book lovers
          can easily find their favorite titles and discover new ones.
        </p>
        <p>
          Whether you're searching for bestsellers, classics, or niche reads,
          our bookstore has something for everyone. We pride ourselves on
          offering competitive prices, excellent customer service, and speedy
          delivery.
        </p>
        <p>
          Thank you for choosing us as your go-to destination for all your
          reading needs. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;
