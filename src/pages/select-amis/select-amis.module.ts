import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectAmisPage } from './select-amis';

@NgModule({
  declarations: [
    SelectAmisPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectAmisPage),
  ],
})
export class SelectAmisPageModule {}
