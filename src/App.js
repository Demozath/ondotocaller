import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiado Switch por Routes
import RegistroUsuarios from './views/Registro';
import Login from './views/Login';
import './styles/style.css'

import RegistroLlamadas from './views/RegistroLlamadas';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/registro" element={<RegistroUsuarios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrollamadas" element={<RegistroLlamadas />} />
      </Routes>
    </Router>
  );
}

export default App;
