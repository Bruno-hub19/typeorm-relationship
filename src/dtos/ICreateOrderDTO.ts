import { Customer } from 'entities/Customer';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface ICreateOrderDTO {
  customer: Customer;
  products: IProduct[];
}

export { ICreateOrderDTO };
