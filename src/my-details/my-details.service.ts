import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMyDetailDto } from './dto/create-my-detail.dto';
import { UpdateMyDetailDto } from './dto/update-my-detail.dto';
import { MyDetails, MyDetailsDocument } from './entities/my-detail.entity';

@Injectable()
export class MyDetailsService {
  constructor(
    @InjectModel(MyDetails.name)
    private myDetailsModel: Model<MyDetailsDocument>,
  ) {}

  create(createMyDetailDto: CreateMyDetailDto) {
    return 'This action adds a new myDetail';
  }

  findAll() {
    return `This action returns all myDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myDetail`;
  }

  update(id: number, updateMyDetailDto: UpdateMyDetailDto) {
    return `This action updates a #${id} myDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} myDetail`;
  }
}
