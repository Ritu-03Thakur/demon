
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import  Home from './page/Home';

import './App.css'
import SignUp from './page/Signup';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Term from './page/Term.jsx';
import Wallet from './page/Wallet';
import Game from './page/Game';

function App() {
  return (
    <>

      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/term&conditions' element={<Term />} />
            <Route path='/wallet' element={<Wallet />}  />
            <Route path='/game' element={<Game />} />
          </Routes>
        </main>

      </BrowserRouter>

    </>
  )
}

export default App
