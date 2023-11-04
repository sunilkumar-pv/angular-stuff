import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { UiWidgetsModule } from './ui-widgets.module';
 

@NgModule({
  declarations: [
    AppLoaderComponent,
    MenubarComponent,
    PagenotfoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiWidgetsModule
  ],
  exports: [
    AppLoaderComponent,
    MenubarComponent,
    PagenotfoundComponent,
    FooterComponent,

    UiWidgetsModule
  ]
})
export class CoreModule { }
