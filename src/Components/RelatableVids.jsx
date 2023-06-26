import React from 'react'
import { Link } from 'react-router-dom'
import "./Relatable.css"

const RelatableVids = ({data,thumbnail,title,author,url}) => {
  return (
          
                <div className='video'>
                    { data.length>0 ? data.map((element,index)=>(
                        <Link className='video-item link' key={index} to={element.url}>
                        <img src={element.thumbnails[0].url}/>
                        <h2>{element.title}</h2>
                        <p>{element.author.name}</p>
                        </Link>
                    
                    )):<h1>No videos found for this exercise...</h1> }
                    </div>
           
   
  )
}

export default RelatableVids