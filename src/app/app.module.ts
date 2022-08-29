import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
let config = {
  apiKey: 'AIzaSyC_p_1fh3wrhD7BhansxHa-ntkAiHJ3qzE',
  authDomain: 'signup-form-57e90.firebaseapp.com',
  projectId: 'signup-form-57e90',
  storageBucket: 'signup-form-57e90.appspot.com',
  messagingSenderId: '548088083797',
  appId: '1:548088083797:web:b1c85f89d2eb1e144e2bdc',
  measurementId: 'G-T0C7P08Z9X',
};
firebase.initializeApp(config);
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SignUpComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
