import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'

type Mode = 'dark' | 'light'

export function DarkModeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext)

    function onToggle(mode: Mode) {
        if (theme === mode) return
        if (mode === 'light') {
            document.documentElement.setAttribute('data-theme', 'light')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
        setTheme(mode)
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