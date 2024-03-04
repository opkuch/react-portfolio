import { Link } from 'react-router-dom'

export const Logo = ({ size }: { size: 'small' | 'large' }) => {
  return (
    <>
      {size === 'small' ? (
        <Link to="/">
          <div className={`logo ${size}`}>
            <span className="">Nadav</span>
            <span>Ben Hur</span>
            <span>Portfolio</span>
          </div>
        </Link>
      ) : (
        <div className={`logo ${size}`}>
          <span className="">Nadav</span>
          <span>Ben Hur</span>
          <span>Portfolio</span>
        </div>
      )}
    </>
  )
}