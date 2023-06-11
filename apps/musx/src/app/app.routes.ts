import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@full-stack-mono/concert/feature').then(lib => lib.concertFeatureRoutes),
  },
];
