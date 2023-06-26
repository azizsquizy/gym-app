import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import BodyPartSection from '../Components/BodyPartSection'
import Search from '../Components/Search'
import { fetchBodyParts, fetchExercices } from '../API'
import "./Home.css"
import Exercices from '../Components/Exercices'

const Home = () => {
  const [bodyParts, setBodyParts] = useState([])
  const [exercisesData, setExercisesData] = useState([])
  const [exercises, setExercises] = useState([])
  const handleQuery = (input) => {
    const exercisesToSearch = exercisesData.filter((element) => {
      return (
        element.name.includes(input) ||
        element.target.includes(input) ||
        element.bodyPart.includes(input)
      );
    });
    setExercises(exercisesToSearch);
    console.log(exercisesToSearch);
  };
  const handleByBodyPart = (input) => {
    const exercisesToSearch = exercisesData.filter((element) => {
      return (
       
        element.bodyPart.includes(input)
      );
    });
    setExercises(exercisesToSearch);
   console.log(exercises)
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      const bodyPartsData = await fetchBodyParts()
      setBodyParts(bodyPartsData)
      // console.log(bodyPartsData)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const exercisesData = await fetchExercices()
      setExercisesData(exercisesData)
      // console.log(exercisesData)
    }
    fetchData()
  }, [])

  return (
    <div className='home'>
      <Hero />
      <Search onSerach={handleQuery}  />
      <BodyPartSection onFilter={handleByBodyPart} data={bodyParts} />
      <Exercices data={exercises} />
    </div>
  )
}

export default Home
