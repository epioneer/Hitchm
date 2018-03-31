import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionsEmilyPage } from './introductions/emily';

@NgModule({
  declarations: [
    EmilyPage,
  ],
  imports: [
    IonicPageModule.forChild(EmilyPage),
  ],
})
export class EmilyPageModule {}
