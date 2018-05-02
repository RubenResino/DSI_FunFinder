import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosCreadosPage } from './eventos-creados';

@NgModule({
  declarations: [
    EventosCreadosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosCreadosPage),
  ],
})
export class EventosCreadosPageModule {}
