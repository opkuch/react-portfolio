import { useTouchDevice } from '../../hooks/useTouchDevice'
import { Logo } from '../Logo/Logo'
import { Text } from '../Text/Text'

interface Props {
  title: string
}

export function PageHeader({ title }: Props) {
  const isTouchDevice = useTouchDevice()

  return (
    <header className="page-header">
      <Logo size={isTouchDevice? 'small' : 'large'} />
      <Text type="title" size="large" display={50} classNames="page-title">
        {title}
      </Text>
    </header>
  )
}
