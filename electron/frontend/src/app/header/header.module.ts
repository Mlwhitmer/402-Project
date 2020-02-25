import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
  	HeaderComponent
  ]
})
export class HeaderModule { }
