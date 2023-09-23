import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase.js';
import { getAuth } from 'firebase/auth';

function RegistroLlamadas() {
  const [usuario, setUsuario] = useState(null);
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    // Configurar la fecha al cargar el componente
    const fechaActual = new Date().toLocaleDateString();
    setFecha(fechaActual);

    // Obtén el usuario autenticado
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      // Aquí asumo que tienes una colección de usuarios y el id del documento
      // del usuario en Firestore es el mismo que el uid del usuario autenticado.
      const obtenerUsuario = async () => {
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        } else {
          console.log('No such document!');
        }
      };
      
      obtenerUsuario();
    }
  }, []);
  
  const registrarLlamada = async (tipo) => {
    // Aquí viene el código para registrar la llamada
    // igual como en el ejemplo anterior.
  };
  
  if (!usuario) return <div>Cargando...</div>;

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '300px' }}>
      <h2>{usuario.nombre}</h2>
      <p>{fecha}</p>
      <button onClick={() => registrarLlamada('No responde llamado')}>No responde llamado</button>
      <button onClick={() => registrarLlamada('Paciente llama de vuelta')}>Paciente llama de vuelta</button>
    </div>
  );
}

export default RegistroLlamadas;
