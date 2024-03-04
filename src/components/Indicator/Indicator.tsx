import { useContext } from 'react'
import { useTouchDevice } from '../../hooks/useTouchDevice'
import { ThemeContext } from '../../context/theme'
import TouchIconAnimated from './parts/TouchIconAnimated'

const Indicator = () => {
  const isTouchDevice = useTouchDevice()
  const theme = useContext(ThemeContext)
  return isTouchDevice ? (
    <TouchIconAnimated theme={theme.theme} />
  ) : (
    <div className={`mouse_scroll ${theme.theme}`}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
    </div>
  )
}

export default Indicator
