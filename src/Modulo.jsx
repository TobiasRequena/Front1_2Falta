import React from 'react';
import { HolderOutlined } from '@ant-design/icons';
import './modulo.css';

export const Modulo = ({ materia, profesor }) => {
  return (
    <div className='modulo'>
      <span
        className='cassette-handle'
        style={{ cursor: 'grab' }}
      >
        <HolderOutlined/>
      </span>
      <div className='materia'>
        <p> {materia} </p>
      </div>
      <div className='profesor'>
        <p> {profesor} </p>
      </div>
    </div>
  );
};
