import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(public db:AngularFirestore) { }
  login(formdata){
    return this.db.collection('AdminUser',ref=>ref.where('email','==',formdata.value.email)).snapshotChanges() 
  }

}
