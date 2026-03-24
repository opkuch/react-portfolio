import TouchIcon from './TouchIcon'
import { Text } from '../../Text/Text'

const TouchIconAnimated = ({ theme }: { theme: string }) => {
  return (
    <div className={`swipe`}>
      <Text type="regular" size="small" display="inline" classNames='swipe-text'>
        SWIPE PROJECTS
      </Text>
      <TouchIcon fillColor={theme === 'light' ? '#000' : '#fff'} />
    </div>
  )
}

export default TouchIconAnimated
