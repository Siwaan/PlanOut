import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarServiceProvider } from '../../providers/bar-service/bar-service';

/**
 * Generated class for the DetailsBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-bar',
  templateUrl: 'details-bar.html',
})
export class DetailsBarPage implements OnInit {
detailsBar : any = [];
horaires : any = [];
commentaires : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private barService : BarServiceProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DetailsBarPage');
  }
  ngOnInit(){
    this.barService.choixDetailBar().subscribe(data =>{
      this.detailsBar = data.result;
      this.horaires = data.result.opening_hours.weekday_text;
      this.commentaires = data.result.reviews;
      console.log(this.detailsBar);
      
    })
  }

}
