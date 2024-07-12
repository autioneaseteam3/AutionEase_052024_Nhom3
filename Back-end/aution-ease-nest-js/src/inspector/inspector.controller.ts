import { Controller } from '@nestjs/common';
import { InspectorsService } from './inspector.service';
import { CreateInspectorDTO, UpdateInspectorDTO } from './dto';
import { BaseController } from 'src/common/helpers';
import { Inspectors } from '@prisma/client';

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
