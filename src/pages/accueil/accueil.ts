import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {connectionPage} from '../connection/connection';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import $ from 'jquery';
import { AmisPage } from '../amis/amis';
import { ListeBarPage } from '../liste-bar/liste-bar';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',

})
export class accueilPage {

result:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider) {
   /*  var affichage = function(){ 
   this.result = userService.infos();
   console.log('result :', this.result); } */

  

    }
    ngOnInit() {
  		
      this.userService.infos().subscribe(data => {
    
          
         this.result = data;
         console.log(this.result);
        this.userService.getIdentification(this.result.user_id);
      });
      
    }
    goConnexion(){
      this.navCtrl.push(connectionPage);
    }
  goAmis(){
    this.navCtrl.push(AmisPage);
  }
goListeBar(){
  this.navCtrl.push(ListeBarPage);

}
}

 
  

