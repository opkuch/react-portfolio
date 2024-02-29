import { motion } from 'framer-motion'
import React, { CSSProperties, ReactNode } from 'react'
interface PageWrapperProps {
    children: ReactNode,
    windowSize: {
        width: number,
        height: number
    }
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, windowSize }) => {
  const containerVatiants = {
    hidden: {
      opacity: 0,
      transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
  }

  return (
    <motion.div
      variants={containerVatiants}
      initial={'hidden'}
      animate={'visible'}
      exit={'hidden'}
      style={{ '--vh': windowSize.height } as CSSProperties}
      className="page-wrapper"
    >
        {children}
    </motion.div>
  )
}

export default PageWrapper
