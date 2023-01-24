import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AudioDocument = HydratedDocument<Audio>;

@Schema()
export class Audio {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  link: string;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);
