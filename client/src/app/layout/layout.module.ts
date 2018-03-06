import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HeaderMenuComponent,
    HeaderComponent,
    NavMenuComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
