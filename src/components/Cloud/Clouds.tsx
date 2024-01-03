import React from "react";

const Clouds: React.FC<{ isInverse?: boolean }> = ({ isInverse }) => {
  return (
    <div className={`clouds ${isInverse ? 'inverse' : ''}`}>
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
    </div>
  );
};

export default Clouds;
