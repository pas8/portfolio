import { useMediaQuery, useTheme } from '@material-ui/core';

enum BreakpointNames {
  IS_SIZE_IS_MD = 'isSizeIsMd',
  IS_SIZE_IS_LG = 'isSizeIsLg',
  IS_SIZE_IS_XL = 'isSizeIsXl',
  IS_SIZE_IS_SM = 'isSizeIsSm',
  IS_SIZE_IS_XS = 'isSizeIsXs',
  IS_SIZE_SMALL = 'isSizeSmall'
}
export const useBreakpointNames = (): { [Property in BreakpointNames]: boolean } => {
  const { breakpoints } = useTheme();

  return {
    [BreakpointNames.IS_SIZE_IS_MD]: useMediaQuery(breakpoints.only('md')),
    [BreakpointNames.IS_SIZE_IS_LG]: useMediaQuery(breakpoints.only('lg')),
    [BreakpointNames.IS_SIZE_IS_XL]: useMediaQuery(breakpoints.only('xl')),
    [BreakpointNames.IS_SIZE_IS_SM]: useMediaQuery(breakpoints.only('sm')),
    [BreakpointNames.IS_SIZE_IS_XS]: useMediaQuery(breakpoints.only('xs')),
    [BreakpointNames.IS_SIZE_SMALL]: useMediaQuery(breakpoints.down('sm'))
  };
};
