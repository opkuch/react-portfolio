import { Text } from '../../../../components/Text/Text'
import useScreenSize from '../../../../hooks/useScreenSize';

function InfoItem({ title, content }: { title: string; content: string }) {
  const {width} = useScreenSize();
  return (
    <div className='info-item'>
      <Text classNames='underline' size={width < 900? 'small' : 'medium'}>{title}</Text>
      <Text size={width < 900? 'small' : 'medium'}>{content}</Text>
    </div>
  )
}

export default InfoItem
