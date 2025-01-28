// src/OpeningPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./OpeningPage.css";

const Home = () => {
    const navigate = useNavigate();  
  
    const handleClick = () => {
      navigate('/Directing');  
    };
    useEffect(() => {
      document.body.style.backgroundColor = '#5a649d'; 
  }, []);
    return (
      <div className="yerlestirme texts">
        <div className='logo'>
        <img src="/public/logonotizen.PNG" alt="" />
      </div>
        <h1>Note, Calendar, and More</h1>
        <p>Choose what's good for you</p>
        <button style={{color:'#5a649d', backgroundColor:'white', border:'1px solid #5a649d'}} onClick={handleClick}>Click to start</button>
      </div>
    );
  };

export default Home;
