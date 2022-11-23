import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import TodoList from '../components/TodoList';

const sampleTodos = [
  {
    isActive: false,
    value: 'Workout',
    id: new Date().toLocaleString(),
  },
  // {
  //   isActive: false,
  //   value: 'Pay bills',
  //   id: new Date().toLocaleString(),
  // },
  // {
  //   isActive: false,
  //   value: 'Get lunch',
  //   id: new Date().toLocaleString(),
  // },
];

const List = () => {
  //main state
  const [todos, setTodos] = useState(sampleTodos || []);
  //temp state
  const [todo, setTodo] = useState({ value: '' });
  const [activeTodo, setActiveTodo] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [editText, setEditText] = useState('');
  const navigate = useNavigate();

  //displays todos when component mounts & checks if there are todos in localstorage
  useEffect(() => {
    // const storedTodos = JSON.parse(localStorage.getItem('todos'));
    // if (storedTodos) {
    //   setTodos(storedTodos);
    // }
  }, []);

  //stores todos in localstorage
  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    // e.preventDefault();
    console.log('Inside the addTodo function!');
    const newTodo = {
      isActive: true,
      value: '',
      id: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo].sort((a, b) => b.id - a.id));
    setTodo(newTodo.value);
    setActiveTodo(newTodo.isActive);
  };

  const saveTodo = (id) => {
    // e.preventDefault();
    console.log('In the saveTodo function!');

    // if (todo === '') {
    //   return;
    // }

    // const newTodos = todos.map((item) => {
    //   if (item.id === id) {
    //     item.value = todo;
    //     item.isActive = false;
    //   }
    //   return item;
    // });

    const newTodo = {
      isActive: false,
      value: todo,
      id: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    //filters all todos and returns all except the todo thst matches the
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const editTodo = (id) => {
    console.log('Inside the edit the todo');
    //takes the id so we can find the one we want to edit the state to be isActive: true

    setTodos(
      todos.map((todo, i) => {
        if (id === todo.id) {
          console.log(todo.value);
          // todo.isActive = true;
          return { ...todo, isActive: !todo.isActive };
          //   todo.value = editText;
          //   todo.isActive = true;
        }
        return todo;
      })
    );

    setEditText('');
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
          todos={todos}
          searchText={searchText}
          setSearchText={setSearchText}
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          saveTodo={saveTodo}
          editText={editText}
          setEditText={setEditText}
        />
      </div>
    </div>
  );
};

export default List;
