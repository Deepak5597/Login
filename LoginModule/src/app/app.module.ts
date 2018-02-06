import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/Router';
import {LoginService} from './login.service';

const appRoutes:Routes=[
  {
    path:'',
    component:MainFormComponent
     },
  {
 path:'dashboard',
 component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
