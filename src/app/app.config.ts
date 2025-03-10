import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AuthState } from './core/states/auth-state/auth.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    importProvidersFrom(ToastrModule.forRoot()),
    importProvidersFrom(
      NgxsModule.forRoot(
        [AuthState],
        {
          selectorOptions: {
            suppressErrors: false,
            injectContainerState: false,
          },
        }
      )
    ),
    importProvidersFrom(),
    provideHttpClient()
  ]
};
