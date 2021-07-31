import { FC } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { useSelector } from 'react-redux';
import { getCursorColor } from 'store/modules/App/selectors';

const CursorLayout: FC = ({ children }) => {
const cursorColor = useSelector(getCursorColor)


  return (
    <>
      {children}
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color={cursorColor}
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={6}
      />
    </>
  );
};

export default CursorLayout;
