import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {Create} from './pages/create'
import {Auth} from './pages/auth'
import {Saved} from './pages/saved-recipes'
import { Navbar} from './components/navbar'


function App(){
  return(
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/saved-recipes" element={<Saved/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
