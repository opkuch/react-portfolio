import { stagger, useAnimate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function useGalleryAnimation(trigger: boolean, isRight: boolean | null) {
  const staggerMenuItems = useMemo(() => stagger(0.1, { ease: 'easeIn' }), []);
  const [isEnter, setIsEnter] = useState(false)
  const [scope, animate] = useAnimate();
  
  useEffect(() => {    
    setIsEnter(false)
    const timeoutId = setTimeout(() => setIsEnter(true), 800)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [trigger])

  useEffect(() => {
    animate(
      "li",
      isEnter
        ? { opacity: 1, scale: 1, transform: 'translateX(0)' }
        : { opacity: 0, scale: 0.7, transform: `translateX(${isRight ? '-75px' : '75px'})` },
      {
        duration: 0.5,
        delay: staggerMenuItems,
      }
    );
  }, [isEnter, animate, staggerMenuItems, isRight]);

  return {scope, isEnter};
}
