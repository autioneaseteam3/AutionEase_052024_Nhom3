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

import { InspectorsService } from './inspector.service';
import { CreateInspectorDTO, InspectorDTO, UpdateInspectorDTO } from './dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ApiResult, Role } from 'src/common/decorators';
import { ERole } from 'src/common/enums';

@ApiBearerAuth()
@ApiCookieAuth()
@ApiTags('inspectors')
@UseGuards(RolesGuard)
@Role(ERole.ADMIN)
@Controller('inspectors')
export class InspectorController {
  constructor(protected inspectorsService: InspectorsService) {}
  @Get()
  @ApiResult(InspectorDTO, 'inspector', 'getAll')
  findAll() {
    return this.inspectorsService.findAll();
  }

  @ApiResult(InspectorDTO, 'inspector', 'getOne')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.inspectorsService.findOne(id);
  }

  @ApiResult(InspectorDTO, 'inspector', 'create')
  @Post()
  createOne(@Body() dto: CreateInspectorDTO) {
    return this.inspectorsService.create(dto);
  }

  @ApiResult(InspectorDTO, 'inspector', 'update')
  @Patch(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInspectorDTO,
  ) {
    return this.inspectorsService.update(id, dto);
  }

  @ApiResult(InspectorDTO, 'inspector', 'delete')
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.inspectorsService.delete(id);
  }
}
