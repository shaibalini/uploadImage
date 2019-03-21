import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA052Vy6tBdOlpOa1HQ7eRw25iRM3uwxJc",
    authDomain: "uploadimage-3782c.firebaseapp.com",
    
    projectId: "uploadimage-3782c",
    storageBucket: "uploadimage-3782c.appspot.com"
    
    }),
    AngularFireStorageModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,UploaderComponent]
})
export class AppModule { }
