import { Injectable } from '@nestjs/common';
import { DetailInspectors } from '@prisma/client';
import { BaseService } from 'src/common/helpers';
import { CreateDetailInspectorDTO, UpdateDetailInspectorDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetailInspectorService extends BaseService<
  DetailInspectors,
  CreateDetailInspectorDTO,
  UpdateDetailInspectorDTO
> {
  constructor(protected prisma: PrismaService) {
    super(prisma, 'DetailInspectors');
  }
}
