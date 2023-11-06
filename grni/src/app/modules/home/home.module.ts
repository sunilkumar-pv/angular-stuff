import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { LocaldbserverService } from './services/localdbserver.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { CheckboxFilterPipe } from './pipes/checkbox-filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PaginationComponent,
    CheckboxFilterPipe,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ LocaldbserverService ]
})
export class HomeModule { }
