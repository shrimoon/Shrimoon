import {MigrationInterface, QueryRunner} from "typeorm";

export class token1613618312985 implements MigrationInterface {
    name = 'token1613618312985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "token" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."token" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."token" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "token" DROP NOT NULL`);
    }

}
