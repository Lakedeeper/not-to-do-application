import React from "react";
import "./DirectingPage.css"
import { useEffect } from 'react'
import './DirectingPage.css';

const Directing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#5a649d';
    document.body.style.width = "100%";
  }, []);
    return (
    <main className="container">
      <div className="baslik">
      <h1>What We Offer</h1>
      </div>
      <div className="box col-4">
        <img src="/public/resim1.png" alt="share your notes"/>
        <p>Share Your Notes</p>
        </div>
        <div className=" box col-4">
        <img src="/public/resim2.png" alt="access information" />
        <p>Access information</p>
        </div>
        <div className="box col-4">
        <img src="public/resim3.png" alt="eco-friendly" />
        <p>Eco-Friendly</p>
        </div>
    </main>
  );
};
  export default Directing;