// BookDetails.jsx
import React from "react";

function BookDetails({ bookId }) {
  // Dummy book data with descriptions
  const books = [
    {
      id: 1,
      title: "Wings of Fire",
      description: "This is the description of Wings of Fire.",
    },
    {
      id: 2,
      title: "A Song of Fire and Ice",
      description: "This is the description of A Song of Fire and Ice.",
    },
    {
      id: 3,
      title: "The Lord of Rings",
      description: "This is the description of The Lord of Rings.",
    },
  ];

  // Find the book corresponding to the given bookId
  const book = books.find((book) => book.id === parseInt(bookId));

  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetails;
