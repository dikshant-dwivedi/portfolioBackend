import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://dikshant-dwivedi:OQhCKmxt7uB3h9V9@cluster0.swpctps.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads'),
      serveRoot: '/uploads/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
