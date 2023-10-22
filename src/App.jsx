import './App.css'
import 'animate.css';
import { Home } from './pages/home'
import { NotFoundPage } from './pages/noPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Product } from './pages/products/Product';
import { Shop } from './pages/shop/Shop';

function App() {
  return (
    <Routes>
      <Route path="inicio" element={ <Home /> } />
      <Route path="" element={ <Home /> } />
      <Route path="producto/:id" element={ <Product /> } />
      <Route path="shop" element={ <Shop /> } />
      <Route path="notfound" element={ <NotFoundPage /> } />

      <Route path="/*" element={ <NotFoundPage /> } />
    </Routes>
  )
}

export default App
