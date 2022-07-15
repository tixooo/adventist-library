import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Footer from './components/footer/Footer.js';

function App() {
  return (
            <>
            <Navigationbar />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
            </>
  );
}

export default App;