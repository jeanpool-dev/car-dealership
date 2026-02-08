import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuui } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

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

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuui(),
      ...createCarDto,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carDB = this.findOneById(id);

    const index = this.cars.findIndex((car) => car.id === id);
    const updatedCar = { ...carDB, ...updateCarDto, id } as Car;
    this.cars[index] = updatedCar;

    return updatedCar;
  }

  delete(id: string) {
    const cardDB = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return cardDB;
  }
}
