import React from 'react'

const ResumePage: React.FC<{inView: boolean}> = ({inView}) => {

  return (
    <div className={`resume page`}>
      <div className={`circle ${inView && 'expand'}`}></div>
        {/* <AnimatedPapers /> */}
    </div>
  )
}

export default ResumePage