import React from "react";
import Bar from "../Bar/Bar";
import { BarsEnum } from "../../types/bars.types";

const BarList = () => {
  return (
    <div className="bars">
      <div className="frnt-bars">
        <div className="bars-title">Client Stack</div>
        <div className="bars-content">
          <Bar width="90%" type={BarsEnum.TS} />
          <Bar width="85%" type={BarsEnum.REACT} />
          <Bar width="70%" type={BarsEnum.VUE} />
        </div>
      </div>
      <div className="server-bars">
        <div className="bars-title">Server Stack</div>
        <div className="bars-content">
          <Bar width="80%" type={BarsEnum.NODE} />
          <Bar width="70%" type={BarsEnum.NEST} />
          <Bar width="65%" type={BarsEnum.MONGO} />
        </div>
      </div>
    </div>
  );
};

export default BarList;
