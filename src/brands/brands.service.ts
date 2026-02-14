import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v7 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  brands: Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    console.log('esta es la brand', brandDb);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb.updatedAt = new Date().getTime();
        brandDb = { ...brandDb, ...updateBrandDto };
        return brandDb;
      }
      return brand;
    });

    return this.brands;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return this.brands;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
