const ActiveListItem = (
  item,
  id,
  index,
  saveTodo,
  todos,
  setTodos,
  todo,
  setTodo
) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    saveTodo(id);
  };
  return (
    <li className='ListItem' id={id}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo.value || ''}
          // onChange={(e) => setTodo(e.target.value)}
          minLength={1}
          maxLength={25}
        />
        <button type='submit' className='save-button'>
          Save
        </button>
      </form>
    </li>
  );
};

export default ActiveListItem;
