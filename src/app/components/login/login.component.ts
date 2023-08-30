import { Component } from '@angular/core';
import {userLoginView} from '../../models/userLoginView.model';
import { HttpClient } from '@angular/common/http';
import { SessionServiceService } from 'src/app/services/session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public hide:boolean;
  public userView:userLoginView;
  constructor(private http:HttpClient, private sessionService:SessionServiceService){
    this.userView = new userLoginView();
    this.hide = true;
  }
  public login(event:any):void{
    //aca va la logica de envio
    const {usuario, password} = this.userView; 
    if (usuario.length > 0 && password.length > 0 ){
      this.sessionService.registerSesion(this.userView);
    }
    console.log(this.sessionService.isLogued())
  }
}
