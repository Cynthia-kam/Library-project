import './bookList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
     axios.get('http://localhost:3001/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {books.length > 0 ? (
        <div class="book-card"><ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>ISBN: {book.ISBN}</p>
              <p>Owner: {book.owner}</p>
              <p>Borrower: {book.borrower}</p>
            </li>
          ))}
        </ul></div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BooksList;