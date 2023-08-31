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
    const {usuario, password} = userView; 
    if (usuario.length > 0 && password.length > 0 ){
      this.sessionService.registerSesion(userView);
    }
  }

  public logout():void{
    this.sessionService.cleanSession();
  }
  
  public getTeams():Observable <any>{
    return this.http.get<any>(`${this.URL_BASE}equipos/listar/0/30`);
  }

  public searchIdTeam(id:Number):Observable <any>{
    return this.http.get<any>(`${this.URL_BASE}equipos/consultar/${id}`)
  }

  public searchDateTeam(startDate:string, endDate:string):Observable <any>{
    return this.http.get<any>(`${this.URL_BASE}equipos/consultar/${startDate}/${endDate}`);
  }

  public createTeam(data:Team):Observable<any>{
    return this.http.post<any>(`${this.URL_BASE}equipos/crear`, data)
  }
}
