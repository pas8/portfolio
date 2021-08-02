import { makeStyles, Grid } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles(({ palette: { background, secondary }, breakpoints }) => ({
  mainContainer: {
    position: 'relative'
  },
  navContainer: {
    width: 100
  }
}));

const NavLayout: FC = ({ children }) => {
  const { navContainer, mainContainer } = useStyles();

  return (
    <Grid>
      <Grid className={navContainer}>nav</Grid>
      <Grid className={mainContainer}>{children}</Grid>
    </Grid>
  );
};

export default NavLayout;
