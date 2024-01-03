import React from "react";
import LogoSrc from "../../assets/alogo.png";

const Logo: React.FC<{onLogoClick: () => void, isPanesShuttered: boolean}> = ({onLogoClick, isPanesShuttered}) => {
  return (
    <div className="square" id="square" onClick={onLogoClick}>
      <img className={`logo ${isPanesShuttered? 'shake' : ''}`} src={LogoSrc} />
    </div>
  );
};

export default Logo;
