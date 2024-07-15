import { Test, TestingModule } from '@nestjs/testing';
import { DetailInspectorController } from './detail-inspector.controller';
import { DetailInspectorService } from './detail-inspector.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AccessControlService } from 'src/shared/access-control.service';

describe('DetailInspectorController', () => {
  let detailInspectorController: DetailInspectorController;
  let detailInspectorService: DetailInspectorService;

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
      controllers: [DetailInspectorController],
      providers: [
        DetailInspectorService,
        PrismaService,
        ConfigService,
        AccessControlService,
      ],
    }).compile();

    detailInspectorController = module.get<DetailInspectorController>(
      DetailInspectorController,
    );
    detailInspectorService = module.get<DetailInspectorService>(
      DetailInspectorService,
    );
  });

  it('should be defined', () => {
    expect(detailInspectorController).toBeDefined();
  });

  describe('findAll', () => {
    describe('the detail inspectors data is in DB', () => {
      it('should return a list of detailInspectors', async () => {
        jest
          .spyOn(detailInspectorService, 'findAll')
          .mockResolvedValue([detailInspector]);

        const detailInspectors = await detailInspectorController.findAll();
        expect(detailInspectors).toStrictEqual([detailInspector]);
      });
    });
    describe('the detail inspectors data is empty in DB', () => {
      it('should return a empty array', async () => {
        jest.spyOn(detailInspectorService, 'findAll').mockResolvedValue([]);

        const result = await detailInspectorController.findAll();

        expect(result).toStrictEqual([]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(detailInspectorService, 'findOne').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await detailInspectorController.findOne(123456);
        } catch (err) {
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return a detailInspector', async () => {
        jest
          .spyOn(detailInspectorService, 'findOne')
          .mockResolvedValue(detailInspector);

        const result = await detailInspectorController.findOne(1);
        expect(result).toStrictEqual(detailInspector);
      });
    });
  });

  describe('createOne', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest.spyOn(detailInspectorService, 'create').mockRejectedValue({
          statusCode: 400,
        });
        try {
          await detailInspectorController.createOne(
            invalidDetailInspectorInput,
          );
        } catch (err) {
          expect(detailInspectorService.create).toHaveBeenCalledWith(
            invalidDetailInspectorInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new detailInspector', async () => {
        jest
          .spyOn(detailInspectorService, 'create')
          .mockResolvedValue(detailInspector);

        const result =
          await detailInspectorController.createOne(detailInspectorInput);

        expect(detailInspectorService.create).toHaveBeenCalledWith(
          detailInspectorInput,
        );
        expect(result).toStrictEqual(detailInspector);
      });
    });
  });

  describe('updateOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(detailInspectorService, 'update').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await detailInspectorController.updateOne(
            detailInspectorId,
            detailInspectorInput,
          );
        } catch (err) {
          expect(detailInspectorService.update).toHaveBeenCalledWith(
            detailInspectorId,
            detailInspectorInput,
          );
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 404', async () => {
        jest.spyOn(detailInspectorService, 'update').mockRejectedValue({
          statusCode: 400,
        });

        try {
          await detailInspectorController.updateOne(
            detailInspectorId,
            invalidDetailInspectorInput,
          );
        } catch (err) {
          expect(detailInspectorService.update).toHaveBeenCalledWith(
            detailInspectorId,
            invalidDetailInspectorInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return a updated detailInspector', async () => {
        jest
          .spyOn(detailInspectorService, 'update')
          .mockResolvedValue(detailInspector);

        const result = await detailInspectorController.updateOne(
          detailInspectorId,
          detailInspectorInput,
        );

        expect(detailInspectorService.update).toHaveBeenCalledWith(
          detailInspectorId,
          detailInspectorInput,
        );
        expect(result).toStrictEqual(detailInspector);
      });
    });
  });

  describe('deleteOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(detailInspectorService, 'delete').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await detailInspectorController.deleteOne(123456);
        } catch (err) {
          // console.log(err);
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(detailInspectorService, 'delete').mockResolvedValue(null);

        const result =
          await detailInspectorController.deleteOne(detailInspectorId);

        expect(detailInspectorService.delete).toHaveBeenCalledWith(
          detailInspectorId,
        );
        expect(result).toBe(null);
      });
    });
  });
});
