import React from 'react';
import { animations } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Modulo } from './Modulo';
import './modulo.css'

export function DragDrop() {
  const modulos = [
    {
      id: 4,
      horaInicio: '15:20',
      horaFin: '16:00',
      recreo: false,
      materia: {
        nombre: 'M. Jurídico Act. Ind.',
        categoria: 'Aúlica',
      },
      profesor: {
        nombre: 'Guardatti',
      },
    },
    {
      id: 5,
      horaInicio: '16:00',
      horaFin: '16:40',
      recreo: false,
      materia: {
        nombre: 'Hig. y Seg. Laboral',
        categoria: 'Aúlica',
      },
      profesor: {
        nombre: 'Mateo',
      },
    },
  ];

  const [parent, tapes] = useDragAndDrop(modulos, {
    dragHandle: '.cassette-handle',
    getId: (item) => item.id, // 👈 clave única necesaria
  }, {
    plugins: [animations()],
  });

  return (
    <ul ref={parent}>
      {tapes.map((modulo) => (
        <li key={modulo.id} className='cassette-item'>
          <Modulo
            materia={modulo?.materia?.nombre || "Sin materia"}
            profesor={modulo?.profesor?.nombre || "Sin profesor"}
          />
        </li>
      ))}
    </ul>
  );
}
