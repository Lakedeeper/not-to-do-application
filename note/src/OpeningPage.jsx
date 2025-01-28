// src/OpeningPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./OpeningPage.css";

const Home = () => {
<<<<<<< Updated upstream
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
=======
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Directing');
>>>>>>> Stashed changes
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#5a649d';
  }, []);

  return (
    <div className="h-screen bg-blue-900">
      <div className="text-left space-y-6 absolute top-10 left-10 p-6">
        <h1 style={{ fontFamily: 'Roca One',}} className="text-5xl font-bold text-blue-200 leading-snug">
          note, <br />
          calendar <br />
          and more
        </h1>
        <p className="text-blue-300 text-lg">Choose what's good for you</p>
        <button
          className="px-6 py-3 bg-blue-200 text-blue-900 font-semibold rounded-lg hover:bg-blue-300 transition"
          onClick={handleClick}
        >
          click to start
        </button>
      </div>
    </div>
  );
};

export default Home;

