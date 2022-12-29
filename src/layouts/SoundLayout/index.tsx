import { useEffect } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAudio } from 'react-use';
import { getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';

const SOUND_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'

const SoundLayout: FC = ({ children }) => {

  const [audio, state, controls, ref] = useAudio({
    src:SOUND_URL
  });

  const isSoundPaused = useSelector(getIsSoundPaused);
  const soundIdx = useSelector(getSoundIdx);

  useEffect(() => {
    controls.volume(soundIdx / 4);
    !isSoundPaused ? controls.play() : controls.pause();
  }, [isSoundPaused, soundIdx]);

  return (
    <>
      {children}
      {audio}
    </>
  );
};

export default SoundLayout;
