import React, { useEffect, useState } from 'react';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Modulo } from './Modulo';

export function Turno({ turno, onUpdate }) {
  const [turnoActualizado, setTurnoActualizado] = useState(turno);

  const [parent, modulos] = useDragAndDrop(turnoActualizado.modulos, {
    dragHandle: '.cassette-handle',
    getId: (item) => `${turno.nombre}-${item.nroModulo}`,
    group: 'turnos',
    accepts: () => modulos.length < 12,
  });

  useEffect(() => {
    const nuevosModulos = modulos.map((modulo, index) => ({
      ...modulo,
      nroModulo: index + 1,
    }));

    const nuevoTurno = {
      ...turnoActualizado,
      modulos: nuevosModulos,
    };

    setTurnoActualizado(nuevoTurno);

    if (onUpdate) {
      onUpdate(nuevoTurno);
    }
  }, [modulos]);

  return (
    <div className="turno">
      <h4>
        {turnoActualizado.nombre} ({turnoActualizado.horaInicio} - {turnoActualizado.horaFin})
      </h4>
      <ul ref={parent} className="fila-modulos">
        {turnoActualizado.modulos.map((modulo, k) => (
          <li key={k} className="cassette-item">
            <Modulo
              materia={modulo?.materia?.nombre || "Sin materia"}
              profesor={modulo?.profesor?.nombre || "Sin profesor"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
