import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    return {
      data: await this.prisma.requests.findMany({
        where: {
          delflag: {
            not: false,
          },
        },
      }),
      message: `Get all requests success`,
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.requests.findUnique({
      where: {
        requestID: id,
        delflag: {
          not: false,
        },
      },
    });

    if (!data) throw new NotFoundException(`No requests found with this id`);

    return {
      data,
      message: `Get request success`,
    };
  }

  async update(id: number, dto: UpdateRequestDTO) {
    const updatedData = await this.prisma.requests.update({
      where: {
        requestID: id,
        delflag: {
          not: false,
        },
      },
      data: dto,
    });

    return {
      data: updatedData,
      message: `Update request success`,
    };
  }

  async delete(id: number) {
    await this.prisma.requests.update({
      where: {
        requestID: id,
        delflag: {
          not: false,
        },
      },
      data: {
        delflag: false,
      },
    });

    return {
      data: null,
      message: `Delete request success`,
    };
  }
}
