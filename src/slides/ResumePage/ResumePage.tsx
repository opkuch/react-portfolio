import React from 'react'
import PdfContainer from '../../components/PdfContainer/PdfContainer'

const ResumePage: React.FC<{inView: boolean}> = ({inView}) => {

  return (
    <div className={`resume page`}>
      <div className={`circle ${inView && 'expand'}`}></div>
        {/* <AnimatedPapers /> */}
        <PdfContainer />
    </div>
  )
}

export default ResumePage