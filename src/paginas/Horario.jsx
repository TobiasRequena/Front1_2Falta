import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Turno } from '../componentes/Turnos';
import '../estilos/modulo.css';

const Horario = () => {
  const location = useLocation();
  const datosIniciales = location.state?.datos;

  const [dias, setDias] = useState([]);

  useEffect(() => {
    if (datosIniciales) {
      setDias(datosIniciales.dias); // o lo que venga desde el backend
    }
  }, [datosIniciales]);

  const actualizarTurno = (diaIndex, turnoIndex, turnoActualizado) => {
    const nuevosDias = [...dias];
    nuevosDias[diaIndex].turnos[turnoIndex] = turnoActualizado;
    setDias(nuevosDias);
  };

  const guardarDatos = async () => {
    try {
      const response = await fetch('http://localhost:5000/guardar-turnos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dias),
      });

      const result = await response.json();
      console.log('✅ Respuesta del servidor:', result);
      alert('Datos guardados correctamente');
    } catch (error) {
      console.error('❌ Error al guardar:', error);
      alert('Error al guardar los datos');
    }
  };

  return (
    <div className="tabla-semanal">
      {dias.map((dia, i) => (
        <div key={i} className="dia">
          <h2>{dia.nombre}</h2>
          {dia.turnos.map((turno, j) => (
            <Turno
              key={j}
              turno={turno}
              onUpdate={(turnoActualizado) => actualizarTurno(i, j, turnoActualizado)}
            />
          ))}
        </div>
      ))}

      {datosIniciales && (
          <button onClick={guardarDatos} style={{ marginTop: '20px' }}>
          Guardar
        </button>
      )}
    </div>
  );
}

export default Horario;
