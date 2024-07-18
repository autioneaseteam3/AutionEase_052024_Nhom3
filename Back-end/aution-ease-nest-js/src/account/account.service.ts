import { Injectable } from '@nestjs/common';
import { Accounts } from '@prisma/client';
import { BaseService } from 'src/common/helpers';
import { CreateAccountDTO, UpdateAccountDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AccountService extends BaseService<
  Accounts,
  CreateAccountDTO,
  UpdateAccountDTO
> {
  constructor(protected prisma: PrismaService) {
    super(prisma, 'Accounts');
  }
  async createAccounts(dto: CreateAccountDTO): Promise<Accounts> {
    const userID = uuidv4();

    const createDto: Accounts = { userID: userID, ...dto };
    const data = await this.prisma.accounts.create({
      data: createDto,
    });
    return data;
  }
  async deleteAccounts(id: string): Promise<Accounts> {
    const data = await this.prisma.accounts.update({
      where: {
        userID: id,
      },
      data: { delflag: false },
    });
    return data;
  }
}
