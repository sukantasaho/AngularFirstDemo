import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseEventComponent } from './components/mouse-event/mouse-event.component';
import { KeyEventDemoComponent } from './components/key-event-demo/key-event-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseEventComponent,
    KeyEventDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [KeyEventDemoComponent]
})
export class AppModule { }
