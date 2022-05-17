import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const headerData = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'add',
    link: '/add',
  },
  {
    title: 'Login',
    link: '/login',
  },
  {
    title: 'Register',
    link: '/register',
  },
];

function App() {
  return (
    <div className='App'>
      <Header data={headerData} />
      <Routes>
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/add'} element={<Add />} />
        <Route path={'/'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
