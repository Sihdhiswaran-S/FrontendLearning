import React from 'react'
import SecondCode from './SecondCode';

function FirstCode(props) {
    console.log("props value",props);
    const {name} = props;
  return (
    <div>
        <h1>FirstCode : {name}</h1>
        <SecondCode/>
    </div>
  );
}

export default FirstCode;