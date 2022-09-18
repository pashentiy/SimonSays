import React from 'react';
// import { Logo } from '../assets';
import { Image } from 'react-native';
import { logo } from '../assets/images/gif';

interface Props {
  width: number;
}

const AppLogo = ({ width = 100 }: Props): JSX.Element =>  <Image source={logo} style={{ width: 100, height: 100 }}></Image>;

export default AppLogo;
