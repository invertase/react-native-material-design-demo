import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import Home from 'Home';
import ChildScene from 'ChildScene';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" title="Home" component={Home} initial />
    <Scene key="child" title="Child Scene" component={ChildScene} />
  </Scene>
);

export default scenes;
