import { AnimatePresence } from 'framer-motion'
import useScreenSize from './hooks/useScreenSize'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import { useEffect, useState } from 'react'
import { ThemeContext } from './context/theme'
import { useTouchDevice } from './hooks/useTouchDevice'
import { useMousePosition } from './hooks/useMousePosition'
import Cursor from './components/Cursor/Cursor'
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails'
import { ProjectIndex } from './pages/ProjectIndex/ProjectIndex'

function App() {
  const isTouchDevice = useTouchDevice()
  // const { mousePos, target } = useMousePosition()
  const [theme, setTheme] = useState('dark')
  const value = { theme, setTheme }
  // useEffect(() => {
  //   if (isTouchDevice) return
  //   // console .log(mousePos);
  // }, [mousePos, isTouchDevice])
  // useEffect(() => {
  //   if (isTouchDevice) return
  // }, [target, isTouchDevice])
  const { width, height } = useScreenSize()
  const location = useLocation()
  return (
    <>
      <ThemeContext.Provider value={value} key={location.pathname}>
        <AnimatePresence mode="wait">
          <PageWrapper windowSize={{ width, height }}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/project" element={<ProjectIndex />}/>
              <Route path="/project/:projectId" element={<ProjectDetails />}/>
            </Routes>
          </PageWrapper>
        </AnimatePresence>
      </ThemeContext.Provider>
      {!isTouchDevice && <Cursor />}
    </>
  )
}

export default App
