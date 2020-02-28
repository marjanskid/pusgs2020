import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightComponent } from './components/flight/flight.component';
import { CarComponent } from './components/car/car.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelBookComponent } from './components/hotel-book/hotel-book.component';
import { CarFilteredComponent } from './components/car-filtered/car-filtered.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FlightComponent,
    CarComponent,
    HotelComponent,
    HotelDetailsComponent,
    HotelBookComponent,
    CarFilteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
