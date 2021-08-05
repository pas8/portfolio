import { FC } from 'react';
import { makeStyles, Grid, Typography, Dialog } from '@material-ui/core';
import { colord } from 'colord';
import clsx from 'clsx';

const useLocalStyles = makeStyles(
  ({ palette: { background, primary, secondary }, shape: { borderRadius }, breakpoints }) => ({
    container: {
      borderRadius,

      backdropFilter: 'blur(10px)',
      background: colord(secondary.main).alpha(0.04).toHex(),
      padding: 32
    }
  })
);

const SectionContainer: FC<{className?:any}> = ({ children,className }) => {
  const { container } = useLocalStyles();

  return (
    <Grid component={'section'} className={clsx(container,className)}  container>
      {children}
    </Grid>
  );
};

export default SectionContainer;
