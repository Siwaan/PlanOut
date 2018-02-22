import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the BarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarServiceProvider {
idPlace : any;
  constructor(public http: HttpClient) {
  }
listeBar() : Observable<any>{
  return this.http.get('http://localhost/projetTut/httpGet/nearbySearch.php')
  
}
registerChoixBarId(place_id){
this.idPlace = place_id;
// console.log(this.idPlace);
}
choixDetailBar() : Observable<any>{
  return this.http.get('http://localhost/projetTut/httpGet/ChoixDetailBar.php?place_id='+ this.idPlace);
}
}
