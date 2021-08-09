export type SvgAnimationPropsType = {
  id: string;
  svgId?:string
  onClick?: (__?: any) => void;
  viewBox: string;
  className?: string;
  pathsArr: string[][];
};
