import { MouseEventHandler, useEffect, useRef } from 'react';
import { ACTIVE_CURSOR, HIDDEN } from 'models/denotation';

export const useAnimateCursor = ({ dot, dotOutline }: { [Property in 'dot' | 'dotOutline']: any }) => {
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const delay = 10;

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(0);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      return (dotOutline.current.style.opacity = 1);
    }
    dot.current.style.opacity = 0;
    dotOutline.current.style.opacity = 0;
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dotOutline.current.classList.add(ACTIVE_CURSOR);
      return dotOutline.current.classList.add(HIDDEN);
    }
    dotOutline.current.classList.remove(ACTIVE_CURSOR);
    return dotOutline.current.classList.remove(HIDDEN);
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: any) => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return {mouseOverEvent,mouseOutEvent}
};
