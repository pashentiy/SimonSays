import {useEffect, useState} from 'react';
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

export default function useSounds() {
  const [beep1, setBeep1] = useState<Sound>();
  const [beep2, setBeep2] = useState<Sound>();
  const [beep3, setBeep3] = useState<Sound>();
  const [beep4, setBeep4] = useState<Sound>();

  useEffect(() => {
    initSound();
  }, []);

  const initSound = () => {
    setBeep1(
      new Sound(require('../assets/sounds/beep1.wav'), Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
    );
    setBeep2(
      new Sound(require('../assets/sounds/beep2.wav'), Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
    );

    setBeep3(
      new Sound(require('../assets/sounds/beep3.wav'), Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
    );
    setBeep4(
      new Sound(require('../assets/sounds/beep4.wav'), Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
    );
  };


  return [beep1, beep2, beep3, beep4]
}
