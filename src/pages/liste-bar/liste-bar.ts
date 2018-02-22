import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsBarPage } from '../details-bar/details-bar';
import { BarServiceProvider } from '../../providers/bar-service/bar-service';
import {accueilPage} from '../accueil/accueil';
/**
 * Generated class for the ListeBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-bar',
  templateUrl: 'liste-bar.html',
})
export class ListeBarPage implements OnInit {
  listeBars : any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barservice : BarServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeBarPage');
  }

  ngOnInit(){
    this.barservice.listeBar().subscribe(data =>{
  //  this.listeBars =  data.results.map(objet=>  objet.
   this.listeBars = data.results ;
   console.log(data.results.opening_hours);
 console.log( 'bar : ', this.listeBars );
     })
  }

  private onglet1() {
    let lien1 = document.getElementById("lien1");
    let lien2 = document.getElementById('lien2');

    let contenu1 = document.getElementById("contenu1");
    let contenu2 = document.getElementById('contenu2');


      lien1.classList.add('selected');
      lien2.classList.remove('selected');

      contenu1.classList.remove('hidden');
      contenu2.classList.add('hidden');



  }

  private onglet2(){

    let lien1 = document.getElementById("lien1");
    let lien2 = document.getElementById('lien2');

    let contenu1 = document.getElementById("contenu1");
    let contenu2 = document.getElementById('contenu2');



    lien1.classList.remove('selected');
    lien2.classList.add('selected');

    contenu1.classList.add('hidden');
    contenu2.classList.remove('hidden');


}

  private goAccueil(){
    this.navCtrl.push(accueilPage);
  }




  goDetailBar(place_id){
    this.barservice.registerChoixBarId(place_id.place_id);
    this.navCtrl.push(DetailsBarPage);
    // console.log(place_id.place_id);
  }

}
