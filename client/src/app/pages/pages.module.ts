import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPostPageComponent } from './details-post-page/details-post-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MainPageComponent, DetailsPostPageComponent ],
  exports: [ MainPageComponent ]
})
export class PagesModule { }
