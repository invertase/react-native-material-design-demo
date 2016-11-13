/**
 * @providesModule AppActions
 * @flow
 */

export const APP_THEME_CHANGE: string = 'APP_THEME_CHANGE';

export function updateTheme(theme: string) {
  return {
    type: APP_THEME_CHANGE, theme,
  };
}
