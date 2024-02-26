import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ActorsComponent} from "./actors/actors.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [ { path: '', component: LoginComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
