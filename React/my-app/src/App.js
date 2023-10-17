import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import MainMenu from './components/layouts/MainMenu';

function App() {  
  return (
    <div >
      <MainMenu/>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
     
      
      
      
    </div>
  );
}

export default App;
