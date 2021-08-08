import { makeStyles } from '@material-ui/core';
import { FC } from 'react';
import {  extend } from 'colord';
import lchPlugin from 'colord/plugins/lch';
import { useSelector, useDispatch } from 'react-redux';
import { getCursorColor, getIsRandomColorChangingDisabled } from 'store/modules/App/selectors';
import { toChangeCursorColor } from 'store/modules/App/actions';

const useStyles = makeStyles(({ palette: { background, primary, secondary } }) => ({}));

const ColorLayout: FC = ({ children }) => {
  extend([lchPlugin]);
  const dispatch = useDispatch();

  const cursorColor = useSelector(getCursorColor);
  const isRandomColorChangingDisabled = useSelector(getIsRandomColorChangingDisabled);
  const {} = useStyles();

  // useEffect(() => {

  //     setInterval(() => {
  //       const newCursorColor = colord({ l: 92, c: 132, h: random(0, 360) }).toHex();
  //       console.log(isRandomColorChangingDisabled)

  //       !isRandomColorChangingDisabled && dispatch(toChangeCursorColor({ cursorColor: newCursorColor }));
  //     }, 4000);
  // }, [isRandomColorChangingDisabled]);

  return <>{children}</>;
};

export default ColorLayout;
