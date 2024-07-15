import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private isDev: boolean;
  constructor(config: ConfigService) {
    this.isDev = config.get('NODE_ENV') === 'development';
    this.registerCatchAllExceptionsHook();
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();
    const status = this.getStatus(exception);
    let defaultRes = {};
    let stack: unknown;

    if (status === HttpStatus.INTERNAL_SERVER_ERROR)
      defaultRes = { statusCode: 500, message: 'Something went wrong' };

    if (exception instanceof PrismaClientKnownRequestError) {
      let statusCode: number;
      let msg: string;
      stack = exception.stack;
      if (exception.code === 'P2025') {
        statusCode = 404;
        msg = 'No record found with this id';
      }
      defaultRes = {
        statusCode,
        message: msg,
      };
    }

    if (exception instanceof HttpException) {
      defaultRes = exception.getResponse();
      stack = exception.stack;
    }

    if (this.isDev)
      defaultRes = {
        ...defaultRes,
        error: exception,
      };

    if (this.isDev && stack)
      defaultRes = {
        ...defaultRes,
        stack,
      };

    response.status(status).json(defaultRes);
  }

  getStatus(exception: unknown) {
    if (exception instanceof HttpException) return exception.getStatus();
    if (exception instanceof PrismaClientKnownRequestError)
      return HttpStatus.INTERNAL_SERVER_ERROR;

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  registerCatchAllExceptionsHook() {
    process.on(
      'unhandledRejection',
      (reason) => console.error('UNHANDLED REJECTION', reason),
      // process.exit(1)
    );

    process.on(
      'uncaughtException',
      (reason) => console.error('UNCAUGHT EXCEPTION', reason),
      // process.exit(1)
    );
  }
}
