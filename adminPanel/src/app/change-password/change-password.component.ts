import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userToken:String;
  constructor(public router:Router, public firestore:AngularFirestore) { }


  ngOnInit() {
    console.log(localStorage.getItem('userToken'));
    this.userToken=localStorage.getItem('userToken')
  }
  changepassword(formdata){
    console.log(formdata.value)
    let data = formdata.value.password
    console.log(data)
  //  this.firestore.doc('User/'+this.userToken).update(data)
    this.firestore.doc('AdminUser/'+this.userToken).update({ password: data });
    this.router.navigate(['/home'])
  }

}
