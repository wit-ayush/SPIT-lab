// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBTFLjtUgiC_s8j8Ni5b7h8WHKQL0epbCo",
    authDomain: "spit-app-tony.firebaseapp.com",
    projectId: "spit-app-tony",
    storageBucket: "spit-app-tony.appspot.com",
    messagingSenderId: "697644073912",
    appId: "1:697644073912:web:a43fed45f6fb039846054d",
    measurementId: "G-5NZJWSPMVC"
  },
  // firebaseApp: undefined,
  // analytics: undefined
};


// Initialize Firebase
// const firebaseApp = initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

/*
// // Initialize Firebase
// if (environment.firebaseConfig) {
//   environment.firebaseApp = initializeApp(environment.firebaseConfig);
//   if (environment.firebaseApp) {
//     environment.analytics = getAnalytics(environment.firebaseApp);
//   }
// }

 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
