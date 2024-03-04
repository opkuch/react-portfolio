import { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuPopup } from './parts/MenuPopup/MenuPopup'
import { menuItems } from '../../constants/menu.constants'

export function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      window.removeEventListener('wheel', () => {})
    }
  }, [isOpen])

  return (
    <>
      <button onClick={toggleMenu} data-hover={true} className="menu">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${isOpen ? 'close' : 'menu'}`}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="menu-btn"
          >
            {isOpen ? 'Close' : 'Menu'}
            {isOpen ? null : <BiMenuAltRight />}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isOpen ? (
          <MenuPopup menuItems={menuItems} onToggleMenu={toggleMenu} />
        ) : null}
      </AnimatePresence>
    </>
  )
}
