import React, { useState } from 'react';
import db from '../firebase.js';
import { collection } from 'firebase/firestore';

function RegistroUsuarios() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [rut, setRut] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
  
    const crearUsuario = () => {
      db.collection('usuarios').add({
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        celular: celular,
      });
    }

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>RUT:</label>
          <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </div>
        <button type="button" onClick={crearUsuario}>Crear Usuario</button>
      </form>
    </div>
  );
}

export default RegistroUsuarios;