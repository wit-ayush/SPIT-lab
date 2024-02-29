import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { SideMenuPage } from '../side-menu/side-menu.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.homePage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab5',
        loadComponent: () =>
          import('../tab5/tab5.page').then((m) => m.Tab5Page),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('../rules/rules.page').then((m) => m.RulesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  // {
  //   path: 'side-menu',
  //   loadComponent: () => import('../side-menu/side-menu.page').then( m => m.SideMenuPage)
  // },
];
