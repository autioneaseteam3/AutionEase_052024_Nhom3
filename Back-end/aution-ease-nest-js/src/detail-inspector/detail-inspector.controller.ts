import { Controller, UseGuards } from '@nestjs/common';
import { DetailInspectors } from '@prisma/client';

import { BaseController } from 'src/common/helpers';
import { CreateDetailInspectorDTO, UpdateDetailInspectorDTO } from './dto';
import { DetailInspectorService } from './detail-inspector.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { ERole } from 'src/common/enums';
import { Role } from 'src/common/decorators';

@UseGuards(RolesGuard)
@Role(ERole.ADMIN)
@Controller('detail-inspectors')
export class DetailInspectorController extends BaseController<
  DetailInspectors,
  CreateDetailInspectorDTO,
  UpdateDetailInspectorDTO
> {
  constructor(protected detailInspectorService: DetailInspectorService) {
    super(detailInspectorService);
  }
}
