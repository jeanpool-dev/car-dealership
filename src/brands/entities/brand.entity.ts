export class Brand {
  id: string;
  name: string;

  createdAt: number;
  updatedAt?: number;

  constructor(id: string, name: string, createdAt: number, updatedAt?: number) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
