import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';
import { CarComponent } from './components/car/car.component';
import { ContentComponent } from './components/content/content.component';
import { convertMetaToOutput } from '@angular/compiler/src/render3/util';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelBookComponent } from './components/hotel-book/hotel-book.component';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {
    path: "content",
    component: ContentComponent
  },
  {
    path: "flight",
    component: FlightComponent,
    canActivate: [UserGuard]
  },
  {
    path: "hotel",
    children: [
      { path: "", component: HotelComponent },
      { path: ":id/details", component: HotelDetailsComponent },
      { path: ":id/book", component: HotelBookComponent }
    ]
  },
  {
    path: "car",
    component: CarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
