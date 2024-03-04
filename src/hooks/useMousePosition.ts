import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [target, setTarget] = useState<Element | null>(null)
    useEffect(() => {
        function handler(ev: MouseEvent) {
            const { clientX, clientY } = ev
            setMousePos({ x: clientX, y: clientY })
            if (ev.target !== target) {
                setTarget(ev.target as Element)
            }
        }
        
        window.addEventListener('mousemove', handler)
        return () => {
            window.removeEventListener('mousemove', handler)
        }
    }, [])
    return { mousePos, target }
}