import React, { useState } from "react";

const Card: React.FC<{ bgImage: string; placeholder: string }> = ({ bgImage, placeholder }) => {


  return (
    <div className="card-container" onClick={(e) => {
      e.stopPropagation()
    }}>
      <h1>text</h1>
      <img src={bgImage} alt="loading.." />
      <div className="card-bg"></div>
    </div>
  );
};

export default Card;
