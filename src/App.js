import Login from './pages/Login';
import List from './pages/List';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/list' element={<List />} />
    </Routes>
  );
}

export default App;
