import { Controller, UseGuards } from '@nestjs/common';
import { InspectorsService } from './inspector.service';
import { CreateInspectorDTO, UpdateInspectorDTO } from './dto';
import { BaseController } from 'src/common/helpers';
import { Inspectors } from '@prisma/client';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Role } from 'src/common/decorators';
import { ERole } from 'src/common/enums';

@UseGuards(RolesGuard)
@Role(ERole.ADMIN)
@Controller('inspectors')
export class InspectorController extends BaseController<
  Inspectors,
  CreateInspectorDTO,
  UpdateInspectorDTO
> {
  constructor(protected inspectorsService: InspectorsService) {
    super(inspectorsService);
  }
}
