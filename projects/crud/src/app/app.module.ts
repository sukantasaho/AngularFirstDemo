import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalHomeComponent } from './components/hospital-home/hospital-home.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { InsertComponent } from './components/insert/insert.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalHomeComponent,
    EditComponent,
    DeleteComponent,
    InsertComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HospitalHomeComponent]
})
export class AppModule { }
