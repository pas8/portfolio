import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { getThemeProperties } from 'store/modules/App/selectors';

export type LayoutType = typeof ThemeLayout;
const useStyles = makeStyles(() => ({
  '@global': {
    '.sphereBackground': {
      backgroundImage: `url('cursor_sphere_sprite.png')`
    }
  }
}));

const ThemeLayout: FC = ({ children }) => {
  const themeProperties = useSelector(getThemeProperties);
  useStyles();
  const theme = createTheme(themeProperties);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
