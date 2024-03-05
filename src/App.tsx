import { AnimatePresence } from 'framer-motion'
import useScreenSize from './hooks/useScreenSize'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import { useState } from 'react'
import { ThemeContext } from './context/theme'
import { useTouchDevice } from './hooks/useTouchDevice'
import Cursor from './components/Cursor/Cursor'
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails'
import { ProjectIndex } from './pages/ProjectIndex/ProjectIndex'
import { Menu } from './components/Menu/Menu'
import Info from './pages/Info/Info'

function App() {
  const isTouchDevice = useTouchDevice()
  const [theme, setTheme] = useState('dark')
  const value = { theme, setTheme }

  const { width, height } = useScreenSize()
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <ThemeContext.Provider value={value} key={location.pathname}>
          <PageWrapper windowSize={{ width, height }}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/info" element={<Info />} />
              <Route path="/project" element={<ProjectIndex />} />
              <Route path="/project/:projectId" element={<ProjectDetails />} />
            </Routes>
          </PageWrapper>
          <Menu />
        </ThemeContext.Provider>
      </AnimatePresence>
      {!isTouchDevice && <Cursor />}
    </>
  )
}

export default App
