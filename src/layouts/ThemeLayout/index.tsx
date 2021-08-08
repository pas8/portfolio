import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { getThemePropertyies } from 'store/modules/App/selectors';

export type LayoutType = typeof ThemeLayout;
const useStyles = makeStyles(({ palette: { background, primary, secondary } }) => ({
  '@global': {
    '.sphereBackground': {
      backgroundImage: 'url(https://about.mav.farm/sprites/cursor-sphere-sprite.png)'
    }
  }
}));

const ThemeLayout: FC = ({ children }) => {
  const themePropertyies = useSelector(getThemePropertyies);
  useStyles();
  const theme = createTheme(themePropertyies);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
