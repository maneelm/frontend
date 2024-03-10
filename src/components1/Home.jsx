// Home.js
import React from "react";
import ResponsiveAppBar from "./Navbar";
import backgroundImage from "../assests/bookstoremern.jpg"; // Import your background image

function Home(){

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain", // Adjusted to contain to fit the image without stretching
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the background image
        height: "100vh", // Adjust height as needed
        width: "100vw", // Adjust width as needed
        // You can add more styles as needed
    };
    
    return(
        <div style={backgroundStyle}>
            <ResponsiveAppBar/>
            {/* Content of your home component */}
        </div>
    )
}

export default Home;
