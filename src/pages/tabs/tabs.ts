import { Component } from '@angular/core';

import { IntroductionsPage } from '../introductions/introductions';
import { ChatPage } from '../chat/chat';
import { AddPage } from '../add/add';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroductionsPage;
  tab2Root = ChatPage;
  tab3Root = AddPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
