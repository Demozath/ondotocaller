import React, { useState } from 'react';

function RegistroLlamadas() {
  const [callerName, setCallerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [callDescription, setCallDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a donde necesites
    console.log('Llamada registrada:', { callerName, phoneNumber, callDescription });
    // Limpiar campos después de enviar
    setCallerName('');
    setPhoneNumber('');
    setCallDescription('');
  };

  return (
    <div>
      <h1>Registro de Llamadas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="callerName">Nombre de la persona que llama:</label>
          <input
            type="text"
            id="callerName"
            value={callerName}
            onChange={(e) => setCallerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Número de Teléfono:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="callDescription">Descripción de la Llamada:</label>
          <textarea
            id="callDescription"
            value={callDescription}
            onChange={(e) => setCallDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Registrar Llamada</button>
      </form>
    </div>
  );
}

export default RegistroLlamadas;
