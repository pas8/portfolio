import { makeStyles, Grid, Typography } from '@material-ui/core';
import { FC } from 'react';
import SectionContainer from 'components/SectionContainer';
import CursorButton from 'components/CursorButton';
import { useBreakpointNames } from 'hooks/useBreakpointNames.hook';

const useStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    container: {
      marginBottom: 42,
      '& .contentContainer': { display: 'flex', gap: 42,[breakpoints.down('xs')]:{'& a':{width:'100%',},gap:16} },
      '& .titleContainer': { marginBottom: 16 }
    }
  })
);

const Inspired: FC = () => {
  const { isSizeSmall, isSizeIsSm, isSizeIsXs } = useBreakpointNames();

  const { container } = useStyles();

  return (
    <SectionContainer className={container}>
      <Grid
        container
        direction={isSizeSmall ? 'column' : 'row'}
        alignItems={isSizeIsSm ? 'flex-start' : 'center'}
        justifyContent={'space-between'}
      >
        <Grid className={'titleContainer'}>
          <Typography variant={'h6'} color={'textSecondary'}>
            Inspired by:
          </Typography>
        </Grid>

        <Grid className={'contentContainer'} container={isSizeIsXs} alignItems={isSizeIsXs ? 'center' : undefined}>
          <CursorButton title={'MavFarm'} href={'https://about.mav.farm/mavfarm'} />
          <CursorButton title={'Jack'} href={'https://jacekjeznach.com/'} />
          <CursorButton title={'MySelf'} href={'https://github.com/pas8'} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Inspired;
