import { Gender, genders } from 'src/types/gender';
import { idColumnType } from 'src/types/id-column-type';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({
    ...idColumnType,
    nullable: false,
  })
  id: string;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
  })
  createdAt: Date;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
  })
  updatedAt: Date;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  hashedPassword: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  token: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  avatarUrl: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  bannerUrl: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  host: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  profileName: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  birthday: string | null;

  @Column({
    type: 'enum',
    nullable: true,
    enum: genders,
  })
  gender: Gender | null;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
  })
  isFederated: boolean;
}
