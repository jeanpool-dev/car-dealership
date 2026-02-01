import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuui } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuui(),
      brand: 'Toyota',
      model: 'Camry',
    },
    {
      id: uuui(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuui(),
      brand: 'Ford',
      model: 'Mustang',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }
}
