import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  private readonly id?: string;

  @IsString()
  @IsOptional()
  private readonly brand?: string;

  @IsString()
  @IsOptional()
  private readonly model?: string;

  constructor(id: string, brand: string, model: string) {
    this.id = id;
    this.brand = brand;
    this.model = model;
  }
}
