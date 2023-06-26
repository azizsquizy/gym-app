import React from 'react';
import './BodyPart.css';
import Gym from '../assets/icons/gym.png';
import left from '../assets/icons/left-arrow.png';
import right from '../assets/icons/right-arrow.png';
import BodyPartCard from "./BodyPartCard"
const BodyPartSection = ({ data ,onFilter}) => {
  const scrollRef = React.useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;   // Adjust the scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className='section'>
      <div className='scroll-menu' ref={scrollRef}>
        {data &&
          data.map((element, index) => (
            <div onClick={()=>{onFilter(element)}} key={index} className='menu-item'>
              <BodyPartCard img={Gym} name={element} />
            </div>
          ))}
      </div>
      <div className='switchers '>
        <img src={left} alt='Scroll Left' onClick={handleScrollLeft} />
        <img src={right} alt='Scroll Right' onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default BodyPartSection;
