import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoEventoPage } from './info-evento';

@NgModule({
  declarations: [
    InfoEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoEventoPage),
  ],
})
export class InfoEventoPageModule {}
