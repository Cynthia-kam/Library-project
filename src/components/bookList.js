import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import './bookList.css';

const endpoint='http://localhost:3001/books'

function BooksList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data.data);
      setBooks(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Layout>
      <h2>All Books</h2>
      <div className="book-container">
        {books.length > 0 ? (
          <ul>
            {books.map(book => (
             
              <li className="book-card" key={book.id}>
                <div className="book-details">
                <p>{book.title}</p>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>ISBN: {book.ISBN}</p>
                <p>Owner: {book.ownerId}</p>
               </div>
                <div className="button-group">
                  <button className="update-button">Update</button>
                  <button className="delete-button">Delete</button>
                </div>
                <div className="book-image">
                <img src="https://wp.penguin.co.uk/wp-content/uploads/2021/12/Penguin20-20Designers20on20the20design20trends20of20the20year20-20Inline20Colour.jpg" alt="Book cover" />
              </div>
              </li>
              
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

export default BooksList;