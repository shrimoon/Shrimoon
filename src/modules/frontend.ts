import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { FrontendMiddleware } from 'src/middlewares/frontend';

@Module({})
export class FrontendModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
