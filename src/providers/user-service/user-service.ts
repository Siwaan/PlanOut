import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  user_register: string = "";
  identifiant : string = "" ;
  mail: string = "";
  username:string = ""
  userInfo: Observable<any>;
  listeAmis: Observable<any>;
  listeNonAmis: Observable<any>;
  constructor(public http: Http, public httpClient: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
infos() {
  

console.log();

  let url = 'http://localhost/projetTut/page-compte/infosUser.php?user=' +this.user_register+'';
  // console.log(url);
this.userInfo = this.http.get(url);
return this.userInfo.map(res => res.json());
}
toRegister(user) {
this.user_register = user;
console.log(this.user_register);
}

getIdentification(id){
  this.identifiant = id;
  console.log(this.identifiant);
}
SetAmis(username : string) : Observable<any>{
  
return this.http.get('http://localhost/projetTut/amis/configAmis.php?user='+username);

}
getListeAmis(){
  let url = 'http://localhost/projetTut/amis/liste-amis.php?user=' +this.identifiant+'';
  // console.log(this.identifiant);
  this.listeAmis = this.http.get(url);
  return this.listeAmis.map(amis => amis.json());

}

getListeNonAmis(autre) : Observable<any>{
  console.log(autre);
  let url = 'http://localhost/projetTut/amis/liste-non-amis.php?user=' +this.identifiant+'&autre='+autre+'';
  console.log(url);
  // console.log(this.identifiant);
  this.listeNonAmis = this.http.get(url);
  console.log(this.listeNonAmis.map(pasAmis => pasAmis.json()));
  return this.listeNonAmis.map(pasAmis => pasAmis.json());
  
}
/* getListeNonAmis() : Observable<any>{
  
  let url = 'http://localhost/projetTut/amis/liste-non-amis.php?user=' +this.identifiant+'';
  console.log(url);
  // console.log(this.identifiant);
  this.listeNonAmis = this.http.get(url);
  console.log(this.listeNonAmis.map(pasAmis => pasAmis.json()));
  return this.listeNonAmis.map(pasAmis => pasAmis.json());
  
} */
AjoutAmis(ami : string) : Observable<any>{
  let url = 'http://localhost/projetTut/amis/ajoutAmis.php?user=' +this.identifiant+'&ami='+ami+'';
  return this.http.get(url);
}
listeConfirmAmisMoi() : Observable<any>{
  let url = 'http://localhost/projetTut/amis/liste-confirmation-moi.php?user=' +this.identifiant+'';
  return this.http.get(url).map(confirmAmis => confirmAmis.json());;
}
listeConfirmAmisAutre() : Observable<any>{
  let url = 'http://localhost/projetTut/amis/liste-confirmation-autre.php?user=' +this.identifiant+'';
  return this.http.get(url);
}
ConfirmAmis(ami : string){
  let url = 'http://localhost/projetTut/amis/confirmation.php?user=' +this.identifiant+'&ami='+ami+'';
  return this.http.get(url);
}
supprimeAmis(ami : string) : Observable<any> {
  let url = 'http://localhost/projetTut/amis/supprimer-amis.php?user=' +this.identifiant+'&ami='+ami+'';
  console.log(url);
 return this.http.get(url);
}
}
