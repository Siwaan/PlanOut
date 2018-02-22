import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {connectionPage} from '../connection/connection';
import $ from 'jquery';
import { Http} from '@angular/http';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { UserServiceProvider } from '../../providers/user-service/user-service';
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class inscriptionPage {
  username : string;
mail: string;
mdp:  string;
mdp2: string;
data:any = {};

  constructor(public navCtrl: NavController, public http: Http, private userService : UserServiceProvider, private alertCtrl : AlertController) {
this.data.username = '';
this.data.mail = '';
this.data.mdp = '';
this.data.mdp2 = '';
this.data.response = '';
this.http = http;
  }
private goConnection() {
  this.navCtrl.push(connectionPage);

}
private inscription() {
var link = 'http://localhost/projetTut/inscription/inscription.php';
var infos = JSON.stringify({username: this.data.username, mail: this.data.mail, mdp: this.data.mdp, mdp2: this.data.mdp2});
this.http.post(link, infos)
.subscribe(data => {
  this.data.response = data["_body"];
  this.userService.SetAmis(this.data.username).subscribe(dataAmis =>{
    console.log('friendList set');
    
  });
  let alert = this.alertCtrl.create({
    title: 'Erreur',
    subTitle: this.data.response,
    buttons: ['Fermer']
  });
  alert.present();
}, error => {console.log('oops!');
});

/*   $(document).ready(function () {
    $.getJSON("http://localhost/projetTut/inscription/inscription.php?nom="+this.nom+"&prenom="+this.prenom+"&mail="+this.mail+"&mdp="+this.mdp+"&mdp2="+this.mdp2+"",function(result) {
      console.log(result);
    })  
   
  }) */
   // this.navCtrl.push(connectionPage);
}
}