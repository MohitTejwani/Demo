import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = [];
  flag = 0;
  invalidUser = 0;
  constructor(public firebase: FireServiceService, public router: Router) { }

  ngOnInit() {
  }
  logindata(formdata) {
    console.log(formdata.value)
    localStorage.removeItem('userToken')

    this.firebase.login(formdata).subscribe((res: any) => {
      this.userData.push(res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      }))

    })
    console.log(this.userData)

    this.userData.forEach(element => {
       console.log(element[0])
      if (formdata.value.password == element[0].password ) {
        this.flag = 1
        localStorage.setItem('userToken',element[0].id)
        if(formdata.value.password == "1234"){
          console.log(localStorage.getItem('userToken'))
           this.router.navigate(['/changepassword'])
        }else{
        
        this.router.navigate(['/home'])
        }
      }
    });
    if (this.flag==0) {
      this.invalidUser = 1;
    }

  }
}
