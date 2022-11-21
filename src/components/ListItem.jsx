// import { useState } from 'react';

const ListItem = ({
  todo,
  id,
  deleteTodo,
  editTodo,
  saveTodo,
  newTodo,
  setNewTodo,
}) => {
  if (todo.isActive) {
    return (
      <li className='ListItem' id={id}>
        <form onSubmit={() => saveTodo(id)}>
          <input
            defaultValue={newTodo.Value}
            onChange={(e) => setNewTodo({ ...newTodo, value: e.target.value })}
            minLength={1}
            maxLength={25}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </li>
    );
  } else {
    return (
      <li className='ListItem' id={id}>
        {todo.value}
        <button
          type='submit'
          className='edit-button'
          onChange={editTodo}
        ></button>
        <button
          type='submit'
          className='delete-button'
          onChange={deleteTodo}
        ></button>
      </li>
    );
  }
};

export default ListItem;
