import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import TodoList from '../components/TodoList';

/*
When the component mounts first time
-get todos from localStorage and store them in a variable
-check if variable is truthy, then parse the todos & set the state
const storedTodos = localStorage.getItem('savedTodos');
if(storedTodos) {
  const savedTodos = JSON.parse(storedTodos);
  SetTodos([...todos, ...savedTodos]);
}

*/

const List = () => {
  const allTodos = [];
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({});
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  //display todos when component mounts
  useEffect(() => {
    //check if there are todos in localstorage
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log('setting a new todo');
    const todo = {
      isActive: true,
      value: '',
      id: new Date().toLocaleString(),
    };

    setTodos([...todos, todo]);
    setNewTodo({ ...newTodo, ...todo });
  };

  const saveTodo = (e, id) => {
    e.preventDefault();
    console.log('the id: ', id);

    // e.preventDefault();
    // console.log('saving the todo in todos', e.target.id, e.target.value);
    // const id = e.target.id;
    // const text = e.target.value;
    // const item = todos.filter((todo) => todo.id === id)[0];
    // item.value = text;
    // item.isNew = false;
    //changes state isNew to false, so it can show edit and delete buttons
    //adds an id & adds the todo to the todos list
    // setTodo({ ...todo, isNew: false, id: e.target.id });
    // setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    console.log('delete the todo', id);
    //filter all todos that are NOT matching the id
    //EX: todos.filter(!id);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const editTodo = (id) => {
    console.log('edit the todo', id);
    //takes the id so we can filter the one we want to edit
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className='ListPage'>
      <button id='logout-button' onClick={logout}>
        Logout
      </button>
      <h1>My To-Do List</h1>
      <div className='todo-list-wrapper'>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          saveTodo={saveTodo}
        />
      </div>
    </div>
  );
};

export default List;
