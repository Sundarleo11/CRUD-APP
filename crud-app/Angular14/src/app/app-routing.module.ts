import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'status', component:StatusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
