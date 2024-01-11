const Arrow: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  return (
    <span className={`indicator-arrow ${isSelected && 'selected'}`}>
      <span></span>
    </span>
  )
}

export default Arrow
