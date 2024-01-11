import { useCallback, useEffect, useState } from 'react'
import CarouselContainer from './components/CarouselContainer/CarouselContainer'
import PaneList from './components/PaneList/PaneList'
import { createInitialPanes } from './consts/panes'
import LandingPage from './slides/LandingPage/LandingPage'
import { PaneData, PaneType } from './types/pane.types'
import Pane from './components/Pane/Pane'
import PdfContainer from './components/PdfContainer/PdfContainer'
import BarList from './components/BarList/BarList'
import PlaneBackground from './components/PlaneBackground/PlaneBackground'
import TechnologyPage from './slides/TechnologyPage/TechnologyPage'
import ResumePage from './slides/ResumePage/ResumePage'

function App() {
  const [panes, setPanes] = useState<PaneData>(createInitialPanes())
  const { paneOne, paneTwo, paneThree, paneFour } = panes

  return (
    <>
      {
        <CarouselContainer>
          <LandingPage />
          <TechnologyPage />
          <Pane
            id={paneTwo.id}
            isShutter={paneTwo.isShutter}
            open={paneTwo.open}
            start={paneTwo.start}
            title={paneTwo.title}
            children={<></>}
          />
          <ResumePage />
          <Pane
            id={paneFour.id}
            isShutter={paneFour.isShutter}
            open={paneFour.open}
            start={paneFour.start}
            title={paneFour.title}
          />
        </CarouselContainer>
      }{' '}
    </>
  )
}

export default App
