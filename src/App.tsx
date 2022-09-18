/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { AppNavigation } from './navigation';
import { mColors } from './utils';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: mColors.white,
  }
});


const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
