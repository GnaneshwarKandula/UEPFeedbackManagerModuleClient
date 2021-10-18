import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './NavMenu/nav-menu/nav-menu.component';
import { LoginComponent } from './Login/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ProjectManagerComponent } from './ProjectManager/project-manager/project-manager.component';
import { LoginService } from './Services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { OnlyProjectManagerComponent } from './OnlyProjectManager/only-project-manager/only-project-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    ProjectManagerComponent,
    OnlyProjectManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'project-manager', component: ProjectManagerComponent, canActivate:[AuthGuard]},
      { path: 'project-feedbacks', component: OnlyProjectManagerComponent, canActivate:[AuthGuard]}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
