import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCookieAuth, ApiTags } from '@nestjs/swagger';

// import { BaseController } from 'src/common/helpers';
import {
  CreateDetailInspectorDTO,
  DetailInspectorDTO,
  UpdateDetailInspectorDTO,
} from './dto';
import { DetailInspectorService } from './detail-inspector.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ERole } from 'src/common/enums';
import { ApiResult, Role } from 'src/common/decorators';

@ApiBearerAuth()
@ApiCookieAuth()
@ApiTags('detail-inspectors')
@UseGuards(RolesGuard)
@Role(ERole.ADMIN)
@Controller('detail-inspectors')
export class DetailInspectorController {
  constructor(protected detailInspectorService: DetailInspectorService) {}

  @ApiResult(DetailInspectorDTO, 'detail inspector', 'getAll')
  @Get()
  findAll() {
    return this.detailInspectorService.findAll();
  }

  @ApiResult(DetailInspectorDTO, 'detail inspector', 'getOne')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.detailInspectorService.findOne(id);
  }

  @ApiResult(DetailInspectorDTO, 'detail inspector', 'create')
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createOne(@Body() dto: CreateDetailInspectorDTO) {
    return this.detailInspectorService.create(dto);
  }

  @ApiResult(DetailInspectorDTO, 'detail inspector', 'update')
  @Patch(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDetailInspectorDTO,
  ) {
    return this.detailInspectorService.update(id, dto);
  }

  @ApiResult(DetailInspectorDTO, 'detail inspector', 'delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.detailInspectorService.delete(id);
  }
}
