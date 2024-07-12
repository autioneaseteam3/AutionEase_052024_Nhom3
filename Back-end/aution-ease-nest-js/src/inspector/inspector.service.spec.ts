import { Test, TestingModule } from '@nestjs/testing';
import { InspectorsService } from './inspector.service';

describe('AppraiserService', () => {
  let service: InspectorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InspectorsService],
    }).compile();

    service = module.get<InspectorsService>(InspectorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
