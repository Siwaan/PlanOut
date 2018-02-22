import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsBarPage } from './details-bar';

@NgModule({
  declarations: [
    DetailsBarPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsBarPage),
  ],
})
export class DetailsBarPageModule {}
