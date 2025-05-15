import React from 'react';
import data from './assets/data.json';
import { Turno } from './Turnos';
import './modulo.css';

export function DragDrop() {
  return (
    <div className="tabla-semanal">
      {data.dias.map((dia, i) => (
        <div key={i} className="dia">
          <h2>{dia.nombre}</h2>

          {dia.turnos.map((turno, j) => (
            <Turno key={j} turno={turno} />
          ))}
        </div>
      ))}
    </div>
  );
}
