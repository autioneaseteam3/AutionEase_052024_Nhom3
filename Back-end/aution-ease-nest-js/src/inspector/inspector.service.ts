import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInspectorDTO, UpdateInspectorDTO } from './dto';
import { Inspectors } from '@prisma/client';
import { BaseService } from 'src/common/helpers';

@Injectable()
export class InspectorsService extends BaseService<
  Inspectors,
  CreateInspectorDTO,
  UpdateInspectorDTO
> {
  constructor(protected prisma: PrismaService) {
    super(prisma, 'Inspectors');
  }
}
