import React from 'react';
import { animations } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Modulo } from './Modulo';

export function Turno({ turno }) {
  const [parent, modulos] = useDragAndDrop(turno.modulos, {
    dragHandle: '.cassette-handle',
    getId: (item) => `${turno.nombre}-${item.nroModulo}`, // ID único por turno
  });

  return (
    <div className="turno">
      <h4>{turno.nombre} ({turno.horaInicio} - {turno.horaFin})</h4>
      <ul ref={parent} className="fila-modulos">
        {modulos.map((modulo, k) => (
          <li key={k} className='cassette-item'>
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
