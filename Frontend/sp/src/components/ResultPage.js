import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const { selectedClub } = location.state || {}; // Destructure the selected club from state

  return (
    <div className="result-page">
      {selectedClub ? (
        <>
          <h1>Congratulations!</h1>
          <p>You got: {selectedClub}</p>
        </>
      ) : (
        <p>No club selected. Please try spinning again!</p>
      )}
    </div>
  );
};

export default ResultPage;
