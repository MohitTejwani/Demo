import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboadComponent } from './dashboad/dashboad.component';
import { HeaderComponent }from './header/header.component'
import { SidemenuComponent }from './sidemenu/sidemenu.component'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AllProductComponent } from './all-product/all-product.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:DashboadComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'allproduct',component:AllProductComponent},
  {path:'manageparoduct',component:ManageproductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboadComponent,
    LoginComponent,
    HeaderComponent,
    SidemenuComponent,
    ChangePasswordComponent,
    AllProductComponent,
    ManageproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
