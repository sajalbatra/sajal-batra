import React from 'react';
import Techstack from './Techstack';
import './technames.css';
import names from './Names';

const Technames = () => {
  return (
    <>
      <div className='techsnames-main-div'>
        <h1>Tech Stack</h1>
        <div className='technames-elements-div'>
          {names.map((val) => (
            <Techstack  
            name={val.name} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Technames;
