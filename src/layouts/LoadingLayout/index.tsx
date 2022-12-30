import { FC, useEffect } from 'react';
import { useState } from 'react';
import { usePrevious } from 'react-use';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, Typography, useTheme, Zoom, Box } from '@material-ui/core';
import { getLoadingProperties } from 'store/modules/App/selectors';
import CursorButton from 'components/CursorButton/index';
const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text, common }, breakpoints, shape: { borderRadius } }) => ({
    '@global': {
      // '@keyframes gradientFillAnimation': {
      //   '0%': {
      //     fill: `linear-gradient(180deg, ${secondary.main} 0%, ${primary.main} 100%)`
      //   },
      //   '66%': {
      //     fill: `linear-gradient(180deg, ${primary.main} 0%, ${secondary.main} 100%)`
      //   },
      //   '100%': {
      //     fill: `linear-gradient(180deg, ${secondary.main} 0%, ${primary.main} 100%)`
      //   },
      // }
    },

    container: {
      position: 'fixed',
      zIndex: 20000,

      background: common.black,

      backdropFilter: 'blur(10px)',
      inset: 0,
      userSelect: 'none',
      '& .topPart': {
        '& svg': {
          marginTop: 20,

          '& path': {
            strokeWidth: '2px'
          }
        }
      },
      '& .mainPart': {
        [breakpoints.down('xl')]: {
          width: '50%'
        },
        [breakpoints.down('lg')]: {
          width: '80%'
        },

        [breakpoints.down('sm')]: {
          width: '100%'
        }
      },
      '& .bottomPart': {
        '& .percentLineContainer': {
          height: 6,
          background: colord(secondary.main).alpha(0.2).toHex(),
          '& .content': {
            height: '100%'
          }
        }
      }
    }
  })
);
const LoadingLayout: FC = ({ children }) => {
  extend([mixPlugin]);
  const { container } = useLocalStyles();
  const [isAllWasLoaded, setIsAllWasLoaded] = useState(false);
  const [isAwaited, setIsAwaited] = useState(false);
  const [isLoadingLayoutShoulBeHidden, setIsLoadingLayoutShoulBeHidden] = useState(false);
  const [isLoadingLayoutHidden, setIsLoadingLayoutHidden] = useState(false);

  const { percent, isLoading } = useSelector(getLoadingProperties);
  const previuosIsLoading = usePrevious(isLoading);

  useEffect(() => {
    if (!!previuosIsLoading && !isLoading) {
      setIsAllWasLoaded(true);
      setTimeout(() => {
        setIsAwaited(true);
      }, 10000);
    }
  }, [previuosIsLoading, isLoading]);

  useEffect(() => {
    if (!isAwaited) return;
    
    setTimeout(() => {
      setIsLoadingLayoutShoulBeHidden(true);
      setTimeout(() => {
        setIsLoadingLayoutHidden(true);
      }, 1200);
    }, 2000);
  }, [isAwaited]);

  const { palette } = useTheme();

  const color = colord(palette.primary.main)
    .mix(palette.secondary.main, percent / 100)
    .toHex();

  return (
    <>
      {!isLoadingLayoutHidden && (
        <Zoom in={!isLoadingLayoutShoulBeHidden}>
          <Grid
            className={container}
            alignItems={'center'}
            container
            justifyContent={'space-between'}
            direction={'column'}
          >
            <Grid container className={'topPart'} justifyContent={'center'}>
              {!isAllWasLoaded ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.1256 63.3828" width={180}>
                  <path
                    fill="none"
                    stroke={color}
                    d="M.5945 59.7968C-.1092 59.5128-.2344.6578.4695.9.7067.9817 3.414 3.5396 6.485 6.5844l5.584 5.536v14.6572c0 9.3066.1694 14.9738.464 15.5243.4153.7759 1.7377-.396 12.5885-11.1557l12.1246-12.0227.2226-9.4831.223-9.4831 5.0887-.1267c3.7714-.094 5.1828.0215 5.452.4456.1995.3147.3662 5.6843.37 11.9323l.0075 11.36L36.7437 35.641c-6.9716 6.9752-11.7398 12.0772-11.5596 12.3688.2124.3438 3.8257.4963 11.7619.4963H48.401l5.2852 5.299c3.0469 3.0547 5.1558 5.5081 4.9799 5.7929-.2189.3538-8.4189.484-28.9095.4588-15.7323-.0193-28.8549-.1364-29.1613-.26zM106.9237 59.175c-.1602-.2592 1.97-2.7632 4.7338-5.5645l5.0252-5.0932 15.5895-.117c10.665-.0802 15.6402-.269 15.7498-.5981.088-.2646-5.1686-5.779-11.6814-12.2543l-11.8417-11.7733-9.2253-.2228-9.2253-.2228V12.1887l11.3631-.109 11.3631-.109c8.4123 7.464 15.5599 16.5363 24.2916 23.6125.7536 0 .8854-1.835.8854-12.3193V12.3543l5.0132-5.032c2.7572-2.7675 5.364-5.1547 5.7929-5.3047.7374-.258.7798 1.2734.7798 28.1432 0 21.5071-.13 28.546-.5347 28.9507-.7173.7172-57.6365.7794-58.079.0634zM214.9326 63.0855c-.1633-.1634-.2971-5.3256-.2971-11.4715V40.4396l12.1429-12.1568c9.6758-9.6868 12.007-12.2437 11.4744-12.5847-.38-.2433-5.474-.4334-11.8086-.4408l-11.1403-.0128-5.1645-5.044c-2.8405-2.7743-5.2785-5.48-5.4178-6.013l-.2533-.9687 29.258.1145 29.258.1146.1157 28.9647c.0639 15.9306.0038 29.254-.13 29.6075-.1694.443-1.9703-1.0775-5.7913-4.8893l-5.5455-5.5321-.1175-15.1632c-.1092-14.1593-.169-15.1545-.8972-15.0322-1.179.198-23.945 22.9356-23.9866 23.9565-.0189.4767-.0037 4.5116.034 8.9665.0635 7.687.0227 8.1241-.8266 8.578-.963.5154-10.413.6724-10.9042.1812z"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.3 65" width={360}>
                  <path
                    fill="none"
                    stroke={color}
                    d="M7 47L26 3l20 44H7zM0 65l3-7 3-7h41l3 7 3 7H0zM74 58l-11-7V3h18v41l2-3 3-3 2 3 3 3V3h17v48l-10 7-12 7-12-7zM137 43V21l-8-3-8-3V3h50v12l-8 3-8 3v44h-18zM180 38l-7-7 15-16 16-15 7 7 6 7-15 15-16 16-6-7zM197 57l-7-7 16-16 15-15 7 7 6 7-15 16-16 15zM249 38l-6-7 15-16 16-15 6 7 7 7-15 15-16 16-7-7zM266 57l-6-7 15-16 16-15 6 6 7 8-16 16-15 15zM313 48V30h11c8 0 11 0 10-1a364 364 0 00-20-26l10-1h11l11 14 10 14v10h-19v25h-24zM368 10V2h43v16h-43zM368 33v-7h43v15h-43zM368 57v-8h43v16h-43zM425 39V13l8 13 7 14v25h-15zM450 49l-16-31-9-15h8l8 1 9 15 8 15V3h16v16l-1 31v15h-14zM516 43l1-21h9l10-1v44h-20zM570 48L547 6l-2-3h15l9 16 9 16V3h15v62h-14zM545 38c0-22 0-26 1-25l7 14 7 12v26h-15zM516 10V3h20v15h-20z"
                  />
                </svg>
              )}
            </Grid>

            <Grid container className={'mainPart'}>
              <svg viewBox="16 0 500 350">
                <path
                  id="motionPath"
                  fill="none"
                  stroke={color}
                  stroke-miterlimit="4"
                  d="M202 58c-13 0-33 1-44 9-14 11-27 30-32 46-8 22-14 48-4 70 13 29 47 44 69 64 39 42 58 23 97 24 13 1 25 9 38 10 19 1 34-8 51-15 24-11 38-44 41-69 2-17 3-35-10-47-10-8-23-8-34-14-31-13-43-44-68-51l-21-8-14-7c-7-4-13-8-20-9l-18-2-31-1"
                />

                <g id="car" transform="scale (-1, 1) translate(-234.4, -196)" stroke={color} fill="none">
                  <path d="M234.4,182.8c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4C240.8,185.6,238,182.8,234.4,182.8z" />
                  <circle cx="234.4" cy="189.2" r="2.8" />
                  <path d="M263,182.8c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4c3.5,0,6.4-2.9,6.4-6.4C269.4,185.6,266.6,182.8,263,182.8z" />
                  <circle cx="263" cy="189.2" r="2.8" />
                  <path
                    d="M275,171.4c-2.8-0.7-5.2-3-6.3-5.1l-3.9-7.4c-1.1-2.1-3.9-3.8-6.3-3.8h-22.6c-2.4,0-5,1.8-5.7,4.1l-2.4,7
    c-0.2,0.9-1.8,5.5-5,5.5c-2.4,0-5,3.1-5,5.5v8.2c0,2.4,1.9,4.3,4.3,4.3h4.5c0-0.2,0-0.3,0-0.5c0-4.3,3.5-7.8,7.8-7.8
    c4.3,0,7.8,3.5,7.8,7.8c0,0.2,0,0.3,0,0.5h13.1c0-0.2,0-0.3,0-0.5c0-4.3,3.5-7.8,7.8-7.8s7.8,3.5,7.8,7.8c0,0.2,0,0.3,0,0.5h8.1
    c2.4,0,4.3-1.9,4.3-4.3v-6.5C283.2,172,277.3,172,275,171.4z"
                  />
                  <path d="M241.8,170.3h-12.5c0.7-1.1,1.1-2.2,1.2-2.6l2-5.9c0.6-1.9,2.8-3.5,4.8-3.5h4.5V170.3z" />
                  <path d="M246.1,170.3v-12h10.4c2,0,4.4,1.5,5.3,3.3l3.3,6.3c0.4,0.8,1.1,1.7,2,2.4H246.1z" />
                </g>
                {!isAllWasLoaded ? (
                  <path
                    fill="none"
                    stroke={color}
                    d="M171 177c0-13 0-16 1-15l24 31h-25zm24 2l-4-3 3-3 7-8 6-5 3 3 4 4-14 14-2 2zm8 10l-3-4a178 178 0 0116-15l3 3 4 4-3 2-13 14zm23-5a869 869 0 0110-22 1515 1515 0 0010 22zm-3 7l2-3v-2h21l2 3 2 4h-27zm31-6v-24a2105 2105 0 0125 16l-2 1a4173 4173 0 00-23 15zm31-3v-11h10v22h-10zm0-17v-4h10v8h-10zm16 14v-13l1 2 5 7 3 5v13h-9zm15 6l-15-24h9l6 9 5 7v-16h9v32h-9zm37-24h12a548 548 0 01-18 30l-1 2h-12zm-4 32l9-14 9 14z"
                  />
                ) : (
                  <g transform=" translate(10 -8)">
                    <path fill={color}>
                      <animate
                        attributeName="d"
                        dur="10500ms"
                        values="
                      
                    M214 144l-14-30 29-1h30l-2 2a6267 6267 0 00-28 59l-15-30zM216 249l-15-1 16-31 33-67 18-37h39a10516 10516 0 01-68 135l-4 2-19-1z;
                    M211 157l-9-11 22-23 22-23 10 10 10 11c0 1-44 46-45 45l-10-9zM210 208l-9-11 32-33 35-36 3-3 11 11 10 12-66 65-6 5zM234 234l-10-10 22-22 23-23 11 10 9 10-4 4c-10 12-40 41-41 41l-10-10z;
                    M196 241l61-107 14-25h19l19 1-37 68-38 67h-40zM195 126v-17h68l-2 4-10 16-7 14h-49z;
                    M192 244l69-135h19l19 1-18 34-33 67-16 34h-20l-20-1zM242 244l29-60 29 61a697 697 0 01-58-1z;
                    M204 127v-18h93v37h-93zM223 189l-19-15v-22h30l32 25 31 25c1 1-11 1-28 1h-28zM204 227v-18h93v36h-93z;
                    M260 213v-33h-18l-18-1 66-64 1 65v65h-31zM218 140v-31h33c17 0 32 0 31 1l-63 61-1-31z;
                   M245 192l-8-12c-1-1 13-20 15-22h44l-8 11-8 11 8 10 8 12h-44zM249 148l-46-1v-38h93v39zM203 228v-16h93v33h-93z;                      
                    M201 200l32-25 30-24h28v23l-17 14-18 14h-29c-28 0-28 0-26-2zM199 226v-18h92v36h-92zM199 127v-18h92v37h-92z;
                    M206 143l-1-18 1-16h67v35h-34c-26 1-33 0-33-1zM230 199v-48h43v95h-43z;
                    M214 210l-34-34 35-34 34-35 34 34c18 18 33 35 33 36l-35 35-33 32z;"
                      />
                    </path>
                  </g>
                )}
                <animateMotion
                  xlinkHref="#car"
                  dur="8s"
                  begin="0s"
                  fill="freeze"
                  repeatCount="indefinite"
                  rotate="auto-reverse"
                >
                  <mpath xlinkHref="#motionPath" />
                </animateMotion>
              </svg>
            </Grid>
            <Grid container className={'bottomPart'}>
              <Grid container justifyContent={'center'}>
                {!isAllWasLoaded ? (
                  <Typography
                    variant={'h2'}
                    style={{
                      color,
                      marginBottom: 20
                    }}
                  >{`${~~percent}%`}</Typography>
                ) : (
                  <Box mb={2}>
                    <CursorButton onClick={() => setIsLoadingLayoutShoulBeHidden(true)} title={'Open!'} />
                  </Box>
                )}
              </Grid>
              <Grid className={'percentLineContainer'} container>
                <Grid className={'content'} container>
                  {Array(100)
                    .fill('')
                    .map((__, idx) => {
                      const IDX = idx + 1;

                      const backgroundColor = colord(palette.primary.main)
                        .mix(palette.secondary.main, IDX / 100)
                        .toHex();
                      setIsLoadingLayoutShoulBeHidden;
                      if (percent < IDX) return null;
                      return (
                        <Grid
                          key={`percentLineItem_${idx}`}
                          style={{
                            height: '100%',
                            width: '1%',
                            backgroundColor
                          }}
                        ></Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Zoom>
      )}
      {children}
    </>
  );
};
export default LoadingLayout;
