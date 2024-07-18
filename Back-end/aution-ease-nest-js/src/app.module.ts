import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InspectorsModule } from './inspector/inspector.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptors';
import { AllExceptionsFilter } from './common/filters';
import { SharedModule } from './shared/shared.module';
import { RequestModule } from './request/request.module';
import { DetailInspectorModule } from './detail-inspector/detail-inspector.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    InspectorsModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    RequestModule,
    AccountModule,
    DetailInspectorModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
