import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/api/v1/users';
import { StatusController } from './controllers/api/v1/status';
import { UserService } from './services/user';
import { StatusService } from './services/status';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSettings } from './env';
import { AuthController } from './controllers/api/v1/auth';
import { FrontendModule } from './modules/frontend';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseSettings,
      type: 'postgres',
      entities: [`dist/entities/*.js`],
      synchronize: false,
    }),
    FrontendModule,
  ],
  controllers: [
    AppController,
    UsersController,
    StatusController,
    AuthController,
  ],
  providers: [AppService, UserService, StatusService],
})
export class AppModule {}
