import { Test, TestingModule } from '@nestjs/testing';
import { MyDetailsService } from './my-details.service';

describe('MyDetailsService', () => {
  let service: MyDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyDetailsService],
    }).compile();

    service = module.get<MyDetailsService>(MyDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
