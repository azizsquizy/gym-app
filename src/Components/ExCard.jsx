import React from 'react'

const ExCard = ({img,bodypart,name,target}) => {
  return (
    <div className='ex-card'>
        <div className='img'>
            <img src={img}/>
        </div>
        <div className='info'>
            <h3>Muscles:</h3>
            <p>{bodypart}</p>
            <p>{target}</p>
        </div>
        <h3>{name}</h3>
    </div>
  )
}

export default ExCard