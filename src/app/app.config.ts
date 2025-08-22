import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/auth/auth.interceptor';
import { httpErrorsInterceptor } from './shared/interceptors/http-errors.interceptor';
import { loadingInterceptorInterceptor } from './shared/interceptors/loading-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loadingInterceptorInterceptor, httpErrorsInterceptor, authInterceptor])),
  ]
};
