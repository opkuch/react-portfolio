import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import { THEME_KEY } from '../../constants/theme.constants'

type Mode = 'dark' | 'light'

export function DarkModeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext)

    function onToggle(mode: Mode) {
        if (theme === mode) return
        document.documentElement.setAttribute('data-theme', mode)
        setTheme(mode)
        localStorage.setItem(THEME_KEY , mode)
    }

    return (
        <section className='light-dark-buttons'>
            <button
                data-hover={true}
                className={`light-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => onToggle('light')}
            >
                Light
            </button>
            <span> / </span>
            <button
                data-hover={true}
                className={`dark-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => onToggle('dark')}
            >
                Dark
            </button>
        </section>
    )
}