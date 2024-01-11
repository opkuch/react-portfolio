import Bar from "../Bar/Bar";
import { BarsEnum } from "../../types/bars.types";

const BarList: React.FC<{ skew: boolean }> = ({ skew }) => {
  return (
    <div className={`bars`}>
      <div className="frnt-bars">
        <div className="bars-title">
          My <strong className="emphasis">frontend</strong> expertise centers around Typescript and
          React, delivering scalable and efficient web applications. I'm also adept at Vue.js,
          providing flexibility to tailor solutions to specific project needs. With a keen eye for
          user experience, I seamlessly integrate these technologies to craft engaging interfaces
          that leave a lasting impression.
        </div>
        <div className="bars-content">
          <Bar width="90%" type={BarsEnum.TS} />
          <Bar width="85%" type={BarsEnum.REACT} />
          <Bar width="70%" type={BarsEnum.VUE} />
        </div>
      </div>
      <div className="server-bars">
        <div className="bars-title">
          Relying on a potent <strong className="emphasis emphasis-blue">backend</strong> combination of
          NestJS, REST, and MongoDB, for a readable & scalable apps. Additionally, my proficiency
          extends to efficiently building servers with Apollo GraphQL, elevating flexibility and
          optimizing data querying for a robust and versatile backend experience.
        </div>
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
