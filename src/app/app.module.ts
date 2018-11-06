import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BsDropdownModule, TooltipModule, ModalModule} from 'ngx-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { WebGLComponent } from './web-gl/web-gl.component';
import { BabylonBasicComponent } from './babylon-basic/babylon-basic.component';
import { MainPageButtonsComponent } from './main-page-buttons/main-page-buttons.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';

const appRoutes: Routes = [
  {path: 'webgl', component: WebGLComponent },
  {path: 'babylonGames', component: BabylonBasicComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WebGLComponent,
    BabylonBasicComponent,
    MainPageButtonsComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
