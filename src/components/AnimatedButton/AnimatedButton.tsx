import React from "react";

const AnimatedButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <a className="animated-button7">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
};

export default AnimatedButton;
