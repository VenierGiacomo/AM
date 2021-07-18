import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component'
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [MenuComponent, HeaderComponent]
})
export class ComponentsModule { }
