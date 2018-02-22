import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmisPage } from './amis';

@NgModule({
  declarations: [
    AmisPage,
  ],
  imports: [
    IonicPageModule.forChild(AmisPage),
  ],
})
export class AmisPageModule {}
