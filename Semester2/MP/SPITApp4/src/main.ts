import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"spit-app-tony","appId":"1:697644073912:web:a43fed45f6fb039846054d","storageBucket":"spit-app-tony.appspot.com","apiKey":"AIzaSyBTFLjtUgiC_s8j8Ni5b7h8WHKQL0epbCo","authDomain":"spit-app-tony.firebaseapp.com","messagingSenderId":"697644073912","measurementId":"G-5NZJWSPMVC"}))), importProvidersFrom(provideAuth(() => getAuth())),
  ],
});
