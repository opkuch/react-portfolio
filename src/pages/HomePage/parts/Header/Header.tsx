import React from 'react'
import { DarkModeSwitch } from '../../../../components/DarkModeSwitch/DarkModeSwitch'
import { motion } from 'framer-motion'
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    >
      <div className="title-container">
        <span className="">Nadav</span>
        <span>Ben Hur</span>
        <span>Portfolio</span>
      </div>
      <DarkModeSwitch />
    </motion.header>
  )
}

export default Header
