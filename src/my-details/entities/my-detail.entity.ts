import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MyDetailsDocument = HydratedDocument<MyDetails>;

export class Link {
  title: string;
  url: string;
  isDownloadable: boolean;
}

@Schema()
export class MyDetails {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  aboutMe: string;

  @Prop({ required: true })
  contact: string;

  @Prop({
    type: {
      title: String,
      url: String,
      isDownloadable: { type: Boolean, default: false },
    },
    required: true,
    validate: [
      limitLinkArrayLength,
      '{PATH} can only accept these values: {3, 4, 6, 8, [9, inf)}',
    ],
  })
  links: Link[];
}

function limitLinkArrayLength(val) {
  return (
    val === 3 ||
    val.length == 4 ||
    val.length === 6 ||
    val.length === 8 ||
    val.length >= 9
  );
}

export const MyDetailsSchema = SchemaFactory.createForClass(MyDetails);
