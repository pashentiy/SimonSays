import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Game, GameOver } from '../screens';
import { EPublicScreens } from '../types';
import { mColors } from '../utils';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ScreenProps } from './types';
import { translations } from '../translations';


const { game_over } = translations.game_over.content;

const PublicNavStack = createStackNavigator<ScreenProps>();

const PublicNav = () => (
  <PublicNavStack.Navigator initialRouteName={EPublicScreens.GAME} screenOptions={{ headerShown: false }}>
    <PublicNavStack.Screen name={EPublicScreens.GAME} component={Game} />
    <PublicNavStack.Screen name={EPublicScreens.GAME_OVER} component={GameOver}
      options={{
        title: game_over,
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: mColors.superLightBlue
        },
        headerTitleStyle: {
          fontFamily: 'Cochin'
        },
        headerBackTitleVisible: false,
        headerBackImage: () => <FontAwesomeIcon style={{ marginLeft: 10 }} color={mColors.black} icon={faAngleLeft as IconProp} size={30} />
      }} />
  </PublicNavStack.Navigator>
);



const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000)
  }, [])

  if (isLoading) {
    return <PublicNav />;
  } else {
    return <SplashScreen />
  }
};

export default AppNavigation;
