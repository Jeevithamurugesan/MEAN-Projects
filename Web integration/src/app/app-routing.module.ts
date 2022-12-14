import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', 'component': HomeComponent },
  { path: 'contact', 'component': ContactComponent },
  { path: 'login', 'component': LoginComponent },
  { path: 'about', 'component': AboutComponent },
  { path: '', 'component': LoginComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
