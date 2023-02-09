 import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import { CartContextProvider } from './context/useCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<App />} />
              <Route path="/product/details/:id" element={<App />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
