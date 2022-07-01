import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from './vendor/material/material.module';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { AvatarModule } from 'ngx-avatars';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSidenavComponent } from './components/home-sidenav/home-sidenav.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EventMapComponent } from './components/event-map/event-map.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventInfoComponent } from './components/event-info/event-info.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		SignupComponent,
  HomeSidenavComponent,
  EventMapComponent,
  EventListComponent,
  EventFiltersComponent,
  EventInfoComponent
	],
	imports: [
		BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AvatarModule,
		LeafletModule,

	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
