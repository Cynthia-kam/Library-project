import React from 'react';
import './Layout.css';
import BookList from './bookList';
import { Link } from 'react-router-dom';

function Layout(props) {
  return (
    <div className="layout-container">
      <div className="navbar">
        <h3>Library App</h3>
      </div>
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <Link to="/booklist"><li>All Books</li></Link>
          <Link to="/"><li>Add Book</li></Link>
        </ul>
      </div>
      <div className="main-content">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;