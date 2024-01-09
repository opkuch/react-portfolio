import React from 'react'
import Bar from '../Bar/Bar'
import { BarsEnum } from '../../types/bars.types'

const FrontBars: React.FC<{}> = () => {
  return (
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
)
}

export default FrontBars