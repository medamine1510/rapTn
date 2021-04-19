import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementComponent } from './classement/classement.component';
import { HomeComponent } from './home/home.component';
import { JourComponent } from './music/jour/jour.component';
import { WeekComponent } from './music/week/week.component';
import { Jour1Component } from './rappeur/jour1/jour1.component';
import { RappeurComponent } from './rappeur/rappeur.component';
import { SemaineComponent } from './rappeur/semaine/semaine.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'classement',component:ClassementComponent,
children:[
{path:'rankday',component:JourComponent},
{path:'rankweek',component:WeekComponent},
{path:'rapday',component:Jour1Component}

]

  
             

   
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
