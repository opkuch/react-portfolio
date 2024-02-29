import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export function useGalleryAnimation(trigger: boolean) {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const [isEnter, setIsEnter] = useState(false)
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setIsEnter(false)
    setTimeout(() => setIsEnter(true), 700)
  }, [trigger])

  useEffect(() => {
  
    animate(
      "li",
      isEnter
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.7, filter: "blur(20px)" },
      {
        duration: 0.3,
        delay: isEnter ? staggerMenuItems : 0,

      }
    );
  }, [isEnter]);

  return scope;
}
