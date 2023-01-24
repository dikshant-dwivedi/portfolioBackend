import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  longDescription: string[];

  @Prop({ required: true })
  imgUrl: string;

  @Prop({ required: true })
  srcUrl: string;

  @Prop({
    required: true,
    validate: [tagArrayLimit, 'Number of tags should be in range of [3, 6]'],
  })
  tags: string[];

  @Prop({ required: true, default: false })
  isFeatured: boolean;
}

function tagArrayLimit(val) {
  return val.length <= 6 && val.length >= 3;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
