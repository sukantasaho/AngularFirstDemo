import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipkartAdminComponent } from './components/flipkart-admin/flipkart-admin.component';
import { FlipkartDetailsComponent } from './components/flipkart-details/flipkart-details.component';
import { FlipkartElectronicsComponent } from './components/flipkart-electronics/flipkart-electronics.component';
import { FlipkartHomeComponent } from './components/flipkart-home/flipkart-home.component';
import { FlipkartIndexComponent } from './components/flipkart-index/flipkart-index.component';
import { FlipkartJeweleryComponent } from './components/flipkart-jewelery/flipkart-jewelery.component';
import { FlipkartMensComponent } from './components/flipkart-mens/flipkart-mens.component';
import { FlipkartWomensComponent } from './components/flipkart-womens/flipkart-womens.component';
import { FlipkartMoreDetailsComponent } from './components/flipkart-more-details/flipkart-more-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartLoginComponent } from './components/flipkart-login/flipkart-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipkartAdminComponent,
    FlipkartDetailsComponent,
    FlipkartElectronicsComponent,
    FlipkartHomeComponent,
    FlipkartIndexComponent,
    FlipkartJeweleryComponent,
    FlipkartMensComponent,
    FlipkartWomensComponent,
    FlipkartMoreDetailsComponent,
    NotFoundComponent,
    FlipkartLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FlipkartIndexComponent]
})
export class AppModule { }
