import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Component/employee.component';
import { StudentComponent } from './Component/Student/student.component';
import { LoginComponent } from './Component/Login/login.component';
import { UsermanagementComponent } from './Component/Admin/usermanagement/usermanagement.component';
import { NetflixMainComponent } from './Component/Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Component/Netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './Component/Netflix/netflix-index/netflix-index.component';
import {NetflixHeaderComponent} from './Component/Netflix/netflix-header/netflix-header.component';
import { ProductComponent } from './Component/product/product.component';
import { StudentResultComponent } from './Component/student-result/student-result.component';
import { AttributeComponent } from './Component/attribute/attribute.component';
import { EventBindingComponent } from './Component/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Component/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfElseComponent } from './Component/ng-if-else/ng-if-else.component';
//import { ProductComponent1 } from './Component/product.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,ProductComponent,StudentComponent,LoginComponent, UsermanagementComponent, NetflixMainComponent, NetflixRegisterComponent, NetflixIndexComponent,
    NetflixHeaderComponent,StudentResultComponent, AttributeComponent, EventBindingComponent, TwoWayDataBindingComponent, NgIfElseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap:[StudentResultComponent]
})
export class AppModule { }
