import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'src/interfaces/user';
import { WithToken } from 'src/interfaces/WithToken';
import { UserService } from 'src/services/user';
import { verifyPasswordAsync } from 'src/utils/password';

class LoginBody {
  @IsString()
  @IsNotEmpty()
  password: string;
}
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post(':name')
  async login(@Param('name') name: string, @Body() body: LoginBody) {
    const { password } = body;
    const u = await this.userService.findByNameAsync(name);
    if (!u) {
      throw new BadRequestException('No such user.');
    }
    const { hashedPassword } = u;
    const isVerified = verifyPasswordAsync(password, hashedPassword);
    if (!isVerified) {
      throw new BadRequestException('Invalid password.');
    }

    const response: WithToken<IUser> = {
      ...(await this.userService.packAsync(u)),
      token: u.token,
    };

    return {
      ok: true,
      response,
    };
  }
}
