import './App.css';
import Login from '../src/components/Login/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
