import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeBarPage } from './liste-bar';

@NgModule({
  declarations: [
    ListeBarPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeBarPage),
  ],
})
export class ListeBarPageModule {}
