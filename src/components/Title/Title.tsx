import React from "react";
const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="title-container">
      <div>
        <span className="stroke shadow halftone">{text}</span>
      </div>
    </div>
  );
};

export default Title;
