/* eslint-disable react/no-unescaped-entities */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import logo from './components/icons/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <div className="alert alert-primary" role="alert">
          <p style={{ display: 'none' }} className="d-block">
            Bootstrap is now successfully installed 😃
          </p>
          <p style={{ display: 'none' }} className="d-block">
            That's so cool
          </p>
          <p className="d-none">Bootstrap is not installed if you can see this 😢</p>
        </div>
      </div>
    </div>
  );
}

export default App;
