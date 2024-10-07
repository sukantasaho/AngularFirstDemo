import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDemoComponent } from './components/template-demo/template-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { NareshItStudentRegistrationFormValidationComponent } from './components/naresh-it-student-registration-form-validation/naresh-it-student-registration-form-validation.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveNestedFormComponent } from './components/reactive-nested-form/reactive-nested-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { BootStrapComponent } from './components/boot-strap/boot-strap.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDemoComponent,
    TemplateFormValidationComponent,
    NareshItStudentRegistrationFormValidationComponent,
    ReactiveFormComponent,
    ReactiveNestedFormComponent,
    FormBuilderComponent,
    BootStrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormBuilderComponent]
})
export class AppModule { }
