import clsx from 'clsx';
import { ChangeEventHandler, FC, useState } from 'react';
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import { Grid, makeStyles, Typography, ButtonBase, TextField, withStyles } from '@material-ui/core';
import SectionContainer from 'components/SectionContainer';
import { sectionIds } from 'models/denotation';
import VideoButton from 'components/VideoButton';
import { useStyles } from '../Greeting';
import locationSrc from '../../../../../public/location2.png';

const InputByPas = withStyles(({ palette: { background, secondary, primary, text } }) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: secondary.main
      }
    }
  }
}))(TextField);

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    container: {
      '& path': {
        strokeWidth: '0.6px'
      }
    },
    contentContainer: {
      '& .MuiOutlinedInput-input fieldset': {
        '&:hover': {
          border: '1px solid red'
        }
      },

      marginTop: 42,
      gap: 20,
      '& .formContainer': {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,

        width: 'calc(50% - 10px)',

        [breakpoints.down('sm')]: {
          width: '100%'
        },

        '& .topSitePart': {
          '& .MuiFormControl-root': {
            width: 'calc(50% - 8px)'
          }
        },
        '& .submitButtonContainer': {
          '& button': {
            height: 48,
            width: '100%'
          }
        }
      },
      '& .locationImgContainer': {
        [breakpoints.down('sm')]: {
          width: '100%'
        },
        width: '48%',
        position: 'relative',
        '& img': {
          borderRadius
        },
        '& .caption': {
          position: 'absolute',
          zIndex: 1000000000000,
          background: '#302d40cc',
          padding: 8,
          borderRadius,
          color: text.secondary,
          left: 8,
          top: 8
        }
      }
    }
  })
);

const Contact: FC = () => {
  const {
    red3Color,
    delayOSec,
    delay1Sec,
    delay2Sec,
    delay3Sec,
    delay4Sec,
    containerOfHI,
    deepPink2Color,
    dashOffset1000,
    goldenRodColor,
    steelBlue3Color,
    containerOfSvgs,
    red2VioletColor,
    dodgerBlue2Color,
    orange2GoldColor,
    containerOfIAMPAS,
    containerOfWEBDEV,
    springGreen3Color,
    containerOfCaption,
    freeSpeechBlueColor,
    lime2TurquoiseColor,
    mediumTurquoiseColor,
    blueLightVioletColor,
    mediumSlateBlueColor,
    dashOffset2050Dasharray250,
    dashOffset2000Dasharray500,
    dashOffset1000Dasharray1000,
    dashOffset1500Dasharray6000,
    dashOffset1500Dasharray1500
  } = useStyles();
  const { container, contentContainer } = useLocalStyles();

  const { enqueueSnackbar } = useSnackbar();

  const inputNames = {
    EMAIL: 'email',
    NAME: 'name',
    TITLE: 'title',
    MESSAGE: 'message'
  };
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [formState, setFormState] = useState({
    [inputNames.EMAIL]: '',
    [inputNames.NAME]: '',
    [inputNames.TITLE]: '',
    [inputNames.MESSAGE]: ''
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setFormState(state => ({ ...state, [name]: value }));
  };

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(value);
    setIsEmailValid(isEmailValid);
    setFormState(state => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    if (!isEmailValid) return enqueueSnackbar('Email is not valid', { variant: 'error' });

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
      .then(res => {
        if (res.status === 200) {
          enqueueSnackbar('Email sended', { variant: 'success' });
          return enqueueSnackbar('If u can`t find email, check spam please!', { variant: 'info' });
        }
      })
      .catch(err => enqueueSnackbar(err, { variant: 'error' }));
  };

  return (
    <Grid container className={container} alignItems={'center'} id={sectionIds.CONTACT}>
      <SectionContainer>
        <Grid container>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 190.0077 30.5847'} className={'svgContainer'}>
            <path
              className={clsx(steelBlue3Color, dashOffset1000Dasharray1000, delay1Sec)}
              d="M11.0848 22.8586C5.0633 18.9783.0762 15.7431.0024 15.6693c-.1152-.1153 3.8275-2.6809 19.1653-12.471l2.8652-1.8288.0595 4.766c.039 3.1316-.021 4.863-.1751 5.0488-.129.1555-1.7675 1.1966-3.641 2.3136-1.8736 1.117-3.4065 2.0616-3.4065 2.0992 0 .0375 1.5931 1.1744 3.5403 2.5262 1.9472 1.352 3.5859 2.5765 3.6414 2.7213.0556.1448.0741 2.2446.0412 4.6662l-.0598 4.403zM29.3703 17.5904l-3.0216-3.1385 7.0991-7.226L40.5468 0l3.0637 3.2365 3.0636 3.2365-1.7394 1.8014C41.1286 12.216 32.6091 20.7643 32.5038 20.747c-.0615-.01-1.4716-1.4305-3.1335-3.1567zM37.2435 26.2624l-3.0481-3.3307 7.143-7.1527 7.143-7.1527 1.2123 1.3216c.6667.727 2.035 2.2117 3.0406 3.2994l1.8283 1.9777-7.0078 7.1231c-3.8544 3.9178-7.0654 7.1506-7.1356 7.1841-.0702.0335-1.4993-1.4379-3.1757-3.2698zM58.069 17.7532c0-6.748.0427-12.2279.095-12.1774.0521.0505 1.916 2.9395 4.1421 6.42l4.0473 6.3282v11.6983H58.069zM75.8412 29.0856C71.8795 23.2003 58.3279 1.6911 58.3279 1.2883c0-.0826 1.8173-.1228 4.0385-.0894l4.0385.0607 4.6476 7.2733c2.5562 4.0003 4.739 7.3512 4.8504 7.4464.1116.0952.148-3.153.0808-7.2182l-.122-7.3913h8.3548v28.6525h-7.7447zM99.6869 22.721c-6.0398-3.8944-10.898-7.164-10.7962-7.2659.3706-.3706 21.9606-14.0859 22.0433-14.0032.0468.0468.0155 2.2824-.0695 4.968l-.1547 4.8828-3.4957 2.1018c-1.9226 1.156-3.447 2.1808-3.3873 2.2773.0597.0965 1.6482 1.2371 3.53 2.5347l3.4216 2.3593v1.9336c0 1.0635.0648 3.1394.144 4.613.0837 1.5553.0606 2.6795-.055 2.6795-.1096 0-5.1408-3.1864-11.1805-7.0808zM118.7098 21.9225c-.005-.2903 8.8906-20.3325 9.0229-20.328.1003.0033 8.3697 18.5743 8.9536 20.1076.1385.3634-.3755.3857-8.9132.3857-4.9831 0-9.0616-.0744-9.0633-.1653zM116.7784 26.8692l1.3284-3.153 9.5883.0123 9.5884.0123 1.4043 3.0712c.7724 1.6892 1.4043 3.1026 1.4043 3.1408 0 .0382-5.5445.0695-12.321.0695H115.45zM147.9238 22.8681c-6.021-3.884-10.9545-7.161-10.9631-7.2823-.012-.1684 16.3595-10.7867 21.1942-13.746l.8266-.506-.0218 3.82c-.012 2.101-.0864 4.3617-.1653 5.0239l-.1436 1.204-3.3504 1.9918c-1.8427 1.0956-3.4123 2.0573-3.488 2.1372-.0757.0798 1.448 1.246 3.3859 2.5914l3.5235 2.4462.144 1.8167c.0791.9991.1127 3.11.0746 4.6908l-.0692 2.8742zM172.7308 30.4194c-.005-.091-.0328-4.6285-.0603-10.0835l-.05-9.9182-3.9191-1.4326-3.9192-1.4327-.003-2.9203-.003-2.9204h25.1049v5.8706L185.9585 9.01l-3.9227 1.4277-.0628 10.0735-.0628 10.0735h-4.584c-2.5212 0-4.5887-.0744-4.5944-.1653z"
            />
            <path
              className={clsx(blueLightVioletColor, dashOffset1500Dasharray1500, delay2Sec)}
              d="M.0024 15.6693C10.4961 8.626 9.7233 7.266 22.033 1.3695c-.0313 3.2506.2543 6.6263-.1156 9.8148-9.398 5.9447-7.614 3.3198.1342 9.6603.1099 3.2088.0278 5.6564-.0186 9.0692C11.631 25.4403 7.2508 20.558.0024 15.6693zM26.3487 14.4519C32.8777 10.0809 35.8142 4.8173 40.547 0l6.1272 6.473c-3.4903 5.1277-6.5203 9.2331-14.1703 14.2741-2.2272-2.1665-3.8448-3.8955-6.155-6.2952zM34.1954 22.9317c6.5005-4.1353 9.524-9.537 14.286-14.3054 2.0824 2.2742 4.0167 4.3655 6.0812 6.5987-4.7288 4.7535-7.133 9.5571-14.1434 14.3072-2.3052-2.2165-3.9032-4.0647-6.2238-6.6005zM58.069 17.7532c0-6.748.0427-12.2279.095-12.1774 2.9184 4.4784 3.491 8.4744 8.1894 12.7482v11.6983h-4.1422c-7.3982.8454-3.6959 2.2608-4.1422-12.2691zM75.8412 29.0856C71.8104 23.0978 57.1279 2.3668 58.3279 1.2883 66.999.678 65.9604.5639 71.0525 8.5329c2.5562 4.0003 4.739 7.3512 4.8504 7.4464.1116.0952.148-3.153.0808-7.2182l-.122-7.3913h8.3548c-.1712 31.0638 2.4388 28.704-3.8724 28.6525h-3.8723zM99.6869 22.721c-14.8537-8.483-11.0793-7.2686 11.247-21.269.0469.0467.0156 2.2823-.0694 4.9679l-.1547 4.8828c-9.3039 5.3455-7.6754 3.9334.0686 9.273v1.9337c0 1.0635.0648 3.1394.1441 4.613.0836 1.5553.0605 2.6795-.055 2.6795-.1096 0-5.1409-3.1864-11.1806-7.0808zM118.7098 21.9225c.721.2844 9.0861-20.1706 9.0229-20.328-.2649-.6593 9.2498 18.5492 8.9536 20.1076-6.0177.6335-9.7662-2.3122-17.9765.2204zM118.1068 23.7162c7.1116-1.6148 12.7845.0164 19.1767.0246.9457 2.0658 1.8976 4.1323 2.8086 6.212-27.8627-.376-26.5605 2.9971-21.9853-6.2366zM136.9607 15.5858c-.012-.1684 16.3595-10.7867 21.1942-13.746l.8266-.506-.0218 3.82c.205 4.8489.3293 5.8484-3.6593 8.2197-1.8427 1.0956-3.4123 2.0573-3.488 2.1372-.0757.0798 1.448 1.246 3.3859 2.5914 4.3181 2.2167 3.8373 4.6527 3.7421 8.9537l-.0692 2.8742c-7.0532-5.0854-13.0791-10.1803-21.9105-14.3442zM172.7308 30.4194c-.005-.091-.0328-4.6285-.0603-10.0835l-.05-9.9182-3.9191-1.4326c-4.8204-1.0092-3.921-3.1345-3.9252-7.2734h25.1049c-.021 5.1059 1.265 5.4102-3.9226 7.2983l-3.9227 1.4277c-1.52 17.3606 4.5808 20.147-4.7096 20.147-2.5212 0-4.5887-.0744-4.5944-.1653z"
            />
            <path
              className={clsx(lime2TurquoiseColor, dashOffset2050Dasharray250, delayOSec)}
              d="M22.033 1.3695c-.0314 3.2506-.1479 7.8762-.5178 11.0648-14.9752 4.3106 3.9606 4.9006.5177 17.4795-26.7752-14.3898-27.2111-13.9338 0-28.5443zM40.5469 0c11.5021 9.634 4.5598 8.4298-8.043 20.7471C22.1236 13.4828 28.4834 12.5742 40.5468 0z"
            />
            <path
              className={clsx(deepPink2Color, dashOffset1500Dasharray6000, delay1Sec)}
              d="M34.1954 22.9317C49.0022 10.006 45.3877 5.3008 54.5626 15.225c-12.5898 12.6072-11.4863 17.4238-20.3672 7.7067zM58.069 17.7532c0-6.748.0427-12.2279.095-12.1774 2.9184 4.4784 3.491 8.4744 8.1894 12.7482v11.6983h-4.1422c-7.3982.8454-3.6959 2.2608-4.1422-12.2691zM58.328 1.2883C66.999.678 65.9603.5639 71.0524 8.5329c11.0213 14.735-1.6259-7.1631 8.9866-7.1631h4.1774c-.1712 31.0638 2.4388 28.704-3.8724 28.6525-7.269 1.1321-22.0895-28.5256-22.0162-28.734zM110.934 1.452c2.9313 18.0206-16.034 10.3964-.1556 19.1238v1.9336c0 1.0635.0648 3.1394.1441 4.613.0836 1.5553.0605 2.6795-.055 2.6795-22.5191-13.9754-28.8162-14.1039.0665-28.35zM127.7327 1.5945c-.7716.8867 8.7982 19.9273 8.9536 20.1076-25.7248 1.611-18.5795 2.014-8.9536-20.1076zM118.1068 23.7162c16.0286.0777 17.9218-3.0224 21.9853 6.2366-27.8627-.376-26.5605 2.9971-21.9853-6.2366z"
            />
            <path
              className={clsx(freeSpeechBlueColor, dashOffset1000Dasharray1000, delay1Sec)}
              d="M158.155 1.8397l.8265-.5059-.0218 3.82c.205 4.8489.3293 5.8484-3.6593 8.2197-4.3937 2.141-3.118 2.6284-.1021 4.7286 4.3181 2.2167 3.8373 4.6527 3.7421 8.9537l-.0692 2.8742c-26.7852-15.994-27.7818-12.5654-.7163-28.0903zM172.7308 30.4194c-.005-.091-.0328-4.6285-.0603-10.0835l-.05-9.9182-3.9191-1.4326c-4.8204-1.0092-3.921-3.1345-3.9252-7.2734h25.1049c-.021 5.1059 1.265 5.4102-3.9226 7.2983l-3.9227 1.4277c-1.52 17.3606 4.5808 20.147-4.7096 20.147-2.5212 0-4.5887-.0744-4.5944-.1653z"
            />
          </svg>
        </Grid>
        <Grid container className={contentContainer}>
          <Grid className={'formContainer'}>
            <Grid container className={'topSitePart'} justify={'space-between'}>
              <InputByPas
                name={inputNames.NAME}
                label={inputNames.NAME.toUpperCase()}
                onChange={onChange}
                value={formState[inputNames.NAME]}
                variant={'outlined'}
                color={'primary'}
              />
              <InputByPas
                name={inputNames.EMAIL}
                error={!isEmailValid}
                onChange={onEmailChange}
                value={formState[inputNames.EMAIL]}
                label={inputNames.EMAIL.toUpperCase()}
                variant={'outlined'}
                color={'primary'}
              />
            </Grid>

            <Grid container>
              <InputByPas
                fullWidth
                name={inputNames.TITLE}
                onChange={onChange}
                value={formState[inputNames.TITLE]}
                label={inputNames.TITLE.toUpperCase()}
                variant={'outlined'}
                color={'primary'}
              />
            </Grid>
            <Grid container>
              <InputByPas
                fullWidth
                multiline
                maxRows={16}
                rows={4}
                name={inputNames.MESSAGE}
                onChange={onChange}
                value={formState[inputNames.MESSAGE]}
                label={inputNames.MESSAGE.toUpperCase()}
                variant={'outlined'}
                color={'primary'}
              />
            </Grid>

            <Grid container className={'submitButtonContainer'}>
              <VideoButton onClick={handleSubmit}>
                <Typography color={'textPrimary'} variant={'button'}>
                  Send message{' '}
                </Typography>
              </VideoButton>
            </Grid>
          </Grid>

          <Grid className={'locationImgContainer'}>
            <Grid className={'caption'}>
              <Typography>ANATOLII PONOCHENIUK </Typography>
              <Typography>Ukraine / Kyiv </Typography>
              <Typography>+380951194092 </Typography>
              <Typography>whyiampas@gmail.com </Typography>
            </Grid>
            <Image src={locationSrc} alt={'Kyiv location'} layout={'responsive'} placeholder={'blur'} />
          </Grid>
        </Grid>
      </SectionContainer>
    </Grid>
  );
};

export default Contact;
