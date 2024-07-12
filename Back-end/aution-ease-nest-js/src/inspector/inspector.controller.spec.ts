import { Test, TestingModule } from '@nestjs/testing';
import { AppraiserController } from './inspector.controller';

describe('AppraiserController', () => {
  let controller: AppraiserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppraiserController],
    }).compile();

    controller = module.get<AppraiserController>(AppraiserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
