import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { connectionPage } from '../pages/connection/connection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = connectionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private keyboard : Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();
      this.keyboard.disableScroll(true);
    });
  }
}

