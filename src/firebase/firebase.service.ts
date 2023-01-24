import { Injectable } from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { ConfigService } from '@nestjs/config';
import { FirebaseConfig } from 'src/config/firebase.config';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;
  public storage: FirebaseStorage;

  constructor(private configService: ConfigService<FirebaseConfig>) {
    const firebaseConfig = {
      apiKey: configService.get<string>('firebase_api_key'),
      authDomain: configService.get<string>('firebase_auth_domain'),
      projectId: configService.get<string>('firebase_project_id'),
      storageBucket: configService.get<string>('firebase_storage_bucket'),
      messagingSenderId: configService.get<string>(
        'firebase_messaging_sender_id',
      ),
      appId: configService.get<string>('firebase_app_id'),
      measurementId: configService.get<string>('firebase_measurement_id'),
    };
    this.app = initializeApp(firebaseConfig);
    this.storage = getStorage(this.app);
  }
}
