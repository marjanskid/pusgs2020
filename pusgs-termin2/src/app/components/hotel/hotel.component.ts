import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from 'src/app/entities/hotel/hotel';
import { HotelService } from 'src/app/services/hotel-service/hotel.service';
import { HotelBookComponent } from '../hotel-book/hotel-book.component';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  allHotels: Array<Hotel>;

  constructor(private hotelService: HotelService) {
    this.allHotels = this.hotelService.loadHotels();
  }

  ngOnInit(): void { }

}
