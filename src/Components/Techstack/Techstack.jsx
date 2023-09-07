import React from 'react';
import "./techstack.css";

const Techstack = (props) => {
  return (
       <div className='techstack-elements-div'>
        <img src={props.name} alt=''/>
      </div>

  );
}

export default Techstack;
