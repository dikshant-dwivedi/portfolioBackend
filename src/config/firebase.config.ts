export interface FirebaseConfig {
  firebase_api_key: string;
  firebase_auth_domain: string;
  firebase_project_id: string;
  firebase_storage_bucket: string;
  firebase_messaging_sender_id: string;
  firebase_app_id: string;
  firebase_measurement_id: string;
}

export const firebaseConfig = () => ({
  firebase_api_key: process.env.FIREBASE_API_KEY,
  firebase_auth_domain: process.env.FIREBASE_AUTH_DOMAIN,
  firebase_project_id: process.env.FIREBASE_PROJECT_ID,
  firebase_storage_bucket: process.env.FIREBASE_STORAGE_BUCKET,
  firebase_messaging_sender_id: process.env.FIREBASE_MESSAGING_SENDER_ID,
  firebase_app_id: process.env.FIREBASE_APP_ID,
  firebase_measurement_id: process.env.FIREBASE_MEASUREMENT_ID,
});
