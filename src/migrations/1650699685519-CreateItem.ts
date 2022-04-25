import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1650699685519 implements MigrationInterface {
    name = 'CreateItem1650699685519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
