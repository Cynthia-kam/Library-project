
import './App.css';
import AddBook from './components/AddBook';
import BooksList from './components/bookList';

function App() {
  return (
    <div className="App">
      <BooksList></BooksList>
      <AddBook></AddBook>
    </div>
  );
  }


export default App;

