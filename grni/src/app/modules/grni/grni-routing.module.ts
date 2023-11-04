import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrniComponent } from './components/grni.component';
 
const routes: Routes = [{ path: '', component: GrniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrniRoutingModule { }
