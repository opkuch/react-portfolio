import { DarkModeSwitch } from '../../../../components/DarkModeSwitch/DarkModeSwitch'
import { motion } from 'framer-motion'
import { Logo } from '../../../../components/Logo/Logo'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    >
      <Logo size="large" />
      <DarkModeSwitch />
    </motion.header>
  )
}

export default Header
