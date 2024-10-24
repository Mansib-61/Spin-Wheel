import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './SpinWheel.css';

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate(); // Updated to useNavigate

  const segments = [
    "Manchester United",
    "Liverpool",
    "Chelsea",
    "Arsenal",
    "Manchester City",
    "Tottenham Hotspur"
  ];

  const spinWheel = () => {
    const randomDegree = Math.floor(Math.random() * 360 + 720); // Random spin
    setRotation(randomDegree);
    const resultIndex = Math.floor(((randomDegree % 360) / 60)); // Calculate which segment is selected
  
    // After a delay to allow the spin animation to finish
    setTimeout(() => {
      navigate(/*"/result", { state: { selectedClub: segments[resultIndex] } }*/); // Pass the selected club in state
    }, 4000); // Match this time with the spinning duration
   // Match this time with the spinning duration
  };

  return (
    <div className="spin-wheel-container">
      <div className="wheel-container">
        <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          {segments.map((segment, index) => (
            <div className="segment" key={index}>
              <span>{segment}</span>
            </div>
          ))}
        </div>
        <div className="pointer" />
      </div>
      <button className="spin-button" onClick={spinWheel}>Spin</button>
    </div>
  );
};

export default SpinWheel;
