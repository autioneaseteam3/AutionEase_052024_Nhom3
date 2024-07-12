import { Test, TestingModule } from '@nestjs/testing';
import { DetailInspectorController } from './detail-inspector.controller';

describe('DetailInspectorController', () => {
  let controller: DetailInspectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailInspectorController],
    }).compile();

    controller = module.get<DetailInspectorController>(DetailInspectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
