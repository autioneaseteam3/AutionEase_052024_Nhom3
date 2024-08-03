import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  constructor(private readonly reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const skip = this.reflector.get<boolean>(
      'skipGlobalInterceptor',
      context.getHandler(),
    );

    if (skip) return next.handle();

    const res = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => ({
        status: res.statusCode,
        message: data.message,
        data: data.data,
      })),
    );
  }
}
