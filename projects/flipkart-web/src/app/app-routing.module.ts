import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipkartHomeComponent } from './components/flipkart-home/flipkart-home.component';
import { FlipkartJeweleryComponent } from './components/flipkart-jewelery/flipkart-jewelery.component';
import { FlipkartElectronicsComponent } from './components/flipkart-electronics/flipkart-electronics.component';
import { FlipkartMensComponent } from './components/flipkart-mens/flipkart-mens.component';
import { FlipkartWomensComponent } from './components/flipkart-womens/flipkart-womens.component';
import { FlipkartAdminComponent } from './components/flipkart-admin/flipkart-admin.component';
import { FlipkartDetailsComponent } from './components/flipkart-details/flipkart-details.component';
import { FlipkartMoreDetailsComponent } from './components/flipkart-more-details/flipkart-more-details.component';
import { FlipkartAdminGuard } from './guards/flipkart.admin.guard';
import { FlipkartLoginComponent } from './components/flipkart-login/flipkart-login.component';

const routes: Routes = [
  {path:'home',component:FlipkartHomeComponent},
  {path:'jewelery',component:FlipkartJeweleryComponent},
  {path:'electronics',component:FlipkartElectronicsComponent},
  {path:'mens',component:FlipkartMensComponent},
  {path:'womens',component:FlipkartWomensComponent},
  {path:'admin', component:FlipkartAdminComponent,canActivate:[FlipkartAdminGuard]},
  {path:'details/:id',component:FlipkartDetailsComponent,
    children:[
      {path:"more/:id", component:FlipkartMoreDetailsComponent}
    ]
  },
  {path:'login',component:FlipkartLoginComponent},
  {path:"", redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
