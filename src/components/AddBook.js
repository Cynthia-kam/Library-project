import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'
import Layout from './Layout';

function AddBook() {
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [Genre, setGenre] = useState('');
  const [Isbn, setIsbn] = useState('');
  const [Owner, setOwner] = useState('');
  const [Borrower, setBorrower] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: Title,
      author: Author,
      genre: Genre,
      isbn: Isbn,
      owner: Owner,
      borrower: Borrower,
    };
    setLoading(true);
    axios.post('http://localhost:3001/books', newBook)
      .then(res => {
        // console.log(res);
        setSuccessMessage(res.data.message);
        setTitle('');
        setAuthor('');
        setGenre('');
        setIsbn('');
        setOwner('');
        setBorrower('');
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.status === 400 && err.response.data && Array.isArray(err.response.data.error)) {
          setError(err.response.data.error);}
        else if(err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred. Please try again later.');
        }})
        .finally(() => {
          setLoading(false); 
        });
  };

  return (
    <Layout>
    <>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={Title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={Author} onChange={event => setAuthor(event.target.value)} />
        </label>
        <label>
          Genre:
          <input type="text" value={Genre} onChange={event => setGenre(event.target.value)} />
        </label>
        <label>
          ISBN:
          <input type="text" value={Isbn} onChange={event => setIsbn(event.target.value)} />
        </label>
        <label>
          Owner:
          <input type="text" value={Owner} onChange={event => setOwner(event.target.value)} />
        </label>
        <label>
          Borrower:
          <input type="text" value={Borrower} onChange={event => setBorrower(event.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">{loading ? 'Adding...' : 'Add'}</button>
        
      </form>
    </>
    </Layout>
  );
}

export default AddBook;