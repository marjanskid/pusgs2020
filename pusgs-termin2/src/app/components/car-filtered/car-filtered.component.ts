import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-filtered',
  templateUrl: './car-filtered.component.html',
  styleUrls: ['./car-filtered.component.css']
})
export class CarFilteredComponent implements OnInit {

  @Input() filteredCars;

  constructor() { }

  ngOnInit(): void {
  }

}
