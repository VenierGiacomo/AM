import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from 'src/app/components/components.module'
import { ChallSummPage } from './chall-summ.page';

const routes: Routes = [
  {
    path: '',
    component: ChallSummPage
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
  declarations: [ChallSummPage]
})
export class ChallSummPageModule {}
