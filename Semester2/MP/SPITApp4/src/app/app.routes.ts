import { Routes } from '@angular/router';
// import { SideMenuPage } from './side-menu/side-menu.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'rules',
    loadComponent: () => import('./rules/rules.page').then( m => m.RulesPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./pages/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  // {
  //   path: 'side-menu',
  //   component: SideMenuPage,
  // }
];
