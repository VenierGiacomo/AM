import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from 'src/app/components/components.module'
import { IonicModule } from '@ionic/angular';

import { OpponentsPage } from './opponents.page';

const routes: Routes = [
  {
    path: '',
    component: OpponentsPage
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
  declarations: [OpponentsPage]
})
export class OpponentsPageModule {}
