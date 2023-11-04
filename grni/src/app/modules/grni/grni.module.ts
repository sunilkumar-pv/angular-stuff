import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrniRoutingModule } from './grni-routing.module';
import { GrniComponent } from './components/grni.component';


@NgModule({
  declarations: [
    GrniComponent
  ],
  imports: [
    CommonModule,
    GrniRoutingModule
  ]
})
export class GrniModule { }
