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
    '& .graficContentContainer': {
      height:'100%',
        [breakpoints.down('sm')]: {
      gap:20,
    },
    },

    '& .graficItemContainer': {
      '& h6': {
        marginBottom: 4
      },
      '& .graficContent': {
        borderRadius,
        height: 4,
        background: colord(secondary.main).alpha(0.16).toHex()
      }
    }
  }
}));

const MainSkillsGrafic: FC = () => {
  const { container } = useStyles();

  const graficsItemsArr = [
    {
      title: 'Html || Pug',
      color: '#74af57',
      percent: 68
    },
    {
      title: 'Css || Scss || Jss',
      color: '#de617b',
      percent: 64
    },
    {
      title: 'ReactJs',
      color: '#88d4e5',
      percent: 80
    },
    {
      title: 'TypeScript',
      color: '#4b88cf ',
      percent: 58
    },

    {
      title: 'JavaScript',
      color: '#f6e568 ',
      percent: 60
    },

    {
      title: 'Express || NextApi',
      color: '#d25350',
      percent: 42
    }
  ];

  return (
    <Grid className={container}>
      <Grid container className={'graficContentContainer'} direction={'column'} justifyContent={'space-around'}>
        {graficsItemsArr.map(({ title, color, percent }, idx) => {
          return (
            <Grid container key={`${title}_${idx}`} className={'graficItemContainer'}>
              <Grid container>
                <Typography color={'textSecondary'} variant={'h6'}>
                  {title}
                </Typography>
              </Grid>
              <Grid container className={'graficContent'}>
                <Grid style={{ background: color, height: '100%', width: `${percent}%` }} />
              </Grid>
            </Grid>
          );
        })}
        {/* <Grid container></Grid> */}
      </Grid>
    </Grid>
  );
};

export default MainSkillsGrafic;
