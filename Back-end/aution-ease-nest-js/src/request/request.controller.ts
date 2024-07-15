import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCookieAuth, ApiTags } from '@nestjs/swagger';

import { ApiResult, Role } from 'src/common/decorators';
import { ERole } from 'src/common/enums';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { RequestService } from './request.service';
import { CreateRequestDTO, RequestDTO, UpdateRequestDTO } from './dto';

@ApiBearerAuth()
@ApiCookieAuth()
@ApiTags('requests')
@UseGuards(RolesGuard)
@Role(ERole.USER)
@Controller('requests')
export class RequestController {
  constructor(protected requestService: RequestService) {}
  @ApiResult(RequestDTO, 'request', 'getAll')
  @Get()
  findAll() {
    return this.requestService.findAll();
  }

  @ApiResult(RequestDTO, 'request', 'getOne')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.findOne(id);
  }

  @ApiResult(RequestDTO, 'request', 'create')
  @Post()
  createOne(@Body() dto: CreateRequestDTO) {
    return this.requestService.create(dto);
  }

  @ApiResult(RequestDTO, 'request', 'update')
  @Patch(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRequestDTO,
  ) {
    return this.requestService.update(id, dto);
  }

  @ApiResult(RequestDTO, 'request', 'delete')
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.delete(id);
  }
}
