import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosCompradosPage } from './eventos-comprados';

@NgModule({
  declarations: [
    EventosCompradosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosCompradosPage),
  ],
})
export class EventosCompradosPageModule {}
