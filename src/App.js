import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiado Switch por Routes
import RegistroUsuarios from './views/Registro';
import Login from './views/Login';
import Navegacion from './views/Navegacion';

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes> {/* Cambiado Switch por Routes */}
        <Route path="/registro" element={<RegistroUsuarios />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
