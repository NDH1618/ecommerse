import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import ProductPage from './pages/ProductPage/productPage.js';
import ProducPage from './pages/VTI.PRODUCT/productpage/productpage'
import Admin from './pages/VTI.ADMIN/admin'

function App() {
  return (
    <div className="App">

      <nav>
        <div className='rounter_link'>
          <div>
            <NavLink to='/'>Trang TMDT</NavLink>
          </div>
          <div className='router-menu'>
            <NavLink to='/news'>LOGIN</NavLink>
            <NavLink to='/contact'>ADMIN</NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/news' element={<Admin />} />
        <Route path='/contact' element={<ProducPage />} />
      </Routes>



    </div>
  );
}

export default App;
