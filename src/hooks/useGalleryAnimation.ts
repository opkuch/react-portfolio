import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export function useGalleryAnimation(trigger: boolean, isRight: boolean | null) {
  const staggerMenuItems = stagger(0.1, { ease: 'easeIn', startDelay: 0.15 });
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
        ? { opacity: 1, scale: 1, filter: "blur(0px)", transform: 'translateX(0)' }
        : { opacity: 0, scale: 0.7, filter: "blur(10px)", transform: `translateX(${isRight? '-75px' : '75px'})` },
      {
        duration: 0.25,
        delay: staggerMenuItems,

      }
    );
  }, [isEnter]);

  return scope;
}
