import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from '../API';
import { fetchRelatableVids } from '../API';
import "./Exercice.css"
import RelatableVids from '../Components/RelatableVids';
import ExerciseHeader from '../Components/ExerciseHeader';
const Exercice = () => {
  const [data, setData] = useState(null);
  const [relatableVid,setRelatableVids] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFetched = await fetchById(id);
        setData(dataFetched);
        console.log(dataFetched);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(()=>{
    const fetching = async()=>{
          if(data){
            const fetchedData = await fetchRelatableVids(data.name)
              setRelatableVids(fetchedData.items.slice(0,3))
          }
    }
    fetching()
  },[data])

  return (
    <div className='exercise-page'>
          {data && <ExerciseHeader name={data.name} equipment={data.equipment} target={data.target} img={data.gifUrl} bodypart={data.bodyPart}/>}
          {data&& <h1 style={{fontSize:"60px", padding:"50px"}}>Watch<span style={{color:"var(--primary-button)"}}> {data.name} </span> <br/> exercise Videos</h1>}

          <RelatableVids data={relatableVid}/>
    </div>
  );
};

export default Exercice;
