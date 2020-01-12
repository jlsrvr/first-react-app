// in it's simplest form a component is just a js function that returns some jsx
import React from 'react';

const  person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} !</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
