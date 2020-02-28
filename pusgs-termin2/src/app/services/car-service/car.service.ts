import { Injectable } from '@angular/core';
import { Car } from 'src/app/entities/car/car';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FilterParam } from 'src/app/entities/filter-param/filter-param';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  loadCars() {
    console.log('Učitavanje vozila...');
    return this.mockedCars();
  }

  filterCars(allCars: Car[], filterParams: AbstractFilterParam[]): Car[] {
    let filteredCars = new Array<Car>();
    for (const car of allCars) {
      let addCar = true;
      for (const filterParam of filterParams) {
        if (this.checkCarBrandFilter(car, filterParam)) {
            addCar = false;
            console.log(car.brand + ' ' + car.model + ' ne zadovoljava vrednost polja carBrandFilter');
            break;
        }

        if (this.checkCarMaxPerDayPriceFilter(car, filterParam)) {
          addCar = false;
          console.log(car.brand + ' ' + car.model + ' ne zadovoljava vrednost polja checkCarMaxPerDayPriceFilter');
          break;
        }
      }

      if (addCar)
        filteredCars.push(car);
    }

    return filteredCars;
  }

  checkCarBrandFilter(car: Car, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'carBrandFilter' && !car.brand.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkCarMaxPerDayPriceFilter(car: Car, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'carMaxPerDayPriceFilter' && (car.pricePerDay > filterParam.getFilterParamValue());
  }

  mockedCars(): Array<Car> {
    let allCars = new Array<Car>();

    const c1 = new Car(1, 'Audi', 'RS5', 2020, 245);
    const c2 = new Car(2, 'BMW', 'M5', 2017, 175);
    const c3 = new Car(3, 'Yugo', 'Koral 45', 1991, 25);
    const c4 = new Car(4, 'Mercedec', 'AMG GT63', 2019, 437);
    const c5 = new Car(5, 'Toyota', 'Yaris', 2010, 86);

    allCars.push(c1);
    allCars.push(c2);
    allCars.push(c3);
    allCars.push(c4);
    allCars.push(c5);

    return allCars;
  }
}
