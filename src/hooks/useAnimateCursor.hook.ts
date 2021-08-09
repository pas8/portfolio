import { MouseEventHandler, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ACTIVE_CURSOR, HIDDEN } from 'models/denotation';

export const useAnimateCursor = ({ dot, dotOutline }: { [Property in 'dot' | 'dotOutline' ]: any }):any => {

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const delay = 10;

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(0);

  useEffect(() => {
    // document.addEventListener('mousedown', mouseOverEvent);
    // document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    // document.addEventListener('mouseenter', mouseEnterEvent);

    animateDotOutline();

    return () => {
      // document.removeEventListener('mousedown', mouseOverEvent);
      // document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      // document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleToggleCursorVisibility = (status:boolean) => {




    if (!status) {
      dot.current.style.transform ='scale(1)'
      dotOutline.current.style.opacity = 1;
      return cursorVisible.current = false
    }
   
    dot.current.style.transform ='scale(1.42)'
    dotOutline.current.style.opacity = 0;
    return cursorVisible.current = true

  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.className = `${dot.current.className} ${ACTIVE_CURSOR}`;
      return (dotOutline.current.className = `${dotOutline.current.className} ${HIDDEN}`);
    }

    dot.current.className = dot.current.className.replace(ACTIVE_CURSOR, '');
    return (dotOutline.current.className = dotOutline.current.className.replace(HIDDEN, ''));
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  // const mouseEnterEvent = () => {
  //   cursorVisible.current = true;
  //   toggleCursorVisibility();
  // };

  // const mouseLeaveEvent = () => {
  //   cursorVisible.current = false;
  //   toggleCursorVisibility();
  // };



  const mouseMoveEvent = (e: any) => {

    cursorVisible.current = true;
    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
    
 

  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;
    if (!dotOutline.current) return;
    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return { mouseOverEvent, mouseOutEvent ,handleToggleCursorVisibility};
};
