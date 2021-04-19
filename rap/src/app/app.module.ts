import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassementComponent } from './classement/classement.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from "src/environments/environment";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JourComponent } from './music/jour/jour.component';
import { WeekComponent } from './music/week/week.component';
import { MusicComponent } from './music/music.component';
import { RappeurComponent } from './rappeur/rappeur.component';
import { SemaineComponent } from './rappeur/semaine/semaine.component';
import { Jour1Component } from '././rappeur/jour1/jour1.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassementComponent,
    HomeComponent,
    JourComponent,
    WeekComponent,
    MusicComponent,
    RappeurComponent,
    SemaineComponent,
    Jour1Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
