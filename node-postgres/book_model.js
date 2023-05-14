const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Library',
  password: 'root',
  port: 5432,
});

//getbooks
const getBooks = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM Books', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

//create a book
const createBook = (body) => {

  return new Promise(function(resolve, reject) {
    if (!body) {
      reject(new Error('Invalid argument: body is undefined'))
    }
    return new Promise(function(resolve, reject) {
      const { title, author, ISBN, genre, owner, borrower } = body;
      pool.query('INSERT INTO books (title, author, "ISBN", genre, owner, borrower) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, author, ISBN, genre, owner, borrower], (error, results) => {
        if (error) {
          reject(error);
        } else if (!results || !results.rows || results.rows.length === 0) {
          reject(new Error('Failed to insert book record'));
        } else {
          resolve(results.rows[0]);
        }
      });
    });
  })
}
  module.exports={getBooks,createBook}