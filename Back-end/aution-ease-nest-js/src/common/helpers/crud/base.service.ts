import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BaseService<Model, CreateDTO, UpdateDTO> {
  private readonly model: string;
  public readonly pluralModelName: string;
  public readonly singularModelName: string;
  private readonly modelId: string;

  constructor(
    protected readonly prisma: PrismaService,
    model: Prisma.ModelName,
  ) {
    this.model = model[0].toLocaleLowerCase() + model.slice(1);
    const index = this.model
      .split('')
      .findIndex((char) => char.toUpperCase() === char);

    this.pluralModelName =
      index !== -1
        ? model.toLocaleLowerCase().slice(0, index) +
          ' ' +
          model.toLocaleLowerCase().slice(index)
        : model.toLocaleLowerCase();
    this.singularModelName = this.pluralModelName.slice(
      0,
      this.pluralModelName.length - 1,
    );

    // console.log(this.pluralModelName);
    this.modelId = this.model.slice(0, model.length - 1) + 'ID';
  }

  async findAll() {
    // console.log(this.model);
    return {
      data: await this.prisma[this.model].findMany(),
      message: `Get all ${this.pluralModelName} success`,
    };
  }

  async findOne(id: number) {
    const data = await this.prisma[this.model].findUnique({
      where: {
        [this.modelId]: id,
      },
    });

    if (!data)
      throw new NotFoundException(
        `No ${this.pluralModelName} found with this id`,
      );

    return {
      data,
      message: `Get ${this.singularModelName} success`,
    };
  }

  async create(dto: CreateDTO) {
    return {
      data: await this.prisma[this.model].create({
        data: dto,
      }),
      message: `Create ${this.singularModelName} success`,
    };
  }

  async update(id: number, dto: UpdateDTO) {
    const updatedData = await this.prisma[this.model].update({
      where: {
        [this.modelId]: id,
      },
      data: dto,
    });

    return {
      data: updatedData,
      message: `Update ${this.singularModelName} success`,
    };
  }

  async delete(id: number) {
    await this.prisma[this.model].delete({
      where: {
        [this.modelId]: id,
      },
    });

    return {
      data: null,
      message: `Delete ${this.singularModelName} success`,
    };
  }
}
