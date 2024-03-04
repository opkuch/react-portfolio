import { useEffect, useState } from "react";

export const useSwipe = ({ el }: { el: HTMLElement | null }) => {
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const [isRightSwipe, setIsRightSwipe] = useState<{ isRightSwipe: boolean | null }>({ isRightSwipe: null })
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 75


    useEffect(() => {
        const onTouchStart = (e: TouchEvent) => {
            setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
            setTouchStart(e.targetTouches[0].clientX)
        }

        const onTouchMove = (e: TouchEvent) => {
            setTouchEnd(e.targetTouches[0].clientX)
        }

        const onTouchEnd = (e: TouchEvent) => {
            console.log(touchStart, touchEnd);

            if (!touchStart || !touchEnd) return
            const distance = Math.abs(touchStart - touchEnd)
            if (distance > minSwipeDistance) {
                setIsRightSwipe({ isRightSwipe: touchEnd < touchStart })
            }
        }

        if (el) {
            el.addEventListener('touchstart', onTouchStart)
            el.addEventListener('touchmove', onTouchMove)
            el.addEventListener('touchend', onTouchEnd)
            return () => {
                el.removeEventListener('touchstart', onTouchStart)
                el.removeEventListener('touchmove', onTouchMove)
                el.removeEventListener('touchend', onTouchEnd)

            }

        }
    }, [el, touchStart, touchEnd])

    return {
        isRightSwipe
    }

};
