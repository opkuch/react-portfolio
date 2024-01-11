import React from "react";
import { PaneType } from "../../types/pane.types";

const Pane: React.FC<PaneType> = ({ title, id, children }) => {
  
  return (
    <div className={`pane p${id} `}>
      <span className="header">{title}</span>
      <div className={`content`}>
        {children? children : <div className="coming-soon">coming soon...</div>}
      </div>
    </div>
  );
};

export default Pane;
