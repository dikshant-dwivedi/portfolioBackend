import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';
import { firebaseConfig } from './config/firebase.config';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, firebaseConfig],
    }),
    MongooseModule.forRoot(databaseConfig().mongodb_uri),
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
