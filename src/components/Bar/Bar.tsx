import React from "react";

const Bar: React.FC<{ type: string; width: string }> = ({ type, width }) => {
  return (
    <div className="bar-container">
      <div className="meter animate">
        <span className={`${type}`} style={{ width: width }}>
          <span></span>
          <span className="text">
            <span className="bar-title">{type}</span>
            <span className="width"> {width}</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Bar;
