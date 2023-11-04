import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NgbTooltipModule,NgbDropdownModule 
} from '@ng-bootstrap/ng-bootstrap';

const UI_WIDGETSb = [
  NgbTooltipModule,
  NgbDropdownModule 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UI_WIDGETSb
  ]
})
export class UiWidgetsModule { }
