import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { StatusController } from './controllers/status/status.controller';
import { UserService } from './services/user/user.service';
import { StatusService } from './services/status/status.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, StatusController],
  providers: [AppService, UserService, StatusService],
})
export class AppModule {}
