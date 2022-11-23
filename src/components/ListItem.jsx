// import { useState } from 'react';

const ListItem = ({
  item,
  id,
  todos,
  setTodos,
  deleteTodo,
  editTodo,
  saveTodo,
  newTodo,
  setNewTodo,
}) => {
  return (
    <li className='ListItem' id={id}>
      {item.value}
      <div>
        <button
          type='submit'
          className='edit-button'
          onClick={(e) => editTodo(item.id)}
        ></button>
        <button
          type='submit'
          className='delete-button'
          onClick={() => deleteTodo(item.id)}
        ></button>
      </div>
    </li>
  );
};

export default ListItem;
