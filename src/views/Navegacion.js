import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navegacion;
