import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import CardList from './components/card-list/card-list.component'
import NavBar from './components/navbar/navbar.component'
import Login from './components/login-form/login-form.component'

const App=()=> {
  return(
    
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route path='' element={<CardList/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/contacts' element={<Login/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
