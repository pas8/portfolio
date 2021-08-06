import { FC } from 'react';
import clsx from 'clsx';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, Typography, ButtonBase, TextField, withStyles, useTheme } from '@material-ui/core';
import { getLoadingProperyies } from 'store/modules/App/selectors';
import { useStyles } from 'components/Main/components/Greeting';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    container: {
      position: 'fixed',
      zIndex: 20000,
      background: '#252429',
      inset: 0,
      userSelect: 'none',
      '& .topPart': {
        '& svg': {
          marginTop: 20,
          width: 280
        }
      },
      '& .mainPart': {
        width: '92%'
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
    primaryMainColor,
    containerOfIAMPAS,
    containerOfWEBDEV,
    springGreen3Color,
    containerOfCaption,
    secondaryMainColor,
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

  const { isLoading, percent } = useSelector(getLoadingProperyies);
  const { palette } = useTheme();
  if (!isLoading) return <>{children}</>;

  return (
    <Grid className={container} alignItems={'center'} container justifyContent={'space-between'} direction={'column'}>
      <Grid container className={'topPart'} justifyContent={'center'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.1256 63.3828" className={'svgContainer'}>
          <path
            className={clsx(primaryMainColor, dashOffset1000Dasharray1000, delay4Sec)}
            d="M.5945 59.7968C-.1092 59.5128-.2344.6578.4695.9.7067.9817 3.414 3.5396 6.485 6.5844l5.584 5.536v14.6572c0 9.3066.1694 14.9738.464 15.5243.4153.7759 1.7377-.396 12.5885-11.1557l12.1246-12.0227.2226-9.4831.223-9.4831 5.0887-.1267c3.7714-.094 5.1828.0215 5.452.4456.1995.3147.3662 5.6843.37 11.9323l.0075 11.36L36.7437 35.641c-6.9716 6.9752-11.7398 12.0772-11.5596 12.3688.2124.3438 3.8257.4963 11.7619.4963H48.401l5.2852 5.299c3.0469 3.0547 5.1558 5.5081 4.9799 5.7929-.2189.3538-8.4189.484-28.9095.4588-15.7323-.0193-28.8549-.1364-29.1613-.26zM106.9237 59.175c-.1602-.2592 1.97-2.7632 4.7338-5.5645l5.0252-5.0932 15.5895-.117c10.665-.0802 15.6402-.269 15.7498-.5981.088-.2646-5.1686-5.779-11.6814-12.2543l-11.8417-11.7733-9.2253-.2228-9.2253-.2228V12.1887l11.3631-.109 11.3631-.109c8.4123 7.464 15.5599 16.5363 24.2916 23.6125.7536 0 .8854-1.835.8854-12.3193V12.3543l5.0132-5.032c2.7572-2.7675 5.364-5.1547 5.7929-5.3047.7374-.258.7798 1.2734.7798 28.1432 0 21.5071-.13 28.546-.5347 28.9507-.7173.7172-57.6365.7794-58.079.0634zM214.9326 63.0855c-.1633-.1634-.2971-5.3256-.2971-11.4715V40.4396l12.1429-12.1568c9.6758-9.6868 12.007-12.2437 11.4744-12.5847-.38-.2433-5.474-.4334-11.8086-.4408l-11.1403-.0128-5.1645-5.044c-2.8405-2.7743-5.2785-5.48-5.4178-6.013l-.2533-.9687 29.258.1145 29.258.1146.1157 28.9647c.0639 15.9306.0038 29.254-.13 29.6075-.1694.443-1.9703-1.0775-5.7913-4.8893l-5.5455-5.5321-.1175-15.1632c-.1092-14.1593-.169-15.1545-.8972-15.0322-1.179.198-23.945 22.9356-23.9866 23.9565-.0189.4767-.0037 4.5116.034 8.9665.0635 7.687.0227 8.1241-.8266 8.578-.963.5154-10.413.6724-10.9042.1812z"
          />
          <path
            className={clsx(secondaryMainColor, dashOffset1500Dasharray1500, delay1Sec)}
            d="M.5945 59.7968C-.1092 59.5128-.2344.6578.4695.9.7067.9817 3.414 3.5396 6.485 6.5844l5.584 5.536v14.6572c0 9.3066.1694 14.9738.464 15.5243.4153.7759 1.7377-.396 12.5885-11.1557l12.1246-12.0227.2226-9.4831.223-9.4831 5.0887-.1267c3.7714-.094 5.1828.0215 5.452.4456.1995.3147.3662 5.6843.37 11.9323l.0075 11.36L36.7437 35.641c-6.9716 6.9752-11.7398 12.0772-11.5596 12.3688.2124.3438 3.8257.4963 11.7619.4963H48.401l5.2852 5.299c3.0469 3.0547 5.1558 5.5081 4.9799 5.7929-.2189.3538-8.4189.484-28.9095.4588-15.7323-.0193-28.8549-.1364-29.1613-.26zM106.9237 59.175c-.1602-.2592 1.97-2.7632 4.7338-5.5645l5.0252-5.0932 15.5895-.117c10.665-.0802 15.6402-.269 15.7498-.5981.088-.2646-5.1686-5.779-11.6814-12.2543l-11.8417-11.7733-9.2253-.2228-9.2253-.2228V12.1887l11.3631-.109 11.3631-.109c8.4123 7.464 15.5599 16.5363 24.2916 23.6125.7536 0 .8854-1.835.8854-12.3193V12.3543l5.0132-5.032c2.7572-2.7675 5.364-5.1547 5.7929-5.3047.7374-.258.7798 1.2734.7798 28.1432 0 21.5071-.13 28.546-.5347 28.9507-.7173.7172-57.6365.7794-58.079.0634zM214.9326 63.0855c-.1633-.1634-.2971-5.3256-.2971-11.4715V40.4396l12.1429-12.1568c9.6758-9.6868 12.007-12.2437 11.4744-12.5847-.38-.2433-5.474-.4334-11.8086-.4408l-11.1403-.0128-5.1645-5.044c-2.8405-2.7743-5.2785-5.48-5.4178-6.013l-.2533-.9687 29.258.1145 29.258.1146.1157 28.9647c.0639 15.9306.0038 29.254-.13 29.6075-.1694.443-1.9703-1.0775-5.7913-4.8893l-5.5455-5.5321-.1175-15.1632c-.1092-14.1593-.169-15.1545-.8972-15.0322-1.179.198-23.945 22.9356-23.9866 23.9565-.0189.4767-.0037 4.5116.034 8.9665.0635 7.687.0227 8.1241-.8266 8.578-.963.5154-10.413.6724-10.9042.1812z"
          />
          <path
            className={clsx(primaryMainColor, dashOffset1500Dasharray6000, delay2Sec)}
            d="M.5945 59.7968C-.1092 59.5128-.2344.6578.4695.9.7067.9817 3.414 3.5396 6.485 6.5844l5.584 5.536v14.6572c0 9.3066.1694 14.9738.464 15.5243.4153.7759 1.7377-.396 12.5885-11.1557l12.1246-12.0227.2226-9.4831.223-9.4831 5.0887-.1267c3.7714-.094 5.1828.0215 5.452.4456.1995.3147.3662 5.6843.37 11.9323l.0075 11.36L36.7437 35.641c-6.9716 6.9752-11.7398 12.0772-11.5596 12.3688.2124.3438 3.8257.4963 11.7619.4963H48.401l5.2852 5.299c3.0469 3.0547 5.1558 5.5081 4.9799 5.7929-.2189.3538-8.4189.484-28.9095.4588-15.7323-.0193-28.8549-.1364-29.1613-.26zM106.9237 59.175c-.1602-.2592 1.97-2.7632 4.7338-5.5645l5.0252-5.0932 15.5895-.117c10.665-.0802 15.6402-.269 15.7498-.5981.088-.2646-5.1686-5.779-11.6814-12.2543l-11.8417-11.7733-9.2253-.2228-9.2253-.2228V12.1887l11.3631-.109 11.3631-.109c8.4123 7.464 15.5599 16.5363 24.2916 23.6125.7536 0 .8854-1.835.8854-12.3193V12.3543l5.0132-5.032c2.7572-2.7675 5.364-5.1547 5.7929-5.3047.7374-.258.7798 1.2734.7798 28.1432 0 21.5071-.13 28.546-.5347 28.9507-.7173.7172-57.6365.7794-58.079.0634zM214.9326 63.0855c-.1633-.1634-.2971-5.3256-.2971-11.4715V40.4396l12.1429-12.1568c9.6758-9.6868 12.007-12.2437 11.4744-12.5847-.38-.2433-5.474-.4334-11.8086-.4408l-11.1403-.0128-5.1645-5.044c-2.8405-2.7743-5.2785-5.48-5.4178-6.013l-.2533-.9687 29.258.1145 29.258.1146.1157 28.9647c.0639 15.9306.0038 29.254-.13 29.6075-.1694.443-1.9703-1.0775-5.7913-4.8893l-5.5455-5.5321-.1175-15.1632c-.1092-14.1593-.169-15.1545-.8972-15.0322-1.179.198-23.945 22.9356-23.9866 23.9565-.0189.4767-.0037 4.5116.034 8.9665.0635 7.687.0227 8.1241-.8266 8.578-.963.5154-10.413.6724-10.9042.1812z"
          />
          <path
            className={clsx(secondaryMainColor, dashOffset2000Dasharray500, delay3Sec)}
            d="M.5945 59.7968C-.1092 59.5128-.2344.6578.4695.9.7067.9817 3.414 3.5396 6.485 6.5844l5.584 5.536v14.6572c0 9.3066.1694 14.9738.464 15.5243.4153.7759 1.7377-.396 12.5885-11.1557l12.1246-12.0227.2226-9.4831.223-9.4831 5.0887-.1267c3.7714-.094 5.1828.0215 5.452.4456.1995.3147.3662 5.6843.37 11.9323l.0075 11.36L36.7437 35.641c-6.9716 6.9752-11.7398 12.0772-11.5596 12.3688.2124.3438 3.8257.4963 11.7619.4963H48.401l5.2852 5.299c3.0469 3.0547 5.1558 5.5081 4.9799 5.7929-.2189.3538-8.4189.484-28.9095.4588-15.7323-.0193-28.8549-.1364-29.1613-.26zM106.9237 59.175c-.1602-.2592 1.97-2.7632 4.7338-5.5645l5.0252-5.0932 15.5895-.117c10.665-.0802 15.6402-.269 15.7498-.5981.088-.2646-5.1686-5.779-11.6814-12.2543l-11.8417-11.7733-9.2253-.2228-9.2253-.2228V12.1887l11.3631-.109 11.3631-.109c8.4123 7.464 15.5599 16.5363 24.2916 23.6125.7536 0 .8854-1.835.8854-12.3193V12.3543l5.0132-5.032c2.7572-2.7675 5.364-5.1547 5.7929-5.3047.7374-.258.7798 1.2734.7798 28.1432 0 21.5071-.13 28.546-.5347 28.9507-.7173.7172-57.6365.7794-58.079.0634zM214.9326 63.0855c-.1633-.1634-.2971-5.3256-.2971-11.4715V40.4396l12.1429-12.1568c9.6758-9.6868 12.007-12.2437 11.4744-12.5847-.38-.2433-5.474-.4334-11.8086-.4408l-11.1403-.0128-5.1645-5.044c-2.8405-2.7743-5.2785-5.48-5.4178-6.013l-.2533-.9687 29.258.1145 29.258.1146.1157 28.9647c.0639 15.9306.0038 29.254-.13 29.6075-.1694.443-1.9703-1.0775-5.7913-4.8893l-5.5455-5.5321-.1175-15.1632c-.1092-14.1593-.169-15.1545-.8972-15.0322-1.179.198-23.945 22.9356-23.9866 23.9565-.0189.4767-.0037 4.5116.034 8.9665.0635 7.687.0227 8.1241-.8266 8.578-.963.5154-10.413.6724-10.9042.1812z"
          />
        </svg>
      </Grid>

      <Grid container className={'mainPart'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 787.333 135.9397'} className={'svgContainer'}>
          <path
            className={clsx(secondaryMainColor, dashOffset1000Dasharray1000, delayOSec)}
            d="M.0017 69.0026c0-53.7308.149-63.2083.98-62.3215 1.296 1.3831 97.1605 123.6425 97.8536 124.796.427.7108-9.5907.8928-49.1486.8928H.0017zM94.397 78.058L80.578 63.7715l9.3079-9.8079c5.1193-5.3943 19.266-19.7429 31.4368-31.8857L143.4517 0l13.4535 13.7688c7.3995 7.5729 13.5439 14.0019 13.6542 14.2867.1644.4245-31.044 32.675-56.5217 58.409l-5.8217 5.8802zM129.1986 116.5928c-7.219-7.8917-13.2116-14.722-13.317-15.1785-.1052-.4566 13.9522-14.9665 31.2388-32.2444 27.418-27.404 31.5588-31.2794 32.4374-30.3572.554.5815 6.6681 7.1486 13.587 14.5935l12.58 13.5364-9.8383 10.035c-30.4104 31.0187-53.0743 53.9637-53.3024 53.9637-.143 0-6.1665-6.4568-13.3855-14.3485zM219.8588 96.7267c0-1.1496 39.0193-89.3761 39.9309-90.2876.325-.3251 1.0826.6353 1.6834 2.1342.6009 1.4988 9.2007 21.0466 19.1108 43.4395 9.9101 22.3928 18.4661 41.7589 19.0134 43.0357l.995 2.3214h-40.3668c-23.4623 0-40.3667-.2694-40.3667-.6432zM208.8991 124.6913c1.7807-4.2232 4.3951-10.491 5.8098-13.9285l2.5722-6.25h85.1204l5.9996 13.3928c3.2998 7.366 6.1217 13.634 6.2708 13.9286.1492.2946-24.3171.5357-54.3696.5357h-54.6408zM332.8588 101.773c0-16.8284-.214-45.6595-.4757-64.0691l-.4756-33.4721 2.4399 1.4688c1.342.8079 21.0827 13.5025 43.8683 28.2102 22.7857 14.7077 44.2347 28.4939 47.6646 30.636 3.4298 2.142 6.2391 4.0552 6.243 4.2517.0038.1964-3.2845 2.4355-7.3075 4.9758-4.0229 2.5403-26.2232 16.7635-49.334 31.6071-23.1107 14.8437-42.1552 26.9885-42.3212 26.9885-.166 0-.302-13.7686-.302-30.597zM456.43 88.4413V44.5128h40v87.8571h-40zM456.43 20.9413V5.227h40v31.4286h-40zM521.316 78.1241l.0013-54.4642 5.5413 8.5714c3.0478 4.7143 11.344 17.651 18.436 28.7484l12.8945 20.177v51.4317h-36.8744l.0012-54.4643zM581.059 99.8997c-20.5863-31.8307-58.9062-93.3449-58.9062-94.561 0-.8216 32.0488-.778 34.5948.047 1.555.504 6.8217 8.1867 22.8916 33.393 18.6994 29.3309 20.902 32.478 21.1613 30.2383.1592-1.375.1573-16.241-.0037-33.0357l-.2948-30.5357h37.3032V47.472c0 23.1146-.2494 51.7217-.5541 63.5714l-.5542 21.545-17.2545-.0103-17.2545-.0102zM730.1148 4.8699l30.463-.1922c9.5213-.0601 17.3106.0269 17.3106.2947 0 1.3402-35.0645 61.566-48.389 83.1118-8.382 13.5536-17.9219 29.052-21.1997 34.4409l-5.9597 9.798-16.6134.0234-29.7659.0235c26.2903-45.212 53.1547-91.396 74.1541-127.5zM714.4747 131.9968c0-.7305 34.698-55.341 35.1555-55.3304.4064.0095 34.041 49.504 36.6992 54.0044l1.0036 1.6991H750.904c-20.036 0-36.4292-.168-36.4292-.3732z"
          />
          <path
            className={clsx(primaryMainColor, dashOffset1500Dasharray6000, delay1Sec)}
            d="M.9817 6.6811c7.1-1.667 102.63 120.7682 97.8536 124.796-37.048 9.4906-55.2201.8928-98.8336.8928 10.3007-3.2216 3.1476-97.1523.98-125.6888zM80.578 63.7714C109.8728 42.3564 121.4012 21.9994 143.4516 0c8.7154 9.6146 24.3846 14.214 27.1078 28.0555-18.1859 27.5935-40.9788 42.7097-62.3434 64.2892L80.578 63.7714zM115.8817 101.4143c10.5611-9.326 57.7907-66.6943 63.676-62.6016 9.2885 9.956 16.351 17.5674 26.1671 28.1299-25.4186 15.9573-40.9698 46.174-63.1407 63.9987-12.8664-5.5957-18.2011-17.5052-26.7024-29.527zM219.8588 96.7267c-4.0813-1.5013 37.1427-89.5379 39.9309-90.2876 14.0382 29.4729 22.911 63.2191 40.8026 90.9308-25.7838-1.9046-55.4463 2.7139-80.7335-.6432zM217.2811 104.5128c28.0366.317 51.9677 4.4967 85.1204 0 4.133 9.0872 11.1347 18.257 12.2704 27.3214-38.362.817-67.1516-3.4525-109.0104.5357 3.2376-7.6786 2.3285-18.1254 11.6196-27.8571zM331.9075 4.2318c33.2758 25.979 72.873 42.4225 100.2158 64.5667-34.3407 20.0134-62.6258 44.6629-98.9627 63.5714-5.6616-39.8259-.8853-90.114-1.2531-128.1381zM456.43 44.5128c13.5329 3.0266 26.9092 3.6787 40 0 2.4035 28.9345 5.4848 57.77 0 87.8571-12.3747 3.8082-25.9582 2.8142-40 0 7.387-85.8541 2.1104-74.7324 0-87.8571zM456.43 5.227h40c.1205 10.4762 6.585 20.9524 0 31.4286-13.9614 3.4349-26.9054 1.3053-40 0 8.6432-17.9745.015-22.8122 0-31.4286zM521.316 78.1241l.0013-54.4642c13.0314 20.1424 24.0664 37.4594 36.8718 57.4969v51.4316h-36.8744l.0012-54.4643zM522.1528 5.3387c0-.8216 32.0488-.778 34.5948.047l44.053 63.6313c2.124-21.8878 3.7125-38.4272-.2986-63.5714h37.3032c.1312 42.387 4.337 84.4075-1.1083 127.1428-11.3916 1.0427-22.5726 4.0717-34.509-.0204-23.4599-43.569-61.3261-81.466-80.035-127.2293zM730.1148 4.8699c15.4732 2.1065 32.4853-2.8916 47.7736.1025-17.8111 44.127-49.8948 85.175-75.5484 127.3507-20.3772 4.306-32.2686 1.2088-46.3793.0469 26.2903-45.212 53.1547-91.396 74.1541-127.5zM714.4747 131.9968c0-.7305 35.5794-55.5024 35.1555-55.3304-1.2747.5171 30.5611 50.555 36.6992 54.0044-16.3465 7.3123-52.3994 2.8268-71.8547 1.326z"
          />
          <path
            className={clsx(secondaryMainColor, dashOffset1000Dasharray1000, delay2Sec)}
            d="M.9817 6.6811c7.1-1.667 102.63 120.7682 97.8536 124.796C-38.7213 139.0683 10.8273 150.793.9817 6.681zM80.578 63.7714C109.8728 42.3564 121.4012 21.9994 143.4516 0c50.5908 34.6316 27.1078 28.0555-35.2356 92.3447zM115.8817 101.4143c10.5611-9.326 57.7907-66.6943 63.676-62.6016 41.93 39.1397 26.1671 28.1299-36.9736 92.1286-12.8664-5.5957-18.2011-17.5052-26.7024-29.527zM219.8588 96.7267c49.8802-120.4386 30.9621-115.8528 80.7335.6432-25.7838-1.9046-55.4463 2.7139-80.7335-.6432zM217.2811 104.5128c54.2133 3.9965 91.0214-15.511 97.3908 27.3214-38.362.817-67.1516-3.4525-109.0104.5357 3.2376-7.6786 2.3285-18.1254 11.6196-27.8571zM331.9075 4.2318c124.5225 84.2095 130.5088 47.0721 1.2531 128.1381-5.6616-39.8259-.8853-90.114-1.2531-128.1381z"
          />
          <path
            className={clsx(secondaryMainColor, dashOffset1000Dasharray1000, delay2Sec)}
            d="M456.43 44.5128c47.8709-1.9213 40-7.8572 40 87.8571-66.2562 4.1055-31.0019 11.636-40-87.8571zM496.43 5.227c3.1258 34.7542-10.2923 34.4439-40 31.4286-8.5501-36.337 9.0918-31.4286 40-31.4286zM521.3173 23.6599c30.4125 38.1737 36.8718 60.9165 36.8718 108.9285-54.1264 2.9685-32.4926-5.0172-36.8718-108.9285zM522.1528 5.3387c43.8948-11.4907 57.3966 32.9826 78.6477 63.6783-.2985-63.5714-14.8145-63.5714 37.0047-63.5714.1312 42.387 4.337 84.4075-1.1083 127.1428-36.7443 11.3745-97.1325-86.4256-114.544-127.2497zM730.1148 4.8699C820.349-7.4367 754.8065 28.4326 702.34 132.3231c-22.0827 3.4409-37.8846-2.811-44.1332-.7088 0 0 33.24-65.6834 71.908-126.7443zM784.7856 131.9968c0-.7305-35.5794-55.5024-35.1554-55.3304-54.8107 68.9567-34.2523 60.8571 35.1554 55.3304z"
          />

          <path
            className={clsx(primaryMainColor, dashOffset2000Dasharray500, delay4Sec)}
            d="M456.43 44.5128c13.5329 3.0266 26.9092 3.6787 40 0-6.8197 38.8586.4172 63.2227 0 87.8571-12.3747 3.8082-25.9582 2.8142-40 0-9.293-83.052.3428-74.4354 0-87.8571zM456.43 5.227h40c.1205 10.4762-4.7493 20.8608 0 31.4286-13.9614 3.4349-26.9054 1.3053-40 0-3.6872-16.9785.015-22.8122 0-31.4286zM521.316 78.1241l.0013-54.4642c30.4125 38.1737 36.8718 60.9165 36.8718 108.9285h-36.8744l.0012-54.4643zM522.1528 5.3387c0-.8216 32.0488-.778 34.5948.047l44.053 63.6313c2.124-21.8878 3.7125-38.4272-.2986-63.5714h37.3032c.1312 42.387 4.337 84.4075-1.1083 127.1428-36.7443 11.3745-97.1325-86.4256-114.544-127.2497zM730.1148 4.8699c15.4732 2.1065 32.4853-2.8916 47.7736.1025-17.8111 44.127-49.8948 85.175-75.5484 127.3507-88.311 14.7433-15.6992-41.2305 27.7748-127.4531zM714.4747 131.9968c0-.7305 35.5794-55.5024 35.1555-55.3304 54.8106 68.9567 34.2522 60.8571-35.1555 55.3304z"
          />
          <path
            className={clsx(primaryMainColor, dashOffset2000Dasharray500, delay4Sec)}
            d="M.9817 6.6811c4.5212-25.134 112.9072 127.2788 97.8536 124.796C-38.7213 139.0683 10.8273 150.793.9817 6.681zM143.4516 0c50.5908 34.6316 27.1078 28.0555-35.2356 92.3447C59.6132 57.911 80.578 63.7714 143.4516 0zM179.5578 38.8127c41.93 39.1397 26.167 28.1299-36.9737 92.1286-39.9214-36.2359-35.3296-21.71 36.9737-92.1286zM219.8588 96.7267c49.8802-120.4386 30.9621-115.8528 80.7335.6432-25.7838-1.9046-55.4463 2.7139-80.7335-.6432zM217.2811 104.5128c54.4821 4.1191 96.1435-13.1745 97.3908 27.3214-97.9643-1.3303-120.1904 14.8035-97.3908-27.3214zM331.9075 4.2318c124.5225 84.2095 130.5088 47.0721 1.2531 128.1381 1.673-40.2863-.4803-90.1395-1.2531-128.1381z"
          />
        </svg>
      </Grid>
      <Grid container className={'bottomPart'}>
        <Grid container justifyContent={'center'}>
          <Typography
            variant={'h2'}
            style={{
              color: colord(palette.primary.main)
                .mix(palette.secondary.main, percent / 100)
                .toHex(),
              marginBottom: 20
            }}
          >{`${percent}%`}</Typography>
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
  );
};
export default LoadingLayout;
