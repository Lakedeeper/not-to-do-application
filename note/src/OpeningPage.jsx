// src/OpeningPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();  
  
    const handleClick = () => {
      navigate('/Directing');  
    };
  
    return (
      <div>
        <h2>Note, Calendar, and More</h2>
        <p>Choose what's good for you</p>
        <button onClick={handleClick}>Click to start</button>
      </div>
    );
  };

export default Home;
