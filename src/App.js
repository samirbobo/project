import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import DetailsProduct from './components/Details-product';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:DetailsId" element={<DetailsProduct />} />
        <Route path='Products' element={<Products />} />
        <Route path='Products/Details/:DetailsId' element={<DetailsProduct />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
