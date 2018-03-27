import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
/* write schema how modules collaborate */