import { Link } from 'react-router-dom'

export const Logo = ({
  size,
  onToggleMenu,
}: {
  size: 'small' | 'large'
  onToggleMenu?: () => void
}) => {
  return (
    <Link to="/" onClick={onToggleMenu}>
      <div className={`logo ${size}`}>
        <span className="">Nadav</span>
        <span>Ben Hur</span>
      </div>
    </Link>
  )
}
