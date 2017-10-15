import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login'
import {AuthSingletonProvider} from '../providers/auth-singleton/auth-singleton'
import {HttpReqProvider} from '../providers/http-req/http-req'
import { HttpModule } from '@angular/http';
import {WhmcsPage} from '../pages/whmcs/whmcs'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    WhmcsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    WhmcsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthSingletonProvider,
    HttpReqProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
