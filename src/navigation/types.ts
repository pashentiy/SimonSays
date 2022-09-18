import { StackScreenProps } from '@react-navigation/stack';
import { EPublicScreens } from '../types';

export type MainStackProps = {
  [EPublicScreens.GAME]: undefined;
  [EPublicScreens.GAME_OVER]: undefined;
  [EPublicScreens.SPLASH_SCREEN]: undefined;
};

export type ScreenProps = StackScreenProps<any>;
