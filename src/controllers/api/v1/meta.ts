import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/services/user';

@Controller('api/v1/meta')
export class MetaController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getMeta() {
    return {
      ok: true,
      response: {
        version: '1.0.0-alpha.1',
        features: {},
        instanceName: null,
        adminInfo: {
          name: null,
          email: null,
        },
        totalStatuses: 0,
        maxStatusLength: 1000,
        totalUsers: await this.userService.countAsync(),
      },
    };
  }
}
