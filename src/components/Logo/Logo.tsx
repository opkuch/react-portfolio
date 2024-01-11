import React from "react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Logo: React.FC<{}> = ({}) => {
  return (
    <div className="square" id="square">
      <AnimatedButton text="Discover more.."/>
    </div>
  );
};

export default Logo;
