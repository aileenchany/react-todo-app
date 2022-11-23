import ListItem from './ListItem';
import ActiveListItem from './ActiveListItem';

const TodoList = ({
  todos,
  setTodos,
  todo,
  setTodo,
  editTodo,
  deleteTodo,
  saveTodo,
  editText,
  setEditText,
}) => {
  const props = {
    todos: todos,
    setTodos: setTodos,
    todo: todo,
    setTodo: setTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo,
    saveTodo: saveTodo,
    editText: editText,
    setEditText: setEditText,
  };
  return (
    <ul className='TodoList'>
      {todos.map((todo) => {
        if (todo.isActive) {
          return (
            <ActiveListItem
              key={todo.id}
              id={todo.id}
              item={todo}
              setTodo={setTodo}
              {...props}
            />
          );
        } else {
          return <ListItem key={todo.id} id={todo.id} item={todo} {...props} />;
        }
      })}
    </ul>
  );
};

export default TodoList;
