import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule), canActivate: [AuthGuardService]
          },
          { path: 'challenge/history', 
          loadChildren: () =>
          import('../chall-summ/chall-summ.module').then(m => m.ChallSummPageModule), canActivate: [AuthGuardService]
        },
        ]
      },
      {
        path: 'market',
        children: [
          {
            path: '',
            redirectTo: '/tabs/market/buy',
            pathMatch: 'full'
          },
          {
            path: 'buy',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../tab2/tab2.module').then(m => m.Tab2PageModule), canActivate: [AuthGuardService]
              },
              {
                path: 'summary',
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                    import('../player-summary/player-summary.module').then(m => m.PlayerSummaryPageModule), canActivate: [AuthGuardService]
                  },
                  {
                    path: ':name',
                    loadChildren: () =>
                      import('../player-summary/player-summary.module').then(m => m.PlayerSummaryPageModule), canActivate: [AuthGuardService]
                    
                  },
                ] 
              },
              {
                path: 'history',
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                    import('../history/history.module' ).then(m => m.HistoryPageModule), canActivate: [AuthGuardService]
                  },
                  {
                    path: ':name',
                    loadChildren: () =>
                    import('../history/history.module' ).then(m => m.HistoryPageModule), canActivate: [AuthGuardService]
                    
                  },
                ] 
              },
            ] 
          },
          {
            path: 'sell',
            loadChildren: () =>
              import('../sell/sell.module').then(m => m.SellPageModule), canActivate: [AuthGuardService]
          },
        ]
      },
      {
        path: 'challenge',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule), canActivate: [AuthGuardService]
          },
          {
            path: 'opponents',
            children: [
              {
                path: '',
                loadChildren: () =>
              import('../opponents/opponents.module').then(m => m.OpponentsPageModule), canActivate: [AuthGuardService]
              },
              {
                path: 'select',
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                    import('../chall-own/chall-own.module').then(m => m.ChallOwnPageModule), canActivate: [AuthGuardService]
                  },
                  {
                    path: ':name',
                    loadChildren: () =>
                    import('../chall-own/chall-own.module').then(m => m.ChallOwnPageModule), canActivate: [AuthGuardService]
                  }       
                ]
              },
            ]
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
