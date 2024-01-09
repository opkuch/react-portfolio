import React from 'react'
import Pane from '../Pane/Pane'
import { PaneData } from '../../types/pane.types'
import PdfContainer from '../PdfContainer/PdfContainer'
import BarList from '../BarList/BarList'

const PaneList: React.FC<{
  isPanesShuttered: boolean
  panes: PaneData
}> = ({ panes }) => {
  const { paneOne, paneTwo, paneThree, paneFour } = panes

  return (
    <>
      <Pane
        id={paneOne.id}
        isShutter={paneOne.isShutter}
        open={paneOne.open}
        start={paneOne.start}
        title={paneOne.title}
        onClick={paneOne.onClick}
        skew={true}
        children={<BarList showBar=''/>}
      />
      <Pane
        id={paneTwo.id}
        isShutter={paneTwo.isShutter}
        open={paneTwo.open}
        start={paneTwo.start}
        title={paneTwo.title}
        onClick={paneTwo.onClick}
      />
      <Pane
        id={paneThree.id}
        isShutter={paneThree.isShutter}
        open={paneThree.open}
        start={paneThree.start}
        title={paneThree.title}
        onClick={paneThree.onClick}
        children={<PdfContainer />}
      />
      <Pane
        id={paneFour.id}
        isShutter={paneFour.isShutter}
        open={paneFour.open}
        start={paneFour.start}
        title={paneFour.title}
        onClick={paneFour.onClick}
      />
    </>
  )
}

export default PaneList
