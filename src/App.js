import React from 'react'
import "./index.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Exercice from './pages/Exercice'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    
       <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/exercise/:id" element={<Exercice/>}/>
          </Routes>
       </BrowserRouter>
    
  )
}

export default App