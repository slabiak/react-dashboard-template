import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () =>
      ({
        palette: palette(),
        typography,
        shadows: shadows(),
        customShadows: customShadows(),
        shape: { borderRadius: 8 },
      }) as ThemeOptions,
    []
  );

  const theme: Theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
