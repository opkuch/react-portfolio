import Bar from '../Bar/Bar'
import { BarsEnum } from '../../types/bars.types'

const ServerBars = () => {
  return (
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
)
}

export default ServerBars