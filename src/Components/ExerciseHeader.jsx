import React from 'react'
import bodypartIMG from "../assets/icons/body-part.png"
import equipmentIMG from "../assets/icons/equipment.png"
import targetIMG from "../assets/icons/target.png"

const ExerciseHeader = ({img,name,target,equipment,bodypart}) => {
  return (
    <div className='section-padding      header'>
        <div className='ex-img'>
            <img src={img}/>
        </div>
        <div className='ex-info'>
                <h1>{name}</h1>
                <p>Exercises Keep you Strong.{name} is one of the best<br/> Exercises to target your {target}.it will help you improve<br/> your mood and gain energy</p>
                <div className='ex-info-imgs'>
                    <div className='info-item'>
                            <img src={bodypartIMG}/>
                            <h3>{bodypart}</h3>
                    </div>
                    <div className='info-item'>
                            <img src={targetIMG}/>
                            <h3>{target}</h3>
                    </div>
                    <div className='info-item'>
                            <img src={equipmentIMG}/>
                            <h3>{equipment}</h3>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ExerciseHeader