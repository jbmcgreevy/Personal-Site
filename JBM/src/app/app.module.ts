import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import {  platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MAT_FORM_FIELD_DEFAULT_OPTIONS  } from '@angular/material/form-field';
import { MaterialModule } from './material-module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MetaweatherService } from './_services/metaweather.service';
import { DegreesPipe } from './degrees.pipe';
import { PercentPipe } from './percent.pipe';
import { F1Component } from './f1/f1.component';
import { CarComponent } from './car/car.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PersonalProjectsComponent,
    AboutComponent,
    ContactComponent,
    WeatherComponent,
    DegreesPipe,
    PercentPipe,
    F1Component,
    CarComponent,
    CatFactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    MetaweatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
