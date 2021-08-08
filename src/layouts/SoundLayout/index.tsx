import { useEffect } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAudio, useIsomorphicLayoutEffect } from 'react-use';
import { getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';

const SoundLayout: FC = ({ children }) => {
  // const audioUrl = '../../../public/audio.mp3';

  const [audio, state, controls, ref] = useAudio({
    // src: '../../../public/audio.mp3',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    // autoPlay: true,
  });
// console.log(state)
  const isSoundPased = useSelector(getIsSoundPaused);
  const soundIdx = useSelector(getSoundIdx);
  // console.log()
  useEffect(() => {
    controls.volume( soundIdx / 4);
    // console.log(isSoundPased)
    !isSoundPased ? controls.play() : controls.pause();
  }, [isSoundPased, soundIdx]);

  return (
    <>
      {children}
      {audio}
    </>
  );
};

export default SoundLayout;
