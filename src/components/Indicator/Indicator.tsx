import { useContext } from 'react'
import { useTouchDevice } from '../../hooks/useTouchDevice'
import { ThemeContext } from '../../context/theme'
import TouchIconAnimated from './parts/TouchIconAnimated'

const Indicator = () => {
  const isTouchDevice = useTouchDevice()
  const theme = useContext(ThemeContext)
  return isTouchDevice && (
    <TouchIconAnimated theme={theme.theme} />
  )
}

export default Indicator
