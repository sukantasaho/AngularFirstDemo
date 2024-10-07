import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CustomPipeDemoComponent } from './components/custom-pipe-demo/custom-pipe-demo.component';
import { TitlePipe } from './components/custom-pipe-demo/titlepipe.pipe';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { CustomDDirective } from './components/custom-dir/custom-d.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesDemoComponent,
    CustomPipePipe,
    CustomPipeDemoComponent,
    TitlePipe,
    CustomDirComponent,
    CustomDDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomDirComponent]
})
export class AppModule { }
