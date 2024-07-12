import { Test, TestingModule } from '@nestjs/testing';
import { DetailInspectorService } from './detail-inspector.service';

describe('DetailInspectorService', () => {
  let service: DetailInspectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailInspectorService],
    }).compile();

    service = module.get<DetailInspectorService>(DetailInspectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
