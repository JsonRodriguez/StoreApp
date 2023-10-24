import './App.css'
import 'animate.css';
import { Home } from './pages/home'
import { NotFoundPage } from './pages/noPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Product } from './pages/products/Product';
import { Shop } from './pages/shop/Shop';
import useLocalStorage from 'use-local-storage';
import { Footer, Navbar } from './components';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  return (
    <div className="main" data-theme={ theme }>
      <Navbar theme={ theme } setTheme={ setTheme } />
      <Routes>
        <Route path="inicio" element={ <Home setTheme={ setTheme } /> } />
        <Route path="" element={ <Home setTheme={ setTheme } /> } />
        <Route path="producto/:id" element={ <Product setTheme={ setTheme } /> } />
        <Route path="shop" element={ <Shop setTheme={ setTheme } /> } />
        <Route path="notfound" element={ <NotFoundPage setTheme={ setTheme } /> } />

        <Route path="/*" element={ <NotFoundPage setTheme={ setTheme } /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
