import { Injectable } from '@angular/core';
import { userLoginView } from '../models/userLoginView.model';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  private  session:userLoginView = new userLoginView();
  public  registerSesion(user:userLoginView):void {
    this.session = user;
  }
  public  isLogued():boolean {
    return (this.session.usuario.length > 0 && this.session.password.length > 0) ? true : false; 
  }
  public  cleanSession():void{
    this.session = new userLoginView();
  }
}
