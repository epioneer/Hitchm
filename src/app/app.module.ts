import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login'; 
import { IntroductionsPage } from '../pages/introductions/introductions';
import { ChatPage } from '../pages/chat/chat';
import { AddPage } from '../pages/add/add';
import { SettingsPage } from '../pages/settings/settings';
import { IntroEmilyPage } from '../pages/intro-emily/intro-emily'; 
import { ProfileSamanthaPage } from '../pages/profile-samantha/profile-samantha';
import { ChatSamanthaPage } from '../pages/chat-samantha/chat-samantha';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IntroductionsPage,
    ChatPage,
    AddPage,
    SettingsPage,
    IntroEmilyPage,
    LoginPage,
    ProfileSamanthaPage,
    ChatSamanthaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IntroductionsPage,
    ChatPage,
    AddPage,
    SettingsPage,
    IntroEmilyPage,
    LoginPage,
    ProfileSamanthaPage,
    ChatSamanthaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
