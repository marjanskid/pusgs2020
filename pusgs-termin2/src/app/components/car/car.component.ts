import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/entities/car/car';
import { CarService } from 'src/app/services/car-service/car.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  allCars: Array<Car>;
  filteredCars: Array<Car>;


  constructor(private carService: CarService) { 
    this.allCars = this.carService.loadCars();
    this.filteredCars = this.allCars;
  }

  ngOnInit(): void {
  }

  filterCars(): void {
    //this.filteredCars = new Array<Car>();
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("carBrandFilter")) {
      filterParams.push(this.addCarBrandFilterParam());
    }
    if (this.getFilterFieldValue("carMaxPerDayPriceFilter")) {
      filterParams.push(this.addCarMaxPerDayPriceFilterParam());
    }

    this.filteredCars = this.carService.filterCars(this.allCars, filterParams);
  }

  resetFilter(): void {
    this.filteredCars = this.allCars;
  }

  addCarBrandFilterParam(): ReturnType<any> {
    return new StringFilterParam("carBrandFilter", this.getFilterFieldValue("carBrandFilter"));
  }

  addCarMaxPerDayPriceFilterParam(): ReturnType<any> {
    return new NumberFilterParam("carMaxPerDayPriceFilter", +this.getFilterFieldValue("carMaxPerDayPriceFilter"));
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

}
