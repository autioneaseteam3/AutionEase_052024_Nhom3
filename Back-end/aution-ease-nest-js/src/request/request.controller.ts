import { Controller, UseGuards } from '@nestjs/common';
import { Requests } from '@prisma/client';

import { Role } from 'src/common/decorators';
import { ERole } from 'src/common/enums';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { BaseController } from 'src/common/helpers';
import { CreateRequestDTO, UpdateRequestDTO } from './dto';
import { RequestService } from './request.service';

@UseGuards(RolesGuard)
@Role(ERole.USER)
@Controller('requests')
export class RequestController extends BaseController<
  Requests,
  CreateRequestDTO,
  UpdateRequestDTO
> {
  constructor(protected requestService: RequestService) {
    super(requestService);
  }
}
