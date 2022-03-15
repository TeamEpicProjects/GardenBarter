import './App.css';
import Login from '../src/components/Login/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import NearbyCard from './components/Nearby/NearbyCard';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
