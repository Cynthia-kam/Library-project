
import './App.css';
import AddBook from './components/AddBook';
import BooksList from './components/bookList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import AddUser from './components/Register';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
   <Routes>
   <Route path='booklist' element={<BooksList/>}></Route>
   <Route path='register' element={<AddUser/>}></Route>
   <Route path='login' element={<Login/>}></Route>
   <Route index element={<AddBook/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
  }


export default App;

