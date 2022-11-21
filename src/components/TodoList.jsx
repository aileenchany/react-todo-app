import ListItem from './ListItem';

const TodoList = ({
  todos,
  setTodos,
  newTodo,
  setNewTodo,
  editTodo,
  deleteTodo,
  saveTodo,
}) => {
  return (
    <ul className='TodoList'>
      {todos &&
        todos.map((todo, index) => {
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              saveTodo={saveTodo}
            />
          );
        })}
    </ul>
  );
};

export default TodoList;
