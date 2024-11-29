import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {
  static getRoutes(): Routes {
    return routes;
  }
}
