import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'health check' })
  @ApiOkResponse({
    description: 'Ok',
    schema: {
      properties: {
        status: {
          type: 'string',
        },
        data: {
          type: 'string',
        },
      },
    },
  })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
