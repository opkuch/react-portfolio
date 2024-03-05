import { useContext } from 'react'
import { useTouchDevice } from '../../hooks/useTouchDevice'
import { ThemeContext } from '../../context/theme'
import TouchIconAnimated from './parts/TouchIconAnimated'
import { Text } from '../Text/Text'

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
      <Text type="regular" size="small" display="inline" classNames='scroll-text'>
        SCROLL
      </Text>
    </div>
  )
}

export default Indicator
