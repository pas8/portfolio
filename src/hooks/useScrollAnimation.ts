import { useEffect, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

export const useScrollAnimation = (sectionArr: string[]) => {
  const [sectionRefs, setSectionRefs] = useState<HTMLDivElement[]>([]);
  const [isRefsWasSet, setIsRefsWasSet] = useState(false);

  const refsArr = sectionArr.map(id => document?.getElementById(id) as HTMLDivElement);

  const START_DEG = 8;

  useEffect(() => {
    if (isRefsWasSet || !refsArr.every(el => !!el)) return;
    setSectionRefs(refsArr);
    setIsRefsWasSet(true);
    refsArr.forEach(el => (el.style.transform = `rotateX(${START_DEG}deg)`));
  }, [refsArr]);

  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const elementToAnimate = sectionRefs.find(
    el => el.getBoundingClientRect().top < height - (height / 4) && el.getBoundingClientRect().top > 0
  );

  useEffect(() => {
    if (!elementToAnimate) return;
    const n = elementToAnimate?.getBoundingClientRect()?.top;
    if (n < 0) return;

    const deg = ~~((n * START_DEG) / 1500);
    elementToAnimate.style.transform = `rotateX(${deg}deg)`;
  }, [elementToAnimate, y]);
};
