import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import Layouts from './components/layouts/Layouts';
import FavouriteBooks from './pages/FavouriteBooks';

function App() {
  return (
    <div >
      <Layouts>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/add" element={<AddProduct />}></Route>
          <Route path="/product/favourites" element={<FavouriteBooks />}></Route>

        </Routes>
      </Layouts>



    </div>
  );
}

export default App;
