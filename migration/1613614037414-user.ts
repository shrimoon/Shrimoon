import {MigrationInterface, QueryRunner} from "typeorm";

export class init1613614037414 implements MigrationInterface {
    name = 'init1613614037414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "user_gender_enum" AS ENUM('male', 'female', 'not-applicable')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying(20) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "name" character varying NOT NULL, "hashedPassword" character varying NOT NULL, "avatarUrl" character varying, "bannerUrl" character varying, "host" character varying, "profileName" character varying, "birthday" character varying, "gender" "user_gender_enum", "isFederated" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_gender_enum"`);
    }

}
