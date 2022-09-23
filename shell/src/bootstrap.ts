import './polyfills';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

if (import.meta.env.PROD) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES,)
  ]
});
