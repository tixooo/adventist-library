import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/home/Home.js'
import Navigationbar from './components/Navigationbar';
import Footer from './components/footer/Footer.js';

// import Test from './db/test.js'

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