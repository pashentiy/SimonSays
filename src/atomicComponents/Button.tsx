import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { mColors } from '../utils';
import Text from './Text';

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderColor: mColors.darkerBlue,
    borderRadius: 20
  },
  textContainer: {
    fontSize: 20,
    textAlign: 'center',
    color: mColors.superLightBlue
  }
});

interface Props {
  onPress: () => void;
  isDisabled?: boolean;
  text: string;
  style?: any;
}

const Button = ({ onPress, text, isDisabled = false, style = {} }: Props): JSX.Element => (
  <TouchableOpacity
    onPress={onPress}
    disabled={isDisabled}
    style={StyleSheet.flatten([styles.touchableContainer, { backgroundColor: isDisabled ? 'transparent' : mColors.darkerBlue }, style])}
  >
    <Text style={styles.textContainer} text={text} />
  </TouchableOpacity>
);

export default Button;
