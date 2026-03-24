import { useEffect, useState } from "react"

const useProgressiveImage = (src: string) => {  
    const [sourceLoaded, setSourceLoaded] = useState('')
  
    useEffect(() => {
      let cancelled = false
      const img = new Image()
      img.src = src
      img.onload = () => {
        if (!cancelled) setSourceLoaded(src)
      }
      return () => { cancelled = true }
    }, [src])
  
    return sourceLoaded 
  }
  
  export default useProgressiveImage