import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: '0',
      make: 'Toyota',
      model: 'Camry',
    },
    {
      id: '1',
      make: 'Honda',
      model: 'Civic',
    },
    {
      id: '2',
      make: 'Ford',
      model: 'Mustang',
    },
  ];
}
