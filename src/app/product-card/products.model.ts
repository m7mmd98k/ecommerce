export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public quantity: number,
    public category: Categories
  ) {}
}
export enum Categories {
  phone = 1,
  computer,
  tablet,
  console,
}
