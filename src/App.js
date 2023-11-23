import logo from './logo.svg';
import './App.css';

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from './components/sections/Products';
import MiniDrawer from './components/dashboard/mini-drawer';
import SupplyChain from './components/sections/SupplyChain/SupplyChain';

function App() {
  return (
    <BrowserRouter>
    <MiniDrawer>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/supply-chain" element={<SupplyChain />}/>
      </Routes>
    </MiniDrawer>
  </BrowserRouter>
  );
}

export default App;
