import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Working from './components/Working';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <h1 className='text-white text-4xl pt-16'>Features</h1>
      <Features/>
      <h1 className='text-white text-4xl pt-5'>How it works</h1>
      <Working/>
      <h1 className='text-white text-4xl pt-5'>Contact</h1>
      <Contact/>
    </div>
  );
}

export default App;
