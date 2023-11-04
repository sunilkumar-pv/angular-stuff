import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { LocaldbserverService } from './services/localdbserver.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [ LocaldbserverService ]
})
export class HomeModule { }
