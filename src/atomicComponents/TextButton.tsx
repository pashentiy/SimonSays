import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { mColors } from '../utils';
import Text from './Text';

const styles = StyleSheet.create({
  internalWrapper: {
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: mColors.lightBlue
  }
});

interface ITextButton {
  text: string;
  onPress: (param?: any) => void;
  style?: any;
  textStyle?: any;
  isDisable?: boolean;
}

const TextButton = ({ text, onPress, style = {}, textStyle = {}, isDisable }: ITextButton) => {
  return (
    <View style={style}>
      <TouchableOpacity activeOpacity={0.8} disabled={isDisable} onPress={onPress} style={styles.internalWrapper}>
        <Text style={StyleSheet.flatten([styles.text, textStyle])} text={text} />
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;
