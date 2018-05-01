import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventHistoryPage } from './event-history';

@NgModule({
  declarations: [
    EventHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(EventHistoryPage),
  ],
})
export class EventHistoryPageModule {}
