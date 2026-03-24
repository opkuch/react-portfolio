import { useEffect, useRef, useState } from 'react'

export const useMousePosition = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [target, setTarget] = useState<Element | null>(null)
    const targetRef = useRef<Element | null>(null)

    useEffect(() => {
        function handler(ev: MouseEvent) {
            setMousePos({ x: ev.clientX, y: ev.clientY })
            if (ev.target !== targetRef.current) {
                targetRef.current = ev.target as Element
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