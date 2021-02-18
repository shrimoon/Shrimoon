import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
