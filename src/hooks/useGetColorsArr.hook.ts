import { useTheme } from '@material-ui/core';
export const useGetColorsArr = (): string[] => {
  const { palette } = useTheme();

  const colorsArr = [
    'rgb(49, 191, 186)',
    'rgb( 246, 9, 149)',
    'rgb(88, 40, 215)',
    'rgb(254, 219, 59)',
    'rgb(202, 02, 02)',
    'rgb(64, 179, 199)',
    'rgb(6, 220, 69)',
    'rgb(164, 9, 259)',
    'rgb(244, 17, 103)',
    'rgb(106, 9, 249)',
    'rgb(54, 229, 159)',
    'rgb(26, 149, 219)',
    palette.secondary.main,
    palette.primary.main
  ];
  return colorsArr;
};
