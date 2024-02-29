import { AnimatePresence } from 'framer-motion'
import useScreenSize from './hooks/useScreenSize'
import PageWrapper from './components/PageWrapper/PageWrapper'
import { Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
function App() {
  const { width, height } = useScreenSize()
  const location = useLocation()
  return <AnimatePresence mode="wait">
    <PageWrapper windowSize={{width, height}}> 
        <Routes location={location}>
            <Route path='/' element={<HomePage />}/>
        </Routes>
    </PageWrapper>
  </AnimatePresence>
}

export default App
