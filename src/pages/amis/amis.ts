import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { accueilPage } from '../accueil/accueil';

/**
 * Generated class for the AmisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amis',
  templateUrl: 'amis.html',
})
export class AmisPage {
amis:any = [];
NonAmis:any = [];
confirmMoi:any = [];
recherche : string = "";
reponseAmi : any = {};
reponse : string = "";
reponseAjoutAmis : any = {}; 
reponsePotentielAmi  :any = {};
confirmAutre:any = [];
username:any = "";
reponseConfirm : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService : UserServiceProvider, private alertCtrl: AlertController) {
  }

  
ngOnInit(){
this.userService.getListeAmis().subscribe(dataAmis=>{
this.amis = dataAmis;
console.log(this.amis);
})

this.userService.listeConfirmAmisMoi()
.subscribe(dataconfirmMoi =>{
  this.confirmMoi = dataconfirmMoi;
  console.log(dataconfirmMoi);
  
  
})

}
listeNonAmis(){
  this.userService.getListeNonAmis(this.recherche)
.subscribe(dataNonAmis =>{
  this.NonAmis = dataNonAmis;
  console.log(dataNonAmis);
  
  
})
}
/* affichage(){
  this.userService.getListeAmis().subscribe(dataAmis=>{
    this.amis = dataAmis;
    console.log(this.amis);
    })
    this.userService.getListeNonAmis()
    .subscribe(dataNonAmis =>{
      this.NonAmis = dataNonAmis;
      console.log(dataNonAmis);
      
      
    })
    this.userService.listeConfirmAmisMoi()
    .subscribe(dataconfirmMoi =>{
      this.confirmMoi = dataconfirmMoi;
      console.log(dataconfirmMoi);
      
      
    })
} */

ajouterAmis(ami : string){
  // console.log('toto');
  console.log(ami);
// console.log(this.amis);
  this.userService.AjoutAmis(ami).subscribe(data=>{
    this.reponseAjoutAmis.reponse = data["_body"];
    let alert = this.alertCtrl.create({
      title: 'OK',
      subTitle: this.reponseAjoutAmis.reponse,
      buttons: ['Fermer']
    });
    alert.present();
    // console.log(this.reponseAjoutAmis.reponse);
    this.userService.getListeAmis().subscribe(dataAmis=>{
      this.amis = dataAmis;
      // console.log(this.amis);
      })
   /*    this.userService.getListeNonAmis()
      .subscribe(dataNonAmis =>{
        this.NonAmis = dataNonAmis;
        // console.log(dataNonAmis);
        
        
      }) */
      this.userService.listeConfirmAmisMoi()
      .subscribe(dataconfirmMoi =>{
        this.confirmMoi = dataconfirmMoi;
        // console.log(dataconfirmMoi);
        
        
      })
  });
}
supprimerAmis(ami : string){
  this.userService.supprimeAmis(ami)
  .subscribe( data=>{
    this.reponseAmi.reponse = data["_body"];
    let alert = this.alertCtrl.create({
      title: 'OK',
      subTitle: this.reponseAmi.reponse,
      buttons: ['Fermer']
    });
    alert.present();
    this.userService.getListeAmis().subscribe(dataAmis=>{
      this.amis = dataAmis;
      console.log(this.amis);
      })
      /* this.userService.getListeNonAmis()
      .subscribe(dataNonAmis =>{
        this.NonAmis = dataNonAmis;
        console.log(dataNonAmis);
        
        
      }) */
      this.userService.listeConfirmAmisMoi()
      .subscribe(dataconfirmMoi =>{
        this.confirmMoi = dataconfirmMoi;
        console.log(dataconfirmMoi);
        
        
      })

  } );
}
confirmation(ami){
  console.log(ami);
  this.userService.ConfirmAmis(ami).subscribe(data=>{
    this.reponseConfirm.reponse = data["_body"];
    let alert = this.alertCtrl.create({
      title: 'OK',
      subTitle: this.reponseConfirm.reponse,
      buttons: ['Fermer']
    });
    alert.present();
    this.userService.getListeAmis().subscribe(dataAmis=>{
      this.amis = dataAmis;
      console.log(this.amis);
      })
  /*     this.userService.getListeNonAmis()
      .subscribe(dataNonAmis =>{
        this.NonAmis = dataNonAmis;
        console.log(dataNonAmis);
        
        
      }) */
      this.userService.listeConfirmAmisMoi()
      .subscribe(dataconfirmMoi =>{
        this.confirmMoi = dataconfirmMoi;
        console.log(dataconfirmMoi);
        
        
      })
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
console.log('toto')


  lien1.classList.remove('selected');
  lien2.classList.add('selected');

  contenu1.classList.add('hidden');
  contenu2.classList.remove('hidden');


}

private goAccueil(){
  this.navCtrl.push(accueilPage);
}


}
