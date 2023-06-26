import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import "./Exercices.css"
import ExCard from './ExCard';
import { Link } from 'react-router-dom';
const Exercices = ({ data }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  useEffect(()=>{
        setCurrentPage(1)
  },[data])
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className='exercices'>
     <h1>Showing Results</h1>
    <div className='exercises-list'>
        {currentData.map(exercise => (
                <Link className='link' to={`/exercise/${exercise.id}`}>
                        <ExCard  bodypart={exercise.bodyPart} target={exercise.target} img={exercise.gifUrl} name={exercise.name}/>
                </Link>
                
            ))}
    </div>
            
       <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Exercices
