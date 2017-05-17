import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppService } from "./services/app.service";
import { GridComponent } from './grid/grid.component';
import { RegisterComponent } from './register/register.component';
import { SmartGridComponent } from './smart-grid/smart-grid.component';


const routes:Routes = [
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component: GridComponent,
    path:"grid"
  },
  {
    component: RegisterComponent,
    path:"register"
  },
  {
    component: SmartGridComponent,
    path:"smart-grid"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GridComponent,
    RegisterComponent,
    SmartGridComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
