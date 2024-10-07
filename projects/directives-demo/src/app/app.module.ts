import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfDemoComponent } from './Components/ng-if-demo/ng-if-demo.component';
import { FormsModule } from '@angular/forms';
import { NgIfElseComponent } from './Components/ng-if-else/ng-if-else.component';
import { SwitchDirectiveBasicComponentComponent } from './Components/switch-directive-basic-component/switch-directive-basic-component.component';
import { SwitchProductComponent } from './Components/switch-product/switch-product.component';
import { SimpleForExampleComponent } from './Components/simple-for-example/simple-for-example.component';
import { FakerApiIntegrationComponent } from './Components/faker-api-integration/faker-api-integration.component';
import { NgForPropertyComponent } from './Components/ng-for-property/ng-for-property.component';
import { NgForPropertyTrackByComponent } from './Components/ng-for-property-track-by/ng-for-property-track-by.component';
import { NgClassDemoComponent } from './Components/ng-class-demo/ng-class-demo.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { NgStyleDemoComponent } from './Components/ng-style-demo/ng-style-demo.component';
import { EventHandlingComponent } from './Components/event-handling/event-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDemoComponent,
    NgIfElseComponent,
    SwitchDirectiveBasicComponentComponent,
    SwitchProductComponent,
    SimpleForExampleComponent,
    FakerApiIntegrationComponent,
    NgForPropertyComponent,
    NgForPropertyTrackByComponent,
    NgClassDemoComponent,
    LoginComponentComponent,
    NgStyleDemoComponent,
    EventHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [EventHandlingComponent]
})
export class AppModule { }
