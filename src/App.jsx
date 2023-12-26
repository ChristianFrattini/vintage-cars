import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import CardList from './components/card-list/card-list.component'
import NavBar from './components/navbar/navbar.component'

const App=()=> {
  return(
    <div>
      <NavBar/>
      <CardList/>
      
    </div>
    
  )
}

export default App
