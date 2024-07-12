import { Injectable } from '@nestjs/common';
import { Requests } from '@prisma/client';
import { BaseService } from 'src/common/helpers';
import { CreateRequestDTO, UpdateRequestDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestService extends BaseService<
  Requests,
  CreateRequestDTO,
  UpdateRequestDTO
> {
  constructor(protected prisma: PrismaService) {
    super(prisma, 'Requests');
  }
}
