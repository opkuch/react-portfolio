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
      <div>
        <Logo size="large" />
        <span className='subtitle'>software developer</span>
      </div>
      <DarkModeSwitch />
    </motion.header>
  )
}

export default Header
