import { Test, TestingModule } from '@nestjs/testing';
import { DetailInspectorService } from './detail-inspector.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('DetailInspectorService', () => {
  let service: DetailInspectorService;
  let prisma: PrismaService;

  const detailInspectorId = 12345;

  const invalidDetailInspectorInput = {
    inspectorID: 123,
    userID: '123',
  };

  const detailInspectorInput = {
    inspectorID: 123,
    userID: '123',
  };

  const detailInspector = {
    detailInspectorID: 1,
    inspectorID: 123,
    userID: '123',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailInspectorService, PrismaService, ConfigService],
    }).compile();

    service = module.get<DetailInspectorService>(DetailInspectorService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    describe('give the detail inspectors data is empty in DB', () => {
      it('should return an empty array', async () => {
        jest.spyOn(prisma.detailInspectors, 'findMany').mockResolvedValue([]);

        const result = await service.findAll();

        expect(prisma.detailInspectors.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([]);
      });
    });

    describe('give the detail inspectors data is not empty in DB', () => {
      it('should return a list of detail inspectors', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'findMany')
          .mockResolvedValue([detailInspector]);

        const result = await service.findAll();

        expect(prisma.detailInspectors.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([detailInspector]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'findUnique')
          .mockRejectedValue(
            new NotFoundException('No detailInspectors found with this id'),
          );

        await expect(service.findOne(detailInspectorId)).rejects.toThrow(
          'No detailInspectors found with this id',
        );
        expect(prisma.detailInspectors.findUnique).toHaveBeenCalled();
      });
    });

    describe('give the valid id', () => {
      it('should return a detailInspectors', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'findUnique')
          .mockResolvedValue(detailInspector);

        await expect(service.findOne(detailInspectorId)).resolves.toStrictEqual(
          detailInspector,
        );
        expect(prisma.detailInspectors.findUnique).toHaveBeenCalled();
      });
    });
  });

  describe('create', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'create')
          .mockRejectedValue(new BadRequestException('Invalid input'));

        try {
          await service.create(invalidDetailInspectorInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.detailInspectors.create).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new detailInspectors', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'create')
          .mockResolvedValue(detailInspector);

        await expect(
          service.create(detailInspectorInput),
        ).resolves.toStrictEqual(detailInspector);

        expect(prisma.detailInspectors.create).toHaveBeenCalled();
      });
    });
  });

  describe('update', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'update')
          .mockRejectedValue(new NotFoundException());
        try {
          await service.update(detailInspectorId, detailInspectorInput);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.detailInspectors.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'update')
          .mockRejectedValue(new BadRequestException());
        try {
          await service.update(detailInspectorId, invalidDetailInspectorInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.detailInspectors.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return an updated detailInspectors', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'update')
          .mockResolvedValue(detailInspector);

        await expect(
          service.update(detailInspectorId, detailInspectorInput),
        ).resolves.toStrictEqual(detailInspector);

        expect(prisma.detailInspectors.update).toHaveBeenCalled();
      });
    });
  });

  describe('delete', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.detailInspectors, 'delete')
          .mockRejectedValue(new NotFoundException());

        try {
          await service.delete(detailInspectorId);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.detailInspectors.delete).toHaveBeenCalledTimes(1);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(prisma.detailInspectors, 'delete').mockResolvedValue(null);

        await expect(service.delete(detailInspectorId)).resolves.toBe(null);

        expect(prisma.detailInspectors.delete).toHaveBeenCalledTimes(1);
      });
    });
  });
});
