import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMenuItem } from '../../../../constants/menu.constants'
interface Props {
    menuItems: IMenuItem[]
    onToggleMenu: () => void
}

export function MenuItems({ menuItems, onToggleMenu }: Props) {
    return (
        <section className='menu-items'>
            {menuItems.map((item, index) => (
                <motion.div
                    onClick={onToggleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: index === 0 ? 0.2 : index * 0.2 + 0.2 }}
                    key={index}
                >
                    <NavLink data-hover={true} to={`${item.url}`} className='menu-link' key={item._id}>
                        {item.title}
                    </NavLink>
                </motion.div>
            ))}
        </section>
    )
}