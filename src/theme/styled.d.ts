/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import theme from './light';
import themeMui from './themeLight';

export type Theme = typeof theme;
export type themeMui = typeof themeMui;

declare module 'styled-components' {
  export interface DefaultTheme extends themeMui {}
}
// declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }
