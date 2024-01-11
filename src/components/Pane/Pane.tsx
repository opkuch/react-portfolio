import React from "react";
import { PaneType } from "../../types/pane.types";

const Pane: React.FC<PaneType> = ({ title, id, onClick, isShutter, open, start, children, skew }) => {
  
  return (
    <div className={`pane p${id} `} onClick={() => onClick(id)}>
      <span className="header">{title}</span>
      <div className={`content`}>
        {children? children : <div className="coming-soon">coming soon...</div>}
      </div>
    </div>
  );
};

export default Pane;
