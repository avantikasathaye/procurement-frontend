import logo from './logo.svg';
import './App.css';

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from './components/sections/Products/Products';
import MiniDrawer from './components/dashboard/mini-drawer';
import SupplyChain from './components/sections/SupplyChain/SupplyChain';
import ResponsiveSubDrawer from './components/dashboard/ResponsiveSubDrawer';
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
    <MiniDrawer>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/supply-chain" element={<SupplyChain />}/>
      </Routes>
    </MiniDrawer>
  </BrowserRouter>
  );
}

export default App;
