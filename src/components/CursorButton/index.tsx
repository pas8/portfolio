import { makeStyles, ButtonBase, Grid, Typography } from '@material-ui/core';
import { FC } from 'react';
import { colord } from 'colord';
import { CursorContext } from 'layouts/CursorLayout';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, text, primary }, breakpoints, shape: { borderRadius } }) => ({
    button: {
      overflow: 'hidden',
      position: 'relative',
      borderRadius,
      color: primary.main,
// minWidth:200,
      '&:hover': {
        '& .content': {
          color: secondary.main,
          '& svg': {
            fill: secondary.main,
            animation: 'RotationRight 2s linear infinite'
          }
        }
      },
      '& .content': {
        '& svg': {
          width:32,
          marginRight:8,
          height:32,
          fill: primary.main,
          animation: 'RotationRight 8s linear infinite',
          '& circle': {
            fill: background.default
          }
        }
      }
    }
  })
);
const CursorButton: FC<{ title: string; onClick: (e?: any) => void }> = ({ title, onClick }) => {
  const { button } = useLocalStyles();

  return (
    <CursorContext.Consumer>
      {({ mouseOutEvent, mouseOverEvent }) => (
        <ButtonBase onClick={onClick} className={button} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent}>
          <Grid container justifyContent={'center'} alignItems={'center'} className={'content'}>
          <svg viewBox={'0 0 52 52'} xmlns="http://www.w3.org/2000/svg">
                <path d="M26 34.85l-3.018 16.974.977-17.213-6.852 15.821 4.921-16.523-10.315 13.814 8.598-14.944L7.088 43.842l11.813-12.557L3.483 39l14.39-9.495-16.78 3.952 16.192-5.92-17.241-.025 17.121-2.027-16.77-4 17.127 1.977-15.396-7.76 16.21 5.873L5.145 10.474l14.418 9.453L9.288 6.083l11.849 12.523-6.806-15.84 8.642 14.918L20.004.7l4.969 16.509L26 0l1.027 17.21L31.996.7l-2.97 16.984L37.67 2.766l-6.806 15.84 11.85-12.523-10.276 13.844 14.418-9.453-13.19 11.101 16.209-5.873-15.396 7.76 17.127-1.977-16.77 4 17.121 2.027-17.24.025 16.192 5.92-16.782-3.952L48.516 39 33.1 31.285l11.813 12.557L31.689 32.78l8.598 14.944-10.315-13.814 4.92 16.523-6.851-15.82.977 17.212z"></path>
                <circle cx={'26.5'} cy={'26.5'} r={'2.5'}></circle>
              </svg>
            <Typography>
            
              {title}
            </Typography>
          </Grid>
        </ButtonBase>
      )}
    </CursorContext.Consumer>
  );
};

export default CursorButton;
