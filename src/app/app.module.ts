import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { connectionPage } from '../pages/connection/connection';
import { inscriptionPage } from '../pages/inscription/inscription';
import { accueilPage} from '../pages/accueil/accueil';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { NativeStorage } from '@ionic-native/native-storage';
import { AmisPage } from '../pages/amis/amis';
import { VoteProvider } from '../providers/vote/vote';
import { ListeBarPage } from '../pages/liste-bar/liste-bar';
import { DetailsBarPage } from '../pages/details-bar/details-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { BarServiceProvider } from '../providers/bar-service/bar-service';

@NgModule({
  declarations: [
    MyApp,
    connectionPage,
    inscriptionPage,
    accueilPage,
    AmisPage,
    ListeBarPage,
    DetailsBarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollAssist: false,
      autoFocusAssist: false 
      // scrollPadding: false
    }),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    connectionPage,
    inscriptionPage,
    accueilPage,
    AmisPage,
    ListeBarPage,
    DetailsBarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    NativeStorage,
    VoteProvider,
    BarServiceProvider
  ]
})
export class AppModule {}
