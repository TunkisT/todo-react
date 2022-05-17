import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const headerData = [
  {
    title: 'Home',
    link: '/',
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
        <Route path={'/'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
