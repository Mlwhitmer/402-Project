import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatTableModule } from '@angular/material';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule,
  ],
  exports: [
    MatTableModule
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { }
