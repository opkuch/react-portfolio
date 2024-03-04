import React from 'react'
import { motion } from 'framer-motion'

const Image: React.FC<{ imgURL: string; index: number }> = ({
  imgURL,
  index,
}) => {
  return (
    <motion.section className='details-section'>
        <img key={index} src={imgURL} alt="lorem ipsum" />
    </motion.section>
  )
}

export default Image
