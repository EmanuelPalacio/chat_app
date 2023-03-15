import "./css/app.css"
import { Routes , Route } from 'react-router-dom';
import Dashboard from './pages/chat/dashboard.jsx';
import Login from './pages/login/Login.jsx';

export default function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user/:id' element={<Dashboard/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Routes>

  )

  }
