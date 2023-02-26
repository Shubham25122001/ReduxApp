<<<<<<< HEAD
import './App.css';
import Navbar from './Navbar';
import Shop from './Shope';

function App() {
  return (
    <>
     <Navbar />
    <div className="container">
      <Shop/>
    </div>

    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> baf4d52f1b6cfbdbb8482a9e62936c902afe5cf3
  );
}

export default App;
