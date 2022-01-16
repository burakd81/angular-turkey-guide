import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./guest/home/home.component";
import {LoginComponent} from "./guest/login/login.component";
import {RegisterComponent} from "./guest/register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {AdminComponent} from "./admin/admin/admin.component";
import {AuthGuard} from "./guards/auth.guard";
import {Role} from "./models/role.enum";
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {UnauthorizedComponent} from "./error/unauthorized/unauthorized.component";

import {CityPhotoComponent} from "./city-photo/city-photo.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard],data:{roles:[Role.ADMIN,Role.USER]}},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:[Role.ADMIN]}},
  {path:'city',component:CityPhotoComponent},
  {path:'404',component:NotFoundComponent},
  {path:'401',component:UnauthorizedComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
