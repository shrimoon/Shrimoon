import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UserService {
  async findUserById(id: string) {
    throw new NotImplementedException();
  }
}
