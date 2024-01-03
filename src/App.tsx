import { useCallback, useEffect, useState } from "react";
import Clouds from "./components/Cloud/Clouds";
import LandingSection from "./components/LandingSection/LandingSection";
import Logo from "./components/Logo/Logo";
import PaneList from "./components/PaneList/PaneList";
import { createInitialPanes } from "./consts/panes";
import { PaneData, PaneType } from "./types/pane.types";

function App() {
  const [isPanesShuttered, setIsPanesShuttered] = useState(true);

  const onLogoClick = () => {
    setIsPanesShuttered(!isPanesShuttered);
    // setPanes((prevPanes) => {
    //   const thirdPaneCopy = JSON.parse(JSON.stringify(panes[panes.findIndex(pane => pane.id === 3)]))
    //   thirdPaneCopy.start = !thirdPaneCopy.start;
    //     const updatedPanes = [...prevPanes.filter((prev) => prev.id !== 3), thirdPaneCopy]
    //   return updatedPanes;
    // });
    setPanes((panes) => {
      const paneThreeCopy = JSON.parse(JSON.stringify(panes.paneThree));
      paneThreeCopy.start = !paneThreeCopy.start;
      const updatedPanes = createInitialPanes(onPaneClick);
      updatedPanes.paneThree = paneThreeCopy;
      return updatedPanes;
    });
  };

  const onPaneClick = useCallback(
    (paneId: number) => {
      if (isPanesShuttered) return;
      const updatedPanesValues = Object.values(panes).map((pane) => {
        if (pane.id === paneId) {
          pane.open = !pane.open;
        }
        return pane;
      });
      _setPanes(updatedPanesValues);
    },
    [isPanesShuttered]
  );

  const [panes, setPanes] = useState<PaneData>(createInitialPanes(onPaneClick));

  useEffect(() => {
    const updatedPanesValues = Object.values(panes).map((pane) => {
      pane.isShutter = isPanesShuttered;
      pane.onClick = onPaneClick; // Update the onClick function
      return pane;
    });

    _setPanes(updatedPanesValues);
  }, [isPanesShuttered, onPaneClick]);

  const _setPanes = (updatedPanesValues: PaneType[]) => {
    const updatedPanes = createInitialPanes(onPaneClick);
    updatedPanes.paneOne = updatedPanesValues[0];
    updatedPanes.paneTwo = updatedPanesValues[1];
    updatedPanes.paneThree = updatedPanesValues[2];
    updatedPanes.paneFour = updatedPanesValues[3];
    setPanes(updatedPanes);
  };

  return (
    <div className="app-container">
      <Logo isPanesShuttered={isPanesShuttered} onLogoClick={onLogoClick} />
      <LandingSection isPanesShuttered={isPanesShuttered} />
      <PaneList panes={panes} isPanesShuttered={!isPanesShuttered} />
      <Clouds />
      <Clouds isInverse={true} />
    </div>
  );
}

export default App;
