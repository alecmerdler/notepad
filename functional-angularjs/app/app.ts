import * as angular from 'angular';

import { Tile } from './components/tile.component';
import { Dashboard, DashboardSFC } from './components/dashboard.component';

export const appModule = angular.module('appModule', [])
  // TODO(alecmerdler): Find a way to write stateless functional components using AngularJS
  .component('dashboard', Dashboard)
  .component('dashboard-sfc', DashboardSFC)
  .component('tile', Tile);

angular.element(document).ready(() => angular.bootstrap(document, [appModule.name]));

export type ToComponent = (sfc: (props: any) => string) => angular.IComponentOptions;
