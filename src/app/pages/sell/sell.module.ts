import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from 'src/app/components/components.module'
import { SellPage } from './sell.page';

const routes: Routes = [
  {
    path: '',
    component: SellPage
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
  declarations: [SellPage]
})
export class SellPageModule {}
