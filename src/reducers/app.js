// @flow

import * as types from 'AppActions';

type State = {
  theme: 'dark' | 'light',
};

const initialState = {
  theme: 'light',
};

function app(state: State = initialState, action: Object): State {
  if (action.type === types.APP_THEME_CHANGE) {
    return {
      theme: action.theme,
    };
  }

  return state;
}

export default app;
