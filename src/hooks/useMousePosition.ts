
import React, { useCallback } from 'react';

const mouseMoveHandler = (e: MouseEvent) => {
    const y = e.clientY;
    const x = e.clientX;

    let moveX = x > 0 ? -x : x;
    let moveY = y > 0 ? -y : y;
    return {
        moveX,
        moveY
    }
};

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
        moveX: 0,
        moveY: 0,
    });
    const updateMousePosition = useCallback((e: MouseEvent) => {
        const position = mouseMoveHandler(e)
        setMousePosition(position);
    }, [mousePosition]);
    React.useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
}

export default useMousePosition