import React from 'react'

const BodyPartCard = ({img,name}) => {
  return (
    <div className='card'>
        <img src={img}/>
        <h3>{name}</h3>
    </div>
  )
}

export default BodyPartCard