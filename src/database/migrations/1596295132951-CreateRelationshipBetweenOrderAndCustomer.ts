import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateRelationshipBetweenOrderAndCustomer1596295132951
  implements MigrationInterface {
  name = 'CreateRelationshipBetweenOrderAndCustomer1596295132951';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
  }
}
