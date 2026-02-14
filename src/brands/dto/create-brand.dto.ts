import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
