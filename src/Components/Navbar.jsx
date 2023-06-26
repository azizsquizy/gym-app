import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Logo.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar section-padding'>
        <img src={Logo}/>
        <div className='links'>
            <Link className='link' to={"/"}>Home</Link>
            <Link  className="link"to={"/Exercices/:id"}>Exercices</Link>
        </div>

    </div>
  )
}

export default Navbar