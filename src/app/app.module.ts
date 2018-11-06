import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebGLComponent } from './web-gl/web-gl.component';
import { BabylonBasicComponent } from './babylon-basic/babylon-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    WebGLComponent,
    BabylonBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
