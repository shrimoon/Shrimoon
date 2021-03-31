import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'src/interfaces/user';
import { WithToken } from 'src/interfaces/WithToken';
import { UserService } from 'src/services/user';
import { generatePasswordAsync } from 'src/utils/password';

class CreateUserBody {
  @IsString()
  @IsNotEmpty()
  password: string;
}

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    const u = await this.userService.findByIdAsync(userId);
    if (!u) {
      throw new NotFoundException();
    }
    return {
      ok: true,
      response: this.userService.packAsync(u),
    };
  }

  @Post('new/:name')
  async createUser(@Param('name') name: string, @Body() body: CreateUserBody) {
    const u = await this.userService.findByNameAsync(name);
    if (u) {
      throw new BadRequestException('DUPLICATED_NAME');
    }
    const pass = await generatePasswordAsync(body.password);
    const user = await this.userService.createAsync(name, pass);

    const response: WithToken<IUser> = {
      ...(await this.userService.packAsync(user)),
      token: user.token,
    };

    return {
      ok: true,
      response,
    };
  }
}
