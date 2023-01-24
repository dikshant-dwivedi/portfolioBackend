import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';
import { firebaseConfig } from './config/firebase.config';
import { databaseConfig } from './config/database.config';
import { AudioModule } from './audio/audio.module';
import { BlogModule } from './blog/blog.module';
import { CertificateModule } from './certificate/certificate.module';
import { ExperienceModule } from './experience/experience.module';
import { MyDetailsModule } from './my-details/my-details.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, firebaseConfig],
    }),
    MongooseModule.forRoot(databaseConfig().mongodb_uri),
    AudioModule,
    BlogModule,
    CertificateModule,
    ExperienceModule,
    MyDetailsModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
