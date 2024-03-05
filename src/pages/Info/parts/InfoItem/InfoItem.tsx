import { Text } from '../../../../components/Text/Text'

function InfoItem({ title, content }: { title: string; content: string }) {
  return (
    <div className='info-item'>
      <Text classNames='underline' size='small'>{title}</Text>
      <Text>{content}</Text>
    </div>
  )
}

export default InfoItem
