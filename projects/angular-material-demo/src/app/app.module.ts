import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { TestCalculatorComponent } from './components/test-calculator/test-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDemoComponent,
    HomeComponent,
    TestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [TestCalculatorComponent]
})
export class AppModule { }
