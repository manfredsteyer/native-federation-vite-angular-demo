import { Routes } from '@angular/router';
import { loadRemoteModule } from '@softarc/native-federation-runtime';
import { HomeComponent } from './home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './comp',
      }).then((esm) => esm.AppComponent),
  },
];
