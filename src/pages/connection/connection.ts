import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { accueilPage} from '../accueil/accueil';
import {inscriptionPage} from '../inscription/inscription';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html'
})
export class connectionPage {
  identification:any = {};
  username : string;
  mdp: string;
  
  constructor(public navCtrl: NavController, public keyboard : Keyboard ,public http: Http, public httpClient: HttpClient, private userService: UserServiceProvider, private alertCtrl: AlertController) {
   this.identification.response = '';
    this.identification.username = '';
    this.identification.mdp = '';
    this.http = http;
    this.keyboard.disableScroll(true);
  }

/* scrollscreen() {
  setTimeout(() => {
  if (this.keyboard.isOpen()) {
  this.content.scrollToBottom(400);
  }
  }, 500);
  } */
  private goInscription() {
    // this.navCtrl.push("inscriptionPage");
    this.navCtrl.push(inscriptionPage);
  }
  private goAccueil(){
    // this.navCtrl.push("accueilPage");
    this.navCtrl.push(accueilPage);
  }
  private connexion() {
    console.log(this.identification.username);
    console.log(this.identification.mdp);
    var login = this.identification.username;
    var link = 'http://localhost/projetTut/Identification/traitelogin.php';
    var infos = JSON.stringify({username: this.identification.username, mdp: this.identification.mdp});
    this.http.post(link, infos)
    .subscribe(data => {
      this.identification.response = data["_body"];
      if(this.identification.response == 'connexion') {
        this.userService.toRegister(this.identification.username);
        
      
        
       this.navCtrl.push(accueilPage);
      }else{
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: this.identification.response,
          buttons: ['Fermer']
        });
        alert.present();

      }
    }, error => {console.log('oops!');
    });
   
  }
}

