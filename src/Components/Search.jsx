import React, { useState } from 'react'
import "./Search.css"
const Search = ({onSerach}) => {
  const [search,setSearch] = useState("")
  const handleSearch = (e)=>{
        e.preventDefault()   
        setSearch(e.target.value)
        
  }


  return (
    <div className='section-padding search-section'>
        <div className='section-title'>
             <h1>Awesome Exercices you <br/>should try and Know</h1>
        </div>

        <div className='search-bar'>
                <input placeholder='Search Exercices'  onChange={handleSearch} />
              <button style={{cursor:"pointer"}} onClick={()=>{onSerach(search)}}>Search</button>
        </div>
          
    </div>
  )
}

export default Search