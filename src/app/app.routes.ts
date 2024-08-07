import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/content/content.module').then(
        (mod) => mod.ContentModule
      ),
  },
];
