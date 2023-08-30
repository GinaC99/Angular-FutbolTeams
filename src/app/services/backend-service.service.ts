import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionServiceService } from './session-service.service';
import {userLoginView} from '../models/userLoginView.model';
import { Team } from '../models/team.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  private URL_BASE:string;
  dataResponse: any = {}
  constructor(private http: HttpClient, private sessionService:SessionServiceService) { 
    this.URL_BASE = 'https://wo-fifa.azurewebsites.net/';
  }

  public login(userView:userLoginView):void{
    const {usuario, password} =userView; 
    if (usuario.length > 0 && password.length > 0 ){
      this.sessionService.registerSesion(userView);
    }
    console.log(this.sessionService.isLogued())
  }
  public getTeams():Observable <any>{
    return this.http.get<any>(this.URL_BASE + 'equipos/listar'+ '/0/50');
    // .subscribe(resp => {
    //   res = resp
    //   console.log(resp, 'aca')
    // });
    // let response:Array<Team> = res?.content;
    // console.log(res);
    // console.log(response);
    // return response;
  }
}
