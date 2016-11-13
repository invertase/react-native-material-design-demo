/**
 * @providesModule CoreContainer
 * @flow
 */

import React, { Element } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialDesign from 'react-native-material-design';

type Props = {
  children?: Element<any>,
}

function CoreContainer({ children }: Props) {
  return (
    <MaterialDesign theme={'light'}>
      {children}
    </MaterialDesign>

  );
}

export default CoreContainer;
