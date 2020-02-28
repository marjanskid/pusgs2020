import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/entities/hotel/hotel';
import { HotelBookComponent } from 'src/app/components/hotel-book/hotel-book.component';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  loadHotels() {
    console.log('Učitavanje hotela...');
    return this.mockedHotels();
  }


  mockedHotels(): Array<Hotel> {
    let allHotels = new Array<Hotel>();

    const h1 = new Hotel(1, 'Emirates Palace', 'Abu Dhabi, United Arab Emirates', 4.3, 660, 26000);
    const h2 = new Hotel(2, 'Mardan Palace', 'Antalya, Turkey', 2.9, 230, 12360);
    const h3 = new Hotel(3, 'Burj Al Arab', 'Dubai, United Arab Emirates', 4.9, 1399, 32000);
    const h4 = new Hotel(4, 'Atlantis Paradise', 'Paradise Island, Bahamas', 3.6, 899, 16800);

    allHotels.push(h1);
    allHotels.push(h2);
    allHotels.push(h3);
    allHotels.push(h4);

    return allHotels;
  }
}
