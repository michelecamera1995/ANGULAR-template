import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDemo01Component } from './Pages/pagina-demo01/pagina-demo01.component';
import { PaginaDemo02Component } from './Pages/pagina-demo02/pagina-demo02.component';
import { PaginaDemo03Component } from './Pages/pagina-demo03/pagina-demo03.component';

const routes: Routes = [
  { path: 'first-component', component: PaginaDemo01Component },
  { path: 'second-component', component: PaginaDemo02Component },
  { path: 'third-component', component: PaginaDemo03Component },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
