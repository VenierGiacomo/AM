import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from 'src/app/components/components.module'
import { IonicModule } from '@ionic/angular';

import { PlayerSummaryPage } from './player-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayerSummaryPage]
})
export class PlayerSummaryPageModule {}
