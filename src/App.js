import logo from './logo.svg';
import './App.css';

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from './components/sections/Products/Products';
import MiniDrawer from './components/dashboard/mini-drawer';
import SupplyChain from './components/sections/SupplyChain/SupplyChain';
import ResponsiveSubDrawer from './components/dashboard/ResponsiveSubDrawer';
import Login from './screens/Login';
import AuthLayout from './screens/AuthLayout';
import Inventory from './components/sections/SupplyChain/Inventory/Inventory';
import Suppliers from './components/sections/SupplyChain/Suppliers/Suppliers';
import DepartmentRequests from './components/sections/DepartmentRequests/DepartmentRequests';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>}/>
          <Route path="/overview" element={<MiniDrawer><SupplyChain /></MiniDrawer>}/>
          <Route path="/products" element={<MiniDrawer><Products /></MiniDrawer>} />
          <Route path="/supply-chain" element={<MiniDrawer><SupplyChain /></MiniDrawer>}/>
          <Route path="/inventory" element={<MiniDrawer><Inventory /></MiniDrawer>}/>
          <Route path="/suppliers" element={<MiniDrawer><Suppliers /></MiniDrawer>}/>
          <Route path="/department-requests" element={<MiniDrawer><DepartmentRequests /></MiniDrawer>}/>
      </Routes>
   {/*  </MiniDrawer> */}
  </BrowserRouter>
  );
}

export default App;
