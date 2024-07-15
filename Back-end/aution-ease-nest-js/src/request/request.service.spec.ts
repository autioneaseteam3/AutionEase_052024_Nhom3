import { Test, TestingModule } from '@nestjs/testing';
import { RequestService } from './request.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('RequestService', () => {
  let service: RequestService;
  let prisma: PrismaService;

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
  // * the warning prisma call and instantiate over 10 times is just because we use before each and each time we start test case we will create testing module and of course we have 12 test cases then it creates 12 times right
  // * and we because we have prisma provider then of course it will also instantiate when testing module instantiate right
  // * and maybe to avoid this warning we can set jest config: clearMocks: true, so basically after each mock it will reset and also instead of using beforeEach we use beforeAll so before all test case we instantiate the module instead of each test case
  // ! remember to set:  clearMocks: true because it might not work if we just use beforeAll

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [RequestService, PrismaService, ConfigService],
  //   }).compile();

  //   service = module.get<RequestService>(RequestService);
  //   prisma = module.get<PrismaService>(PrismaService);
  // });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestService, PrismaService, ConfigService],
    }).compile();

    service = module.get<RequestService>(RequestService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  // afterEach(async () => {
  // * we just instantiate prisma for testing module we don't really connect the DB and we just testing with unit tests so therefore there is no need to do it like this
  //   await prisma.$disconnect();
  // });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    describe('give the requests data is empty in DB', () => {
      it('should return an empty array', async () => {
        jest.spyOn(prisma.requests, 'findMany').mockResolvedValue([]);

        const result = await service.findAll();

        expect(prisma.requests.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([]);
      });
    });

    describe('give the requests data is not empty in DB', () => {
      it('should return a list of requests', async () => {
        jest.spyOn(prisma.requests, 'findMany').mockResolvedValue([request]);

        const result = await service.findAll();

        expect(prisma.requests.findMany).toHaveBeenCalled();
        expect(result).toStrictEqual([request]);
      });
    });
  });

  describe('findOne', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.requests, 'findUnique')
          .mockRejectedValue(
            new NotFoundException('No requests found with this id'),
          );

        await expect(service.findOne(requestId)).rejects.toThrow(
          'No requests found with this id',
        );
        expect(prisma.requests.findUnique).toHaveBeenCalled();
      });
    });

    describe('give the valid id', () => {
      it('should return a requests', async () => {
        jest.spyOn(prisma.requests, 'findUnique').mockResolvedValue(request);

        await expect(service.findOne(requestId)).resolves.toStrictEqual(
          request,
        );
        expect(prisma.requests.findUnique).toHaveBeenCalled();
      });
    });
  });

  describe('create', () => {
    describe('give the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.requests, 'create')
          .mockRejectedValue(new BadRequestException('Invalid input'));

        try {
          await service.create(invalidRequestInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.requests.create).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid input', () => {
      it('should return a new requests', async () => {
        jest.spyOn(prisma.requests, 'create').mockResolvedValue(request);

        await expect(service.create(requestInput)).resolves.toStrictEqual(
          request,
        );

        expect(prisma.requests.create).toHaveBeenCalled();
      });
    });
  });

  describe('update', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.requests, 'update')
          .mockRejectedValue(new NotFoundException());
        try {
          await service.update(requestId, requestInput);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.requests.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id but the invalid input', () => {
      it('should return a 400', async () => {
        jest
          .spyOn(prisma.requests, 'update')
          .mockRejectedValue(new BadRequestException());
        try {
          await service.update(requestId, invalidRequestInput);
        } catch (err) {
          expect(err.status).toBe(400);
          expect(prisma.requests.update).toHaveBeenCalled();
        }
      });
    });

    describe('give the valid id and the valid input', () => {
      it('should return an updated requests', async () => {
        jest.spyOn(prisma.requests, 'update').mockResolvedValue(request);

        await expect(
          service.update(requestId, requestInput),
        ).resolves.toStrictEqual(request);

        expect(prisma.requests.update).toHaveBeenCalled();
      });
    });
  });

  describe('delete', () => {
    describe('give the invalid id', () => {
      it('should return a 404', async () => {
        jest
          .spyOn(prisma.requests, 'delete')
          .mockRejectedValue(new NotFoundException());

        try {
          await service.delete(requestId);
        } catch (err) {
          expect(err.status).toBe(404);
          expect(prisma.requests.delete).toHaveBeenCalledTimes(1);
        }
      });
    });

    describe('give the valid id', () => {
      it('should return null', async () => {
        jest.spyOn(prisma.requests, 'delete').mockResolvedValue(null);

        await expect(service.delete(requestId)).resolves.toBe(null);

        expect(prisma.requests.delete).toHaveBeenCalledTimes(1);
      });
    });
  });
});
