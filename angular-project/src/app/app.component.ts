import { Component } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Cars[] = [];
  carName: string = '';
  carColor: string = '';

  constructor(private carsService: CarsService) { }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Cars) => {
        this.cars.push(car);
          });
        this.carName = '';
        this.carColor = '';
      }
}
