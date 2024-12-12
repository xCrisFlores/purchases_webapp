import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Purchases_form } from "./pages/purchasesForm"; 
import { Edit_purchase } from "./pages/editPurchase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />      
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/purchasesForm" element={<Purchases_form />} /> 
        <Route path="/editPurchase" element={<Edit_purchase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
