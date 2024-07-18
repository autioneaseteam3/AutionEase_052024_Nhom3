import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCookieAuth, ApiTags } from '@nestjs/swagger';

import { ApiResult, Role } from 'src/common/decorators';
import { ERole } from 'src/common/enums';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AccountService } from './account.service';
import { CreateAccountDTO, AccountDTO, UpdateAccountDTO } from './dto';

@ApiBearerAuth()
@ApiCookieAuth()
@ApiTags('accounts')
@UseGuards(RolesGuard)
@Role(ERole.USER)
@Controller('accounts')
export class AccountController {
  constructor(protected accountService: AccountService) {}
  @ApiResult(AccountDTO, 'account', 'getAll')
  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @ApiResult(AccountDTO, 'account', 'getOne')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(id);
  }

  @ApiResult(AccountDTO, 'account', 'create')
  @Post()
  createOne(@Body() dto: CreateAccountDTO) {
    return this.accountService.createAccounts(dto);
  }

  @ApiResult(AccountDTO, 'account', 'update')
  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() dto: UpdateAccountDTO) {
    return this.accountService.update(id, dto);
  }

  @ApiResult(AccountDTO, 'account', 'delete')
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.accountService.deleteAccounts(id);
  }
}
