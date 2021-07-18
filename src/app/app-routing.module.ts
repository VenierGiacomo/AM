import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'chall-own', loadChildren: './pages/chall-own/chall-own.module#ChallOwnPageModule', canActivate: [AuthGuardService] },
  { path: 'loginnative', loadChildren: './pages/login-native/login-native.module#LoginNativePageModule' },
  { path: 'registernative', loadChildren: './pages/register-native/register-native.module#RegisterNativePageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
