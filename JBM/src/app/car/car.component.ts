import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carData: any;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carService
    .getCars()
    .subscribe(data => {this.carData = data;
    console.log(this.carData);
    });
  }
}
