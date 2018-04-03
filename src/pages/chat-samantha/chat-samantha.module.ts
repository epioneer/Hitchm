import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatSamanthaPage } from './chat-samantha';

@NgModule({
  declarations: [
    ChatSamanthaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatSamanthaPage),
  ],
})
export class ChatSamanthaPageModule {}
