import { useEffect, useRef, useState } from "react";

export const useSwipe = ({ el }: { el: HTMLElement | null }) => {
    const touchStartRef = useRef<number | null>(null)
    const touchEndRef = useRef<number | null>(null)
    const [isRightSwipe, setIsRightSwipe] = useState<{ isRightSwipe: boolean | null }>({ isRightSwipe: null })
    const minSwipeDistance = 75

    useEffect(() => {
        if (!el) return

        const onTouchStart = (e: TouchEvent) => {
            touchEndRef.current = null
            touchStartRef.current = e.targetTouches[0].clientX
        }

        const onTouchMove = (e: TouchEvent) => {
            touchEndRef.current = e.targetTouches[0].clientX
        }

        const onTouchEnd = () => {
            if (!touchStartRef.current || !touchEndRef.current) return
            const distance = Math.abs(touchStartRef.current - touchEndRef.current)
            if (distance > minSwipeDistance) {
                setIsRightSwipe({ isRightSwipe: touchEndRef.current < touchStartRef.current })
            }
        }

        el.addEventListener('touchstart', onTouchStart)
        el.addEventListener('touchmove', onTouchMove)
        el.addEventListener('touchend', onTouchEnd)
        return () => {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchmove', onTouchMove)
            el.removeEventListener('touchend', onTouchEnd)
        }
    }, [el])

    return {
        isRightSwipe
    }

};
