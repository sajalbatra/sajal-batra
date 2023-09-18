import React from 'react';
import "./domain.css";

const Domain = (props) => {
  return (
    <div>
    <a href={props.url} target="_blank" rel="noopener noreferrer" className='domain-link'>
      <div className='domain-main-div'>
        <img src={props.image} alt='' />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </a>
    </div >
  );
};

export default Domain;
