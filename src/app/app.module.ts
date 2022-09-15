import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MaterialModule } from './vendor/material/material.module';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { AvatarModule } from 'ngx-avatars';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSidenavComponent } from './components/home-sidenav/home-sidenav.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EventMapComponent } from './components/event-map/event-map.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { AccountComponent } from './pages/account/account.component';
import { MainComponent } from './pages/main/main.component';
import { YourEventsComponent } from './pages/your-events/your-events.component';
import { ManageEventsComponent } from './pages/manage-events/manage-events.component';
import { ManageEventCardComponent } from './components/manage-event-card/manage-event-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';




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
  EventInfoComponent,
  AccountComponent,
  MainComponent,
  YourEventsComponent,
  ManageEventsComponent,
  ManageEventCardComponent,
  EventCardComponent
	],
	imports: [
		BrowserModule,
    FormsModule,
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
