import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { OrdersProducts } from './OrdersProducts';
import { Customer } from './Customer';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(type => OrdersProducts, orders_products => orders_products.order, {
    cascade: ['insert'],
  })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Order };
