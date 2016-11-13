/**
 * @providesModule ChildScene
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from 'Button';

function ChildScene() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Example of a child scene...
      </Text>
      <Button onPress={Actions.pop}>
        POP back home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default ChildScene;
