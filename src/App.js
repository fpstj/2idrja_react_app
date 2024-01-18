/* eslint-disable react/no-unescaped-entities */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/ui/Navbar';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
