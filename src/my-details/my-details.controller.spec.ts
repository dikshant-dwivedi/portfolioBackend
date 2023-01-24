import { Test, TestingModule } from '@nestjs/testing';
import { MyDetailsController } from './my-details.controller';
import { MyDetailsService } from './my-details.service';

describe('MyDetailsController', () => {
  let controller: MyDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyDetailsController],
      providers: [MyDetailsService],
    }).compile();

    controller = module.get<MyDetailsController>(MyDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
