/**
 * @providesModule Home
 * @flow
 */

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


type Props = {
};

function Home({ theme, dispatch }: Props) {
  return (
    <View style={styles.container}>
      <Subheader>Hello</Subheader>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

// Grab/Subscribe our redux data
function select(state) {
  return {
    theme: state.app.theme,
  };
}

export default connect(select)(Home);
