import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [owner, setOwner] = useState('');
  const [borrower, setBorrower] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: title,
      author: author,
      genre: genre,
      isbn: isbn,
      owner: owner,
      borrower: borrower,
    };
    axios.post('http://localhost:3001/books', newBook)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
        </label>
        <label>
          Genre:
          <input type="text" value={genre} onChange={event => setGenre(event.target.value)} />
        </label>
        <label>
          ISBN:
          <input type="text" value={isbn} onChange={event => setIsbn(event.target.value)} />
        </label>
        <label>
          Owner:
          <input type="text" value={owner} onChange={event => setOwner(event.target.value)} />
        </label>
        <label>
          Borrower:
          <input type="text" value={borrower} onChange={event => setBorrower(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddBook;