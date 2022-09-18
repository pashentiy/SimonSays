import React from 'react';
import { StyleSheet, Text as RnText } from 'react-native';
import { mColors } from '../utils';

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 16,
    color: mColors.darkGrey,
    fontFamily: 'Cochin'
  }
});

type TText = {
  text: string;
  style?: any;
};

const Text = ({ text, style = null }: TText) => <RnText style={StyleSheet.flatten([styles.wrapper, style])}>{text}</RnText>;

export default Text;
