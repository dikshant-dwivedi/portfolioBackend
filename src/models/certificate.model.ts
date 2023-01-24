import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CertificateDocument = HydratedDocument<Certificate>;

@Schema()
export class Certificate {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  certificateLink: string;

  @Prop()
  description: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
