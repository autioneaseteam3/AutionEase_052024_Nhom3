import { Test, TestingModule } from '@nestjs/testing';
import { InspectorService } from './inspector.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('InspectorService', () => {
  let service: InspectorService;
  let prisma: PrismaService;

  const inspectorId = 12345;

  const invalidInspectorInput = {
    liscense: 'Invalid License',
  };

  const inspectorInput = {
    liscense: 'License',
  };

  const inspector = {
    inspectorID: 123,
    liscense: 'License',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InspectorService, PrismaService, ConfigService],
    }).compile();

    service = module.get<InspectorService>(InspectorService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    describe('give the inspectors data is empty in DB', () => {
      it('should return an empty array', async () => {
        jest.spyOn(prisma.inspectors, 'findMany').mockResolvedValue([]);

        const result = await service.findAll();

        expect(prisma.inspectors.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([]);
      });
    });

    describe('give the inspectors data is not empty in DB', () => {
      it('should return a list of inspectors', async () => {
        jest
          .spyOn(prisma.inspectors, 'findMany')
          .mockResolvedValue([inspector]);

        const result = await service.findAll();

        expect(prisma.inspectors.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([inspector]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.inspectors, 'findUnique')
          .mockRejectedValue(
            new NotFoundException('No inspectors found with this id'),
          );

        await expect(service.findOne(inspectorId)).rejects.toThrow(
          'No inspectors found with this id',
        );
        expect(prisma.inspectors.findUnique).toHaveBeenCalled();
      });
    });

    describe('give the valid id', () => {
      it('should return a inspectors', async () => {
        jest
          .spyOn(prisma.inspectors, 'findUnique')
          .mockResolvedValue(inspector);

        await expect(service.findOne(inspectorId)).resolves.toStrictEqual(
          inspector,
        );
        expect(prisma.inspectors.findUnique).toHaveBeenCalled();
      });
    });
  });

  describe('create', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.inspectors, 'create')
          .mockRejectedValue(new BadRequestException('Invalid input'));

        try {
          await service.create(invalidInspectorInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.inspectors.create).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new inspectors', async () => {
        jest.spyOn(prisma.inspectors, 'create').mockResolvedValue(inspector);

        await expect(service.create(inspectorInput)).resolves.toStrictEqual(
          inspector,
        );

        expect(prisma.inspectors.create).toHaveBeenCalled();
      });
    });
  });

  describe('update', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.inspectors, 'update')
          .mockRejectedValue(new NotFoundException());
        try {
          await service.update(inspectorId, inspectorInput);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.inspectors.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.inspectors, 'update')
          .mockRejectedValue(new BadRequestException());
        try {
          await service.update(inspectorId, invalidInspectorInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.inspectors.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return an updated inspectors', async () => {
        jest.spyOn(prisma.inspectors, 'update').mockResolvedValue(inspector);

        await expect(
          service.update(inspectorId, inspectorInput),
        ).resolves.toStrictEqual(inspector);

        expect(prisma.inspectors.update).toHaveBeenCalled();
      });
    });
  });

  describe('delete', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.inspectors, 'delete')
          .mockRejectedValue(new NotFoundException());

        try {
          await service.delete(inspectorId);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.inspectors.delete).toHaveBeenCalledTimes(1);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(prisma.inspectors, 'delete').mockResolvedValue(null);

        await expect(service.delete(inspectorId)).resolves.toBe(null);

        expect(prisma.inspectors.delete).toHaveBeenCalledTimes(1);
      });
    });
  });
});
