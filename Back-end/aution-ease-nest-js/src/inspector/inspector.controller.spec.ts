import { Test, TestingModule } from '@nestjs/testing';
import { InspectorController } from './inspector.controller';
import { InspectorService } from './inspector.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AccessControlService } from 'src/shared/access-control.service';

describe('InspectorController', () => {
  let inspectorController: InspectorController;
  let inspectorService: InspectorService;

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
      controllers: [InspectorController],
      providers: [
        InspectorService,
        PrismaService,
        ConfigService,
        AccessControlService,
      ],
    }).compile();

    inspectorController = module.get<InspectorController>(InspectorController);
    inspectorService = module.get<InspectorService>(InspectorService);
  });

  it('should be defined', () => {
    expect(inspectorController).toBeDefined();
  });

  describe('findAll', () => {
    describe('the inspectors data is in DB', () => {
      it('should return a list of inspectors', async () => {
        jest.spyOn(inspectorService, 'findAll').mockResolvedValue([inspector]);

        const inspectors = await inspectorController.findAll();
        expect(inspectors).toStrictEqual([inspector]);
      });
    });
    describe('the inspectors data is empty in DB', () => {
      it('should return a empty array', async () => {
        jest.spyOn(inspectorService, 'findAll').mockResolvedValue([]);

        const result = await inspectorController.findAll();

        expect(result).toStrictEqual([]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(inspectorService, 'findOne').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await inspectorController.findOne(123456);
        } catch (err) {
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return a inspector', async () => {
        jest.spyOn(inspectorService, 'findOne').mockResolvedValue(inspector);

        const result = await inspectorController.findOne(1);
        expect(result).toStrictEqual(inspector);
      });
    });
  });

  describe('createOne', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest.spyOn(inspectorService, 'create').mockRejectedValue({
          statusCode: 400,
        });
        try {
          await inspectorController.createOne(invalidInspectorInput);
        } catch (err) {
          expect(inspectorService.create).toHaveBeenCalledWith(
            invalidInspectorInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new inspector', async () => {
        jest.spyOn(inspectorService, 'create').mockResolvedValue(inspector);

        const result = await inspectorController.createOne(inspectorInput);

        expect(inspectorService.create).toHaveBeenCalledWith(inspectorInput);
        expect(result).toStrictEqual(inspector);
      });
    });
  });

  describe('updateOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(inspectorService, 'update').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await inspectorController.updateOne(inspectorId, inspectorInput);
        } catch (err) {
          expect(inspectorService.update).toHaveBeenCalledWith(
            inspectorId,
            inspectorInput,
          );
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 404', async () => {
        jest.spyOn(inspectorService, 'update').mockRejectedValue({
          statusCode: 400,
        });

        try {
          await inspectorController.updateOne(
            inspectorId,
            invalidInspectorInput,
          );
        } catch (err) {
          expect(inspectorService.update).toHaveBeenCalledWith(
            inspectorId,
            invalidInspectorInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return a updated inspector', async () => {
        jest.spyOn(inspectorService, 'update').mockResolvedValue(inspector);

        const result = await inspectorController.updateOne(
          inspectorId,
          inspectorInput,
        );

        expect(inspectorService.update).toHaveBeenCalledWith(
          inspectorId,
          inspectorInput,
        );
        expect(result).toStrictEqual(inspector);
      });
    });
  });

  describe('deleteOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(inspectorService, 'delete').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await inspectorController.deleteOne(123456);
        } catch (err) {
          // console.log(err);
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(inspectorService, 'delete').mockResolvedValue(null);

        const result = await inspectorController.deleteOne(inspectorId);

        expect(inspectorService.delete).toHaveBeenCalledWith(inspectorId);
        expect(result).toBe(null);
      });
    });
  });
});
