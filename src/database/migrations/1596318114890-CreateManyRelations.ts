import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateManyRelations1596318114890
  implements MigrationInterface {
  name = 'CreateManyRelations1596318114890';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "order_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "product_id" uuid`,
    );
    await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "product_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "order_id"`,
    );
  }
}
