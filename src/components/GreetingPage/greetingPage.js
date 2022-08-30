import React from 'react';
import { useParams } from 'react-router-dom';

const hi ={
    textAlign: "center",
    margin:"1rem",
};

const wave ={
    ...hi,
    fontSize: "5rem"
};

const GreetingPage = () => {

    const {who = "nobody"} = useParams();
  return (
    <div>
        <h1 style={hi}>Helloooooo!!!, {who}!</h1>
        <h1 style={wave}>👋</h1>
    </div>
  )
}

export default GreetingPage