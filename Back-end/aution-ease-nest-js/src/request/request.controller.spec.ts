import { Test, TestingModule } from '@nestjs/testing';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AccessControlService } from 'src/shared/access-control.service';

describe('RequestController', () => {
  let requestController: RequestController;
  let requestService: RequestService;

  const requestId = 12345;

  const invalidRequestInput = {
    nameRequest: 'Sample Request',
    descriptionRequest: 'This is a sample request.',
    verified: true,
    requestStatus: false,
    detailInspectorID: 123,
    userID: 'user123',
    assetID: 456,
    delflag: false,
  };

  const requestInput = {
    nameRequest: 'Sample Request',
    descriptionRequest: 'This is a sample request.',
    verified: true,
    requestStatus: false,
    detailInspectorID: 123,
    userID: 'user123',
    assetID: 456,
    delflag: false,
  };

  const request = {
    requestID: 1,
    nameRequest: 'Sample Request',
    descriptionRequest: 'This is a sample request.',
    verified: true,
    requestStatus: false,
    detailInspectorID: 123,
    userID: 'user123',
    assetID: 456,
    delflag: false,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestController],
      providers: [
        RequestService,
        PrismaService,
        ConfigService,
        AccessControlService,
      ],
    }).compile();

    requestController = module.get<RequestController>(RequestController);
    requestService = module.get<RequestService>(RequestService);
  });

  it('should be defined', () => {
    expect(requestController).toBeDefined();
  });

  describe('findAll', () => {
    describe('the requests data is in DB', () => {
      it('should return a list of requests', async () => {
        jest.spyOn(requestService, 'findAll').mockResolvedValue([request]);

        const requests = await requestController.findAll();
        expect(requests).toStrictEqual([request]);
      });
    });
    describe('the requests data is empty in DB', () => {
      it('should return a empty array', async () => {
        jest.spyOn(requestService, 'findAll').mockResolvedValue([]);

        const result = await requestController.findAll();

        expect(result).toStrictEqual([]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(requestService, 'findOne').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await requestController.findOne(123456);
        } catch (err) {
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return a request', async () => {
        jest.spyOn(requestService, 'findOne').mockResolvedValue(request);

        const result = await requestController.findOne(1);
        expect(result).toStrictEqual(request);
      });
    });
  });

  describe('createOne', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest.spyOn(requestService, 'create').mockRejectedValue({
          statusCode: 400,
        });
        try {
          await requestController.createOne(invalidRequestInput);
        } catch (err) {
          expect(requestService.create).toHaveBeenCalledWith(
            invalidRequestInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new request', async () => {
        jest.spyOn(requestService, 'create').mockResolvedValue(request);

        const result = await requestController.createOne(requestInput);

        expect(requestService.create).toHaveBeenCalledWith(requestInput);
        expect(result).toStrictEqual(request);
      });
    });
  });

  describe('updateOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(requestService, 'update').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await requestController.updateOne(requestId, requestInput);
        } catch (err) {
          expect(requestService.update).toHaveBeenCalledWith(
            requestId,
            requestInput,
          );
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 404', async () => {
        jest.spyOn(requestService, 'update').mockRejectedValue({
          statusCode: 400,
        });

        try {
          await requestController.updateOne(requestId, invalidRequestInput);
        } catch (err) {
          expect(requestService.update).toHaveBeenCalledWith(
            requestId,
            invalidRequestInput,
          );
          expect(err.statusCode).toBe(400);
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return a updated request', async () => {
        jest.spyOn(requestService, 'update').mockResolvedValue(request);

        const result = await requestController.updateOne(
          requestId,
          requestInput,
        );

        expect(requestService.update).toHaveBeenCalledWith(
          requestId,
          requestInput,
        );
        expect(result).toStrictEqual(request);
      });
    });
  });

  describe('deleteOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest.spyOn(requestService, 'delete').mockRejectedValue({
          statusCode: 404,
        });

        try {
          await requestController.deleteOne(123456);
        } catch (err) {
          // console.log(err);
          expect(err.statusCode).toBe(404);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(requestService, 'delete').mockResolvedValue(null);

        const result = await requestController.deleteOne(requestId);

        expect(requestService.delete).toHaveBeenCalledWith(requestId);
        expect(result).toBe(null);
      });
    });
  });
});
