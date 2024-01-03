import React from "react";
import { PaneType } from "../../types/pane.types";

const Pane: React.FC<PaneType> = ({ title, id, onClick, isShutter, open, start, children }) => {
  console.log(children);
  
  return (
    <div className={`pane ${isShutter? 'shutter' : ''} ${open? 'open' : ''} ${start? 'start' : ''} p${id} `} onClick={() => onClick(id)}>
      <span className="header">{title}</span>
      <div className={`content ${open? '' : 'hide'}`}>
        {children? children : <div className="coming-soon">coming soon...</div>}
      </div>
    </div>
  );
};

export default Pane;
