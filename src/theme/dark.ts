import { baseStyles, breakpoints } from './index';

export const colors = {
  background: {
    primary: {
      main: 'hsl(0, 0%, 96%)',
      minus20: 'hsl(0, 0%, 76%)',
      minus60: 'hsl(0, 0%, 58%)',
      plus20: 'hsl(0, 0%, 100%)',
      plus60: 'hsl(0, 0%, 100%)',
    },
    secondary: {
      main: 'hsl(203, 98%, 21%)',
      minus20: 'hsl(203, 98%, 17%)',
      minus60: 'hsl(203, 98%, 9%)',
      plus20: 'hsl(203, 98%, 25%)',
      plus60: 'hsl(203, 98%, 34%)',
    },
    tertiary: {
      main: 'hsl(187, 41%, 44%)',
      minus20: 'hsl(187, 41%, 35%)',
      minus60: 'hsl(187, 41%, 18%)',
      plus20: 'hsl(187, 41%, 53%)',
      plus60: 'hsl(187, 41%, 70%)',
    },
    quaternary: {
      main: 'hsl(167, 100%, 16%)',
      minus20: 'hsl(167, 100%, 13%)',
      minus60: 'hsl(167, 100%, 7%)',
      plus20: 'hsl(167, 100%, 19%)',
      plus60: 'hsl(167, 100%, 26%)',
    },
  },
  text: {
    primary: {
      main: 'hsl(0, 0%, 0%)',
      mild: 'hsl(0, 0%, 30%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 100%)',
      mild: 'hsl(0, 0%, 70%)',
    },
    tertiary: {
      main: 'hsl(0, 0%, 0%)',
      mild: 'hsl(0, 0%, 30%)',
    },
  },
  borders: {
    main: {
      color: '#ffad42',
    },
  },
} as const;

export default {
  title: 'light',
  colors,
  breakpoints,
  baseStyles,
};
