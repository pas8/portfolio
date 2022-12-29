import { FC } from 'react';
import { makeStyles, Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { colord } from 'colord';

const useStyles = makeStyles(({ palette: { background, secondary }, shape: { borderRadius }, breakpoints }) => ({
  container: {
    width: 'calc(50% - 42px)',

    [breakpoints.down('sm')]: {
      width: '100%',
      marginBottom:16,
    },
    '& .graphicContentContainer': {
      height:'100%',
        [breakpoints.down('sm')]: {
      gap:20,
    },
    },

    '& .graphicItemContainer': {
      '& h6': {
        marginBottom: 4
      },
      '& .graphicContent': {
        borderRadius,
        height: 4,
        background: colord(secondary.main).alpha(0.16).toHex()
      }
    }
  }
}));

const MainSkillsGraphic: FC = () => {
  const { container } = useStyles();

  const graphicsItemsArr = [
    {
      title: 'Html && Css',
      color: '#74af57',
      percent: 80
    },
    {
      title: 'ReactJs',
      color: '#88d4e5',
      percent: 80
    },
    {
      title: 'TypeScript',
      color: '#4b88cf ',
      percent: 80
    },
    {
      title: 'NodeJs',
      color: '#d25350',
      percent: 86
    },
    {
      title: 'SFCC',
      color: '#f6e568',
      percent: 90
    }
  ];

  return (
    <Grid className={container}>
      <Grid container className={'graphicContentContainer'} direction={'column'} justifyContent={'space-around'}>
        {graphicsItemsArr.map(({ title, color, percent }, idx) => {
          return (
            <Grid container key={`${title}_${idx}`} className={'graphicItemContainer'}>
              <Grid container>
                <Typography color={'textSecondary'} variant={'h6'}>
                  {title}
                </Typography>
              </Grid>
              <Grid container className={'graphicContent'}>
                <Grid style={{ background: color, height: '100%', width: `${percent}%` }} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MainSkillsGraphic;
