import {
  APP_INITIALIZER,
  EnvironmentProviders,
  inject,
  Provider,
} from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';

export function initializeTheme(): () => void {
  const themeService = inject(ThemeService);
  return () => {
    const currentColorTheme = themeService.getPreferredColorTheme();
    themeService.setColorTheme(currentColorTheme);
  };
}

export const providerThemeInitializer: Provider | EnvironmentProviders = {
  provide: APP_INITIALIZER,
  useFactory: initializeTheme,
  deps: [ThemeService],
  multi: true,
};
