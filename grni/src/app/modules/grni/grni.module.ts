import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrniRoutingModule } from './grni-routing.module';
import { GrniComponent } from './components/grni.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GrniComponent
  ],
  imports: [
    CommonModule,
    GrniRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GrniModule { }
