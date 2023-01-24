import { Module } from '@nestjs/common';
import { MyDetailsService } from './my-details.service';
import { MyDetailsController } from './my-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MyDetails, MyDetailsSchema } from './entities/my-detail.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MyDetails.name, schema: MyDetailsSchema },
    ]),
  ],
  controllers: [MyDetailsController],
  providers: [MyDetailsService],
})
export class MyDetailsModule {}
