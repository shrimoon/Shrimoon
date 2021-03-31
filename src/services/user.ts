import { Injectable } from '@nestjs/common';
import rndstr from 'rndstr';

import { User } from 'src/entities/user';
import { IUser } from 'src/interfaces/user';
import { generateIdAsync } from 'src/utils/generate-id';
import { generatePasswordAsync } from 'src/utils/password';

@Injectable()
export class UserService {
  async createAsync(
    name: string,
    pass: string,
    host?: string,
    createdAt?: Date,
  ): Promise<User> {
    const hashed = await generatePasswordAsync(pass);
    const u = new User();
    u.id = await generateIdAsync();
    u.createdAt = u.updatedAt = createdAt ?? new Date();
    u.host = host ?? null;
    u.name = name;
    u.hashedPassword = hashed;
    u.token = rndstr(20);
    await u.save();
    return u;
  }

  async findByIdAsync(id: string): Promise<User | null> {
    const u = await User.findOne(id);
    return u ?? null;
  }

  async findByNameAsync(name: string): Promise<User | null> {
    const u = await User.findOne({ name });
    return u ?? null;
  }

  async findByTokenAsync(token: string): Promise<User | null> {
    const u = await User.findOne({ token });
    return u ?? null;
  }

  async countAsync(): Promise<number> {
    return User.count();
  }

  async packAsync(user: User): Promise<IUser> {
    return {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      name: user.name,
      avatarUrl: user.avatarUrl,
      bannerUrl: user.bannerUrl,
      host: user.host,
      profileName: user.profileName,
      birthday: user.birthday,
      gender: user.gender,
      isFederated: user.isFederated,
    };
  }
}
