import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import db from '../firebase.js';

function RegistroUsuarios() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');

  const crearUsuario = async (e) => {
    e.preventDefault(); // Prevenir la recarga de la página
    
    // Validación de los campos
    if (!nombre || !apellido || !rut || !fechaNacimiento || !correo || !celular) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    
    // Instancia de Auth de Firebase
    const auth = getAuth();
    
    try {
      // Crear el usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, correo, 'contraseña_segura');
      const user = userCredential.user;
      
      // Crear el usuario en Firestore
      const docRef = await addDoc(collection(db, 'usuarios'), {
        uid: user.uid,
        nombre,
        apellido,
        rut,
        fechaNacimiento,
        correo,
        celular,
      });

      // Enviar correo de restablecimiento de contraseña
      await sendPasswordResetEmail(auth, correo);
      
      // Notificación al usuario y reseteo de los campos
      alert('Usuario creado con ID: ' + docRef.id + '. Por favor revisa tu correo electrónico para establecer tu contraseña.');
      setNombre('');
      setApellido('');
      setRut('');
      setFechaNacimiento('');
      setCorreo('');
      setCelular('');
      
    } catch (e) {
      // Manejo de errores
      console.error('Error al crear el usuario: ', e);
      alert('Error al crear el usuario, por favor intente nuevamente.');
    }
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={crearUsuario}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div>
          <label>RUT:</label>
          <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </div>
        <div>
          <label>Celular:</label>
          <input type="tel" value={celular} onChange={(e) => setCelular(e.target.value)} required />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}

export default RegistroUsuarios;
