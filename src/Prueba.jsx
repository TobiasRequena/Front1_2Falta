import React from 'react';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';

export function Prueba() {
  const todoItems = [
    'Schedule perm',
    'Rewind VHS tapes',
    'Make change for the arcade',
    'Get disposable camera developed',
    'Learn C++',
    'Return Nintendo Power Glove'
  ];
  const doneItems = ['Pickup new mix-tape from Beth'];

  const [todoList, todos] = useDragAndDrop(todoItems, { group: 'algoList' });
  const [doneList, dones] = useDragAndDrop(doneItems, { group: 'algoList' });
  return (
    <div className='kanban-board'>
      <ul ref={todoList}>
        {todos.map((todo) => (
          <li className='kanban-item' key={todo}>
            {todo}
          </li>
        ))}
      </ul>
      <ul ref={doneList}>
        {dones.map((done) => (
          <li className='kanban-item' key={done}>
            {done}
          </li>
        ))}
      </ul>
      {console.log('todoList', todos)}
      {console.log('doneList', dones)}
    </div>
  );
}
