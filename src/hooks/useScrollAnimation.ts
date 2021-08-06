import { useWindowScroll } from 'react-use';

export const useScrollAnimation = () => {
  const { y } = useWindowScroll();

};
