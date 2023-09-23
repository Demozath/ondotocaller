import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/otra-vista">Otra Vista</Link></li>
      </ul>
    </nav>
  );
}

export default Navegacion;
