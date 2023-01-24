import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

export enum ExperienceType {
  EDUCATION = 'education',
  WORK = 'work',
}

@Schema()
export class Experience {
  @Prop({
    type: String,
    enum: ExperienceType,
    default: ExperienceType.WORK,
  })
  tag: ExperienceType;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  position: string;

  @Prop({ type: [String], required: true })
  description: string[];

  @Prop({
    type: {
      link: { type: String },
      url: { type: String },
    },
    required: true,
  })
  link: {
    text: string;
    url: string;
  };
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
