import FrontBars from '../FrontBars/FrontBars'
import ServerBars from '../ServerBars/ServerBars'
// import {  useCallback } from 'react'

const BarList: React.FC<{ showBar: string }> = ({ }) => {
  // const displayBar = useCallback(() => {
  //   switch (showBar) {
  //     case 'front':
  //       return <FrontBars />

  //     case 'server':
  //       return <ServerBars />
  //   }
  //   return
  // }, [showBar])
  return (
    <div className="bars">
       <FrontBars />
       <ServerBars />
    </div>
  )
}

export default BarList
