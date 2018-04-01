import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPostPageComponent } from './details-post-page/details-post-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [ 
    MainPageComponent, 
    DetailsPostPageComponent 
  ],
  exports: [ 
    MainPageComponent 
  ]
})
export class PagesModule { }
