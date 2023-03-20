import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaDemo01Component } from './Pages/pagina-demo01/pagina-demo01.component';
import { PaginaDemo02Component } from './Pages/pagina-demo02/pagina-demo02.component';
import { PaginaDemo03Component } from './Pages/pagina-demo03/pagina-demo03.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PaginaDemo01Component,
    PaginaDemo02Component,
    PaginaDemo03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
