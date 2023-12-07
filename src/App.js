import logo from './logo.svg';
import './App.css';

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from './components/sections/Products/Products';
import MiniDrawer from './components/dashboard/mini-drawer';
import SupplyChain from './components/sections/SupplyChain/SupplyChain';
import ResponsiveSubDrawer from './components/dashboard/ResponsiveSubDrawer';
import Login from './screens/Login';
import AuthLayout from './screens/AuthLayout';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>}/>
          <Route path="/products" element={<MiniDrawer><Products /></MiniDrawer>} />
          <Route path="/supply-chain" element={<MiniDrawer><SupplyChain /></MiniDrawer>}/>
      </Routes>
   {/*  </MiniDrawer> */}
  </BrowserRouter>
  );
}

export default App;
