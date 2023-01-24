import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  srcUrl: string;

  @Prop({
    required: true,
    validate: [tagArrayLimit, '{PATH} length should be in range: [3, 6]'],
  })
  tags: string[];

  @Prop({ required: true })
  publishedOn: Date;

  @Prop({
    required: true,
    validate: [timeToReadRange, '{PATH} value should be in range [5, 1000]'],
  })
  timeReqToReadInMinutes: number;
}

function tagArrayLimit(val) {
  return val.length <= 6 && val.length >= 3;
}

function timeToReadRange(val) {
  return val >= 5 && val <= 1000;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
