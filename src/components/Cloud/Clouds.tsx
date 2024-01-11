import React from "react";

const Clouds: React.FC<{ isInverse?: boolean, inView?: boolean }> = ({ isInverse, inView }) => {
  return (
    <div className={`clouds ${isInverse ? 'inverse' : ''} ${inView && 'in-view'}`}>
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
    </div>
  );
};

export default Clouds;
